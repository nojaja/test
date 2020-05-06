import marked from 'marked'

export class MDCompiler {
    constructor (_cachesLogic) {
        this.cachesLogic = _cachesLogic
    }
 
    async compile (targetFile) {
    // var data = (targetFile)?fileContainer.getFile(targetFile).getEditorData():currentFile.getEditorData();
    // var data = (targetFile)? addEditorData(fileContainer.getFile(targetFile)).getEditorData() : currentFile.getEditorData()
    // var filename = (targetFile)?fileContainer.getFile(targetFile).getFilename():currentFile.getFilename();
    let data = targetFile.getEditorData()
    let filename = targetFile.getFilename()
    filename = filename.substr(0,filename.lastIndexOf("."));
    console.log('mdcompile', targetFile, data)

    var parseData = marked(data.source.model.getValue().trim());
    data.html.model.setValue(parseData);
    await this.cachesLogic.saveCache(filename+'.html',parseData,'text/html; charset=UTF-8');
  }

}
export default MDCompiler