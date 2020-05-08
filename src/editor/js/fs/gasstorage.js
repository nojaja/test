
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'
import GistStorage from './giststorage.js'

var gistStorage = new GistStorage();
var gasUrl="https://script.google.com/macros/s/AKfycbzyNQRAwdTJ2yqdNzyD5-9nvb84kbkS4vztfcyuT8kwvqQhE-Lr/exec?p=/uid/reactcomponent/";

export class GasStorage {
    constructor () {
    }

    loadList (cb) {
        //プロジェクト一覧取得
        $.getJSON(gasUrl+ "&callback=?",  { t: '1' }, (json) => {
            return (cb)? cb(json, "gas") : json
        })
    }

    saveDraft (fileContainer) {
    }

    loadDraft (fileContainer,url,cb) {
        $.getJSON(gasUrl+url+ "&callback=?",  { t: '1' }, (json) => {
            console.log(json)
            if(json.ext==".gist"){
                return gistStorage(fileContainer,json.content,cb)
            }else{
                fileContainer.init()
                fileContainer.setProjectName(json.filename||"new project")
                let file = new FileData();
                file.setFilename("index.ahtml")
                file.setContent(json.content)
                fileContainer.putFile(file)
            
                console.log("fileContainer:" + fileContainer.getContainerJson())
                return (cb)?cb(fileContainer):fileContainer.getContainerJson()
            }
        })
    }

}
export default GasStorage