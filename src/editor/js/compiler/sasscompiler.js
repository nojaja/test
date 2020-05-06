export class SassCompiler {
    constructor (_cachesLogic) {
        this.cachesLogic = _cachesLogic
    }

    async compile(targetFile) {
        // var data = (targetFile)? addEditorData(fileContainer.getFile(targetFile)).getEditorData() : currentFile.getEditorData()
        // var filename = (targetFile)?fileContainer.getFile(targetFile).getFilename():currentFile.getFilename();
        let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0,filename.lastIndexOf("."));
        
        Sass.options('defaults');
        // Sass.compile(data.source.model.getValue().trim(), async function(result) {
        Sass.compile(data.trim(), async function(result) {
        if(result.status==0){
            console.log(result);
            data.compiled.model.setValue(result.text);
            data.source.decorations = data.source.model.deltaDecorations(data.source.decorations, { range: new monaco.Range(1,1,1,1), options : { } });
            await this.cachesLogic.saveCache(filename+'.css',result.text,'text/css; charset=UTF-8');
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