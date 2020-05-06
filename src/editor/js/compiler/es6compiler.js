export class ES6Compiler {
    constructor (_cachesLogic) {
        this.cachesLogic = _cachesLogic
    }

    async compile(targetFile) {
        // var data = (targetFile)?fileContainer.getFile(targetFile).getEditorData():currentFile.getEditorData();
        // var data = (targetFile)? addEditorData(fileContainer.getFile(targetFile)).getEditorData() : currentFile.getEditorData()
        // var filename = (targetFile)?fileContainer.getFile(targetFile).getFilename():currentFile.getFilename();
        let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0,filename.lastIndexOf("."));
        console.log('es6compile', targetFile, data)
        try {
        var parseData = Babel.transform(data.source.model.getValue().trim(),{"babelrc":false,"filename":filename,presets: ['es2015']});
        data.compiled.model.setValue(parseData.code);
        await this.cachesLogic.saveCache(filename+'.js',parseData.code,'text/javascript; charset=UTF-8');
        data.source.decorations = data.source.model.deltaDecorations(data.source.decorations, { range: new monaco.Range(1,1,1,1), options : { } });
        } catch (e) {
        console.log(e);
        UIkit.notify(e.toString(), { status: 'warning', timeout: 1000 });
        //エラー箇所の表示
        data.source.decorations = data.source.model.deltaDecorations(data.source.decorations, [
            { range: new monaco.Range(e.loc.line,1,e.loc.line,1), options: { isWholeLine: true, linesDecorationsClassName: 'warningLineDecoration' }},
        ]);
        }
    }

}
export default ES6Compiler