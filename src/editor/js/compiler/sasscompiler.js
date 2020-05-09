import FileData from '../model/FileData.js'

export class SassCompiler {
    constructor (fileContainer) {
        this.fileContainer = fileContainer
    }

    async compile (targetFile, outpath) {
        let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0,filename.lastIndexOf("."));
        
        Sass.options('defaults');
        // Sass.compile(data.source.model.getValue().trim(), async function(result) {
        Sass.compile(data.trim(), async (result) => {
            if(result.status==0){
                // console.log(result);
                data.compiled.model.setValue(result.text);
                data.source.decorations = data.source.model.deltaDecorations(data.source.decorations, { range: new monaco.Range(1,1,1,1), options : { } });
                
                let cssfile = new FileData()
                cssfile.setFilename(outpath+filename+'.css')
                cssfile.setType('text/css; charset=UTF-8')
                cssfile.setContent(result.text)
                this.fileContainer.putFile(cssfile)

                //await this.cachesLogic.saveCache(filename+'.css',result.text,'text/css; charset=UTF-8');
            }else{
                UIkit.notify(result.message, { status: 'warning', timeout: 1000 });
                //エラー箇所の表示
                data.source.decorations = data.source.model.deltaDecorations(data.source.decorations, [
                    { range: new monaco.Range(result.line,1,result.line,1), options: { isWholeLine: true, linesDecorationsClassName: 'warningLineDecoration' }},
                ]);
            }
        });
    }

}
export default SassCompiler