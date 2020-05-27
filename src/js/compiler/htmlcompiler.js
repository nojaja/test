
import FileData from '../model/FileData.js'
import htmlparser from '@nojaja/htmlparser'
import htmlcompiler from '@nojaja/htmlcompiler'


export class HtmlCompiler {
    constructor(fileContainer, logger) {
        this.fileContainer = fileContainer
        this.logger = logger
        window.logger = logger
    }

    parseHtml(rawHtml) {
        return htmlparser.parseDOM(rawHtml, {
            enforceEmptyTags: true,
            ignoreWhitespace: true,
            caseSensitiveTags: true,
            caseSensitiveAttr: true,
            verbose: false
        })
    }
    async compile(targetFile, outpath) {

        let builder = new HtmlBuilder({});
        let compiler = new Compiler([builder], {});

        //-ここからDemo用処理----------------------------------
        //let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0, filename.lastIndexOf("."))
        let vdom = this.parseHtml(targetFile.getContent().trim())
        
        let headElementList = vdom.getElementsByTagName('head')
        Object.keys(headElementList).forEach((key) => {
            let headElement = headElementList[key]
            let addpoint = headElement.getElementsByTagName("script")[0]
            let newElement = headElement.createElement("script")
            let child = newElement.createTextNode(`
window.onerror = window.parent.logger.getOnerror()
console.log = window.parent.logger.getLog()
console.debug = window.parent.logger.getDebug()
console.error = window.parent.logger.getError()
console.info = window.parent.logger.getInfo()
console.trace = window.parent.logger.getTrace()
console.warn = window.parent.logger.getWarn()
//# sourceURL=debug.js`)
            newElement.appendChild(child)
            headElement.insertBefore(newElement, addpoint)
        })

        compiler.compile(vdom.children) //jsonオブジェクトを各種コードに変換します
        let htmlfile = new FileData()
        htmlfile.setFilename(outpath + filename + '.html')
        htmlfile.setType('text/html; charset=UTF-8')
        htmlfile.setContent(builder.getNodes())
        await this.fileContainer.putFile(htmlfile)
    }

    stringify(str) {
        var cache = [];
        return JSON.stringify(
            str,
            function (key, value) {
                if (typeof value === "object" && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                    }
                    // Store value in our collection
                    cache.push(value);
                }
                if (key == "parentNode") return;
                return value;
            },
            "\t"
        )
    }
}
export default HtmlCompiler