import * as monaco from 'monaco-editor'
import FileData from '../model/FileData.js'
import EditorFileData from '../model/EditorFileData.js'
import AHtmlCompiler from '../compiler/ahtmlcompiler.js'
import ES6Compiler from '../compiler/es6compiler.js'
import MDCompiler from '../compiler/mdcompiler.js'
import SassCompiler from '../compiler/sasscompiler.js'

export class BuilderLogic {
    constructor(fileContainer) {
        this.aHtmlCompiler = new AHtmlCompiler(fileContainer)
        this.es6Compiler = new ES6Compiler(fileContainer)
        this.mdCompiler = new MDCompiler(fileContainer)
        this.sassCompiler = new SassCompiler(fileContainer)
    }

    //全てのsourceのcompile
    async compileAll(fileContainer, srcpath = '', outpath, cb) {
        let _compileAll = async () => {
            let compileResolve = (filename) => {
                return new Promise((resolve) => {
                    let _file = fileContainer.getFile(filename)
                    let language = _file.getLanguage().toLowerCase()
                    if (language == "ahtml") {
                        resolve(this.aHtmlCompiler.compile(_file, outpath))
                    } else if (language == "markdown") {
                        resolve(this.mdCompiler.compile(_file, outpath))
                    } else if (language == "javascript") {
                        resolve(this.es6Compiler.compile(_file, outpath))
                    } else if (language == "sass" || language == "scss") {
                        resolve(this.sassCompiler.compile(_file, outpath))
                    } else {

                        let file = new FileData()
                        file.setFilename(outpath + filename)
                        file.setType(_file.getType())
                        file.setContent(_file.getContent())
                        fileContainer.putFile(file)
                        resolve(true);
                    }
                });
            }
            const array = fileContainer.getFiles();
            const promiseAll = await Promise.all(
                array.filter(filedata => {
                    return filedata.name.indexOf(outpath) != 0 && filedata.name.indexOf(srcpath) == 0
                }).map(async (filedata) => {
                    return await compileResolve(filedata.name)
                })
            );
            return promiseAll;
        }
        _compileAll().then(cb);
    }
}
export default BuilderLogic