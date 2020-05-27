import * as monaco from 'monaco-editor'
import FileData from '../model/FileData.js'
import EditorFileData from '../model/EditorFileData.js'
import AHtmlCompiler from '../compiler/ahtmlcompiler.js'
import ES6Compiler from '../compiler/es6compiler.js'
import MDCompiler from '../compiler/mdcompiler.js'
import SassCompiler from '../compiler/sasscompiler.js'
import HtmlCompiler from '../compiler/htmlcompiler.js'
import Logger from '../common/logger.js'

export class BuilderLogic {
    constructor(fileContainer) {
        this.logger = new Logger()

        let logPanel = $('#log-panel')
        this.logger.setOnerror( (...event) => {
            console.log('onerror',...event)
            logPanel.append($(`<pre class="log error">${event[0]}</pre>`));
        })
        this.logger.setLog( (...param) => {
            let _param = param.map(val => { 
              if (typeof val == 'object'){
                return JSON.stringify(val)
              } else if (typeof val === 'string'){
                return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
              } else {
                return val
              }
            })
            logPanel.append($(`<pre class="log">${_param}</pre>`));
        })
        this.logger.setDebug( (...param) => {
            console.debug(...param)
            let _param = param.map(val => { 
              if (typeof val == 'object'){
                return JSON.stringify(val)
              } else if (typeof val === 'string'){
                return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
              } else {
                return val
              }
            })
            logPanel.append($(`<pre class="log">${_param}</pre>`));
        })
        this.logger.setError( (...param) => {
            console.error(...param)
            UIkit.notify(...param.toString(), { status: 'warning', timeout: 1000 });
            let _param = param.map(val => { 
              if (typeof val == 'object'){
                return JSON.stringify(val)
              } else if (typeof val === 'string'){
                return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
              } else {
                return val
              }
            })
            logPanel.append($(`<pre class="log error">${_param}</pre>`));
        })
        this.logger.setInfo( (...param) => {
            console.info(...param)
            let _param = param.map(val => { 
              if (typeof val == 'object'){
                return JSON.stringify(val)
              } else if (typeof val === 'string'){
                return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
              } else {
                return val
              }
            })
            logPanel.append($(`<pre class="log">${_param}</pre>`));
        })
        this.logger.setTrace( (...param) => {
            console.trace(...param)
            let _param = param.map(val => { 
              if (typeof val == 'object'){
                return JSON.stringify(val)
              } else if (typeof val === 'string'){
                return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
              } else {
                return val
              }
            })
            logPanel.append($(`<pre class="log">${_param}</pre>`));
        })
        this.logger.setWarn( (...param) => {
            console.warn(...param)
            let _param = param.map(val => { 
              if (typeof val == 'object'){
                return JSON.stringify(val)
              } else if (typeof val === 'string'){
                return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
              } else {
                return val
              }
            })
            logPanel.append($(`<pre class="log">${_param}</pre>`));
        })
        this.aHtmlCompiler = new AHtmlCompiler(fileContainer, this.logger)
        this.htmlCompiler = new HtmlCompiler(fileContainer, this.logger)
        this.es6Compiler = new ES6Compiler(fileContainer, this.logger)
        this.mdCompiler = new MDCompiler(fileContainer, this.logger)
        this.sassCompiler = new SassCompiler(fileContainer, this.logger)
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
                    } else if (language == "html") {
                        resolve(this.htmlCompiler.compile(_file, outpath))
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