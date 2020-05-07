import * as monaco from 'monaco-editor'
import EditorFileData from './model/EditorFileData.js'
import AHtmlCompiler from './compiler/ahtmlcompiler.js'
import ES6Compiler from './compiler/es6compiler.js'
import MDCompiler from './compiler/mdcompiler.js'
import SassCompiler from './compiler/sasscompiler.js'

export class BuilderLogic {
    constructor (cachesLogic) {
        this.aHtmlCompiler = new AHtmlCompiler(cachesLogic)
        this.es6Compiler = new ES6Compiler(cachesLogic)
        this.mdCompiler = new MDCompiler(cachesLogic)
        this.sassCompiler = new SassCompiler(cachesLogic)
        this.cachesLogic = cachesLogic
    }
 
    //全てのsourceのcompile
    compileAll (fileContainer,cb) {
        let _compileAll = async () => {
            let compileResolve = (filename) => {
                return new Promise((resolve) => {
                    let _file = fileContainer.getFile(filename,EditorFileData,monaco) 
                    let language = _file.getLanguage().toLowerCase()
                    if (language=="ahtml") {
                        resolve(this.aHtmlCompiler.compile(_file))
                    } else if (language=="markdown") {
                        resolve(this.mdCompiler.compile(_file))
                    } else if (language=="javascript") {
                        resolve(this.es6Compiler.compile(_file))
                    } else if (language=="sass"||language=="scss") {
                        resolve(this.sassCompiler.compile(_file))
                    } else {
                        this.cachesLogic.saveCache('./'+filename,_file.getContent(),_file.getType());
                        resolve(true);
                    }
                });
            }
            const array = fileContainer.getFiles();
            const promiseAll = await Promise.all(
                array.map(async (filename) => {
                    return await compileResolve(filename)
                })
            );
            return promiseAll;
        }
        _compileAll().then(cb);
    }
}
export default BuilderLogic