import marked from 'marked'
import FileData from '../model/FileData.js'

export class MDCompiler {
    constructor (fileContainer) {
        this.fileContainer = fileContainer
    }
 
    async compile (targetFile, outpath) {
        let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0,filename.lastIndexOf("."));

        let parseData = marked(data.source.model.getValue().trim());
        data.html.model.setValue(parseData);
        
        let htmlfile = new FileData()
        htmlfile.setFilename(outpath+filename+'.html')
        htmlfile.setType('text/html; charset=UTF-8')
        htmlfile.setContent(parseData)
        this.fileContainer.putFile(htmlfile)
        //await this.cachesLogic.saveCache(filename+'.html',parseData,'text/html; charset=UTF-8');
    }

}
export default MDCompiler