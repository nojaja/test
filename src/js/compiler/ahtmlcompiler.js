
import FileData from '../model/FileData.js'
import htmlparser from 'htmlparser'
import htmlcompiler from 'htmlcompiler'

//var htmlparser = Tautologistics.NodeHtmlParser;

export class AHtmlCompiler {
    constructor (fileContainer) {
        this.fileContainer = fileContainer
    }

    parseHtml (rawHtml) {
        return htmlparser.parseDOM(rawHtml, {
            enforceEmptyTags: true,
            ignoreWhitespace: true,
            caseSensitiveTags: true,
            caseSensitiveAttr: true,
            verbose: false
        })
    }
    async compile (targetFile, outpath) {
        let webComponentParser = new WebComponentParser({
            builder: ReactComponentBuilder
        });

        let reactRootParser = new ReactRootComponentBuilder({
            builder: ReactComponentBuilder
        });

        let builder = new HtmlBuilder({});
        //let builder2 = new HtmlBuilder({});
        //let debugBuilder = new DebugBuilder({});
        let cssbuilder = new CSSBuilder({});
        let reactComponentBuilder = new ReactComponentBuilder({});
        let compiler1 = new Compiler(
            [cssbuilder, webComponentParser, reactRootParser],
            {}
        );
        let compiler2 = new Compiler([builder], {});

        //-ここからDemo用処理----------------------------------
        //let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0,filename.lastIndexOf("."))
        let parseData = this.parseHtml(targetFile.getContent().trim())
        // data.dom.model.setValue(this.stringify(parseData));

        let domfile = new FileData()
        domfile.setFilename(outpath+filename+'_dom.json')
        domfile.setType('application/json')
        domfile.setContent(this.stringify(parseData))
        this.fileContainer.putFile(domfile)

        //await this.cachesLogic.saveCache(filename+'_dom.json',this.stringify(parseData),'application/json');
        compiler1.compile(parseData); //jsonオブジェクトを各種コードに変換します

        //editor4.setValue(cssbuilder.getNodes());

        webComponentParser.build(); //react化処理の実行
        //変換されたコードはwindowに読み込まれ実行可能になります。
        reactRootParser.build(); //react化処理の実行
        //変換されたコードはwindowに読み込まれ実行可能になります。
        // data.component.model.setValue(webComponentParser.getResult());
        
        let componentfile = new FileData()
        componentfile.setFilename(outpath+filename+'_component.js')
        componentfile.setType('text/javascript; charset=UTF-8')
        componentfile.setContent(webComponentParser.getResult())
        this.fileContainer.putFile(componentfile)
        //await this.cachesLogic.saveCache(filename+'_component.js',webComponentParser.getResult());

        // data.app.model.setValue(reactRootParser.getResult());
        
        let appfile = new FileData()
        appfile.setFilename(outpath+filename+'_app.js')
        appfile.setType('text/javascript; charset=UTF-8')
        appfile.setContent(webComponentParser.getResult())
        this.fileContainer.putFile(appfile)
        //await this.cachesLogic.saveCache(filename+'_app.js',reactRootParser.getResult());

        //targetFile.setEditorData(data)

        let bodyElements = parseData.getElementsByTagName("body");
        if (parseData.getElementsByTagName("head").length == 0) {
            let $html = parseData.getElementsByTagName("html");
            let newElement = $html[0].createElement("head");
            $html[0].insertBefore(newElement, bodyElements[0]);
        }
        let headElements = parseData.getElementsByTagName("head");
        headElements.forEach(function(headElement) {
        //head配下に追加
        let addpoint = headElement.getElementsByTagName("script")[0];
        {
            let newElement = headElement.createElement("script");
            let child = newElement.createTextNode(reactRootParser.getResult()+"\n//# sourceURL=app.js");
            newElement.appendChild(child);
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            let child = newElement.createTextNode(webComponentParser.getResult()+"\n//# sourceURL=Component.js");
            newElement.appendChild(child);
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            newElement.attributes = {
                src: [
                    {
                    type: "text",
                    data: "https://unpkg.com/react-dom@16/umd/react-dom.development.js"
                    }
                ]
            };
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            newElement.attributes = {
                src: [
                    {
                    type: "text",
                    data: "https://unpkg.com/react@16/umd/react.development.js"
                    }
                ]
            };
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        {
            let newElement = headElement.createElement("script");
            newElement.attributes = {
                src: [
                    {
                    type: "text",
                    data:
                        "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
                    }
                ]
            };
            headElement.insertBefore(newElement, addpoint);
            addpoint = newElement;
        }
        }, this);

        bodyElements.forEach(function (bodyElement) {
            {
                let newElement = bodyElement.createElement("script");
                let child = newElement.createTextNode(`
        var render = function render() {
            ReactDOM.render(
                React.createElement(App, null),
                document.querySelector("#app")
            );
        };

        $(function () {
            /* render initial component */
            render();
        });
                `);
                newElement.appendChild(child);
                bodyElement.appendChild(newElement);
            }
        }, this);
        compiler2.compile(parseData.children); //jsonオブジェクトを各種コードに変換します
        // data.html.model.setValue(builder.getNodes());
        
        let htmlfile = new FileData()
        htmlfile.setFilename(outpath+filename+'.html')
        htmlfile.setType('text/html; charset=UTF-8')
        htmlfile.setContent(builder.getNodes())
        this.fileContainer.putFile(htmlfile)

        //await this.cachesLogic.saveCache(filename+'.html',builder.getNodes(),'text/html; charset=UTF-8');
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
export default AHtmlCompiler