
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'

import GistStorage from './giststorage.js'
var gistStorage = new GistStorage();

var gasUrl="https://script.google.com/macros/s/AKfycbzyNQRAwdTJ2yqdNzyD5-9nvb84kbkS4vztfcyuT8kwvqQhE-Lr/exec?p=/uid/reactcomponent/";

export class GasStorage {
    constructor () {
    }
    loadList (cb){
        //プロジェクト一覧取得
        $.getJSON(gasUrl+ "&callback=?",  { t: '1' }, function(json){
            return (cb)?cb(json):json
        })
    }
    saveDraft (fileContainer){
    }

    loadDraft (fileContainer,url,cb) {
        $.getJSON(gasUrl+url+ "&callback=?",  { t: '1' }, function(json){
            console.log(json)
            if(json.ext==".gist"){
                return gistStorage(fileContainer,json.content,cb)
            }else{
                fileContainer.init()
                fileContainer.setProjectName(json.filename||"new project")
                var file = new FileData();
                file.setFilename("index.ahtml")

                file.addEditorData('source', 'index.ahtml', 'html', monaco.editor.createModel('', 'text/html'))
                file.addEditorData('dom', 'dom tree', 'json', monaco.editor.createModel('', 'application/json'))
                file.addEditorData('component', 'js component.js', 'javascript', monaco.editor.createModel('', 'text/javascript'))
                file.addEditorData('app', 'js app.js', 'javascript', monaco.editor.createModel('', 'text/javascript'))
                file.addEditorData('html', 'result(html)', 'html', monaco.editor.createModel('', 'text/html'))

                file.getEditorData().source.model.setValue(file.setContent(json.content))

                fileContainer.putFile(file)
            
                console.log("fileContainer:" + fileContainer.getContainerJson())
                return (cb)?cb(fileContainer):fileContainer.getContainerJson()
            }
        })
    }

}
export default GasStorage