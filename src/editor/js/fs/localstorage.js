
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'

export class LocalStorage {
    constructor () {
    }
    saveDraft (fileContainer) {
        // ローカルストレージに最新の状態を保存
        var name = 'draftContainer'+location.pathname.replace(/\//g, '.');
        localStorage.setItem(name, fileContainer.getContainerJson());
        console.log("draftContainer:" + fileContainer.getContainerJson());
        $.UIkit.notify("save..", {status:'success',timeout : 1000});
    }

    loadDraft (fileContainer,cb) {
        // ページが読み込まれたら、ローカルストレージから状態を読み込む
        var name1 = 'draftContainer'+location.pathname.replace(/\//g, '.');

        var name2 = 'draft'+location.pathname.replace(/\//g, '.');

        if(localStorage.getItem(name1)){
            fileContainer.setContainerJson(localStorage.getItem(name1));
        }else{
            var source = JSON.parse(localStorage.getItem(name2)) || null;
            var file = new FileData();
            file.setFilename("index.html");
            file.addEditorData('source', 'index.html', 'html', monaco.editor.createModel('', 'text/html'))
            file.getEditorData().source.model.setValue(file.setContent(source))
            fileContainer.putFile(file);
        }
        fileContainer.setProjectName(fileContainer.getProjectName() || "new project")
        console.log("fileContainer:" + fileContainer.getContainerJson());
        //return fileContainer.getContainerJson();
        return (cb)?cb(fileContainer):fileContainer.getContainerJson();
    }

}
export default LocalStorage