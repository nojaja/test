
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'


export class HtmlStorage {
    constructor() {
    }

    loadList(cb) {
        //プロジェクト一覧取得
        // ROWID, filename, ext, timestamp, uid, scope,projectid
        let json = {
            rows: [
                //OUT [{description, id, public},,]
                { description: 'index', id: './sample/html/index.html', public: true }
            ]
        }
        return (cb) ? cb(json, "html") : json
    }

    //deleteDraft(fileContainer, url) {
    //}

    saveDraft(fileContainer) {
    }

    loadDraft(fileContainer, url, cb) {
        $.ajax({
            url: url
        }).done((data) => {
            fileContainer.init();

            let file = new FileData();
            file.setFilename("index.html");
            file.setContent(data);
            fileContainer.putFile(file);
            fileContainer.setId(fileContainer.getId())
            fileContainer.setProjectName($(data).find("title").text() || "new project");
            // console.log("fileContainer:" + fileContainer.getContainerJson());
            return (cb) ? cb(fileContainer) : fileContainer.getContainerJson();
        });
    }

}
export default HtmlStorage