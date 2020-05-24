import FileData from '../model/FileData.js'
import * as Babel from '@babel/standalone'

export class ES6Compiler {
    constructor(fileContainer) {
        this.fileContainer = fileContainer
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
            console.log(e);
            UIkit.notify(e.toString(), { status: 'warning', timeout: 1000 });
            //エラー箇所の表示
            //todo if(data)data.decorations = data.model.deltaDecorations(data.decorations, [
            //todo     { range: new monaco.Range(e.loc.line,1,e.loc.line,1), options: { isWholeLine: true, linesDecorationsClassName: 'warningLineDecoration' }},
            //todo ]);
        }
    }

}
export default ES6Compiler