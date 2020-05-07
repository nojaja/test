
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'


export class HtmlStorage {
    constructor () {
    }

    saveDraft (fileContainer){
    }

    loadDraft (fileContainer,url,cb) {
        $.ajax({
            url: url
        }).done((data) => {
            fileContainer.init();
            
            let file = new FileData();
            file.setFilename("index.html");
            file.setContent(data);
            fileContainer.putFile(file);
            
            fileContainer.setProjectName($(data).find("title").text()||"new project");
            console.log("fileContainer:" + fileContainer.getContainerJson());
            return (cb)?cb(fileContainer):fileContainer.getContainerJson();
        });
    }

}
export default HtmlStorage