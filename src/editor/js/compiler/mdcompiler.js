import marked from 'marked'

export class MDCompiler {
    constructor (_cachesLogic) {
        this.cachesLogic = _cachesLogic
    }
 
    async compile (targetFile) {
        let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0,filename.lastIndexOf("."));

        var parseData = marked(data.source.model.getValue().trim());
        data.html.model.setValue(parseData);
        await this.cachesLogic.saveCache(filename+'.html',parseData,'text/html; charset=UTF-8');
    }

}
export default MDCompiler