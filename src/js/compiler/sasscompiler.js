import FileData from '../model/FileData.js'

export class SassCompiler {
    constructor(fileContainer, logger) {
        this.fileContainer = fileContainer
        this.logger = logger
        this.error = logger.getError()
        this.info = logger.getInfo()
    }

    async compile(targetFile, outpath) {
        //todo let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        console.log(filename)
        let ext = filename.substr(filename.lastIndexOf("."));
        filename = filename.substr(0, filename.lastIndexOf("."));
        console.log(filename)
        console.log(ext)
        if(ext==".sass"){
            Sass.options({indentedSyntax: true});
        } else {
            Sass.options({indentedSyntax: false});
        }
        // Sass.compile(data.source.model.getValue().trim(), async function(result) {
        Sass.compile(targetFile.getContent().trim(), async (result) => {
            if (result.status == 0) {
                // console.log(result);
                //data.compiled.model.setValue(result.text);

                let cssfile = new FileData()
                cssfile.setFilename(outpath + filename + '.css')
                cssfile.setType('text/css; charset=UTF-8')
                cssfile.setContent(result.text)
                await this.fileContainer.putFile(cssfile)

                //todo if(data)data.decorations = data.model.deltaDecorations(data.decorations, { range: new monaco.Range(1,1,1,1), options : { } });
                //await this.cachesLogic.saveCache(filename+'.css',result.text,'text/css; charset=UTF-8');
            } else {
                this.error(result.message + ' line:'+result.line+' column:'+result.column)
                UIkit.notify(result.message, { status: 'warning', timeout: 1000 });
                //エラー箇所の表示
                //todo if(data)data.decorations = data.model.deltaDecorations(data.decorations, [
                //todo     { range: new monaco.Range(result.line,1,result.line,1), options: { isWholeLine: true, linesDecorationsClassName: 'warningLineDecoration' }},
                //todo ]);
            }
        });
    }

}
export default SassCompiler