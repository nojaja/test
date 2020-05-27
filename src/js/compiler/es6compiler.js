import FileData from '../model/FileData.js'
import * as Babel from '@babel/standalone'

export class ES6Compiler {
    constructor(fileContainer, logger) {
        this.fileContainer = fileContainer
        this.logger = logger
        this.error = logger.getError()
    }

    async compile(targetFile, outpath) {
        //todo let data = targetFile.getEditorData()
        let filename = targetFile.getFilename()
        filename = filename.substr(0, filename.lastIndexOf("."));
        try {
            let parseData = Babel.transform(targetFile.getContent().trim(), { "babelrc": false, "filename": filename, presets: ['es2015'] });
            //data.compiled.model.setValue(parseData.code);

            let jsfile = new FileData()
            jsfile.setFilename(outpath + filename + '.js')
            jsfile.setType('text/javascript; charset=UTF-8')
            jsfile.setContent(parseData.code)
            await this.fileContainer.putFile(jsfile)

            //await this.cachesLogic.saveCache(filename+'.js',parseData.code,'text/javascript; charset=UTF-8');
            //todo if(data)data.decorations = data.model.deltaDecorations(data.decorations, { range: new monaco.Range(1,1,1,1), options : { } });
        } catch (e) {
            this.error(e)
            //エラー箇所の表示
            //todo if(data)data.decorations = data.model.deltaDecorations(data.decorations, [
            //todo     { range: new monaco.Range(e.loc.line,1,e.loc.line,1), options: { isWholeLine: true, linesDecorationsClassName: 'warningLineDecoration' }},
            //todo ]);
        }
    }

}
export default ES6Compiler