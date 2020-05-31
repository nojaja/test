
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'


export class WebStorage {
    constructor() {
        this.siteurl = './sample/sample_container/'
    }

    loadList(cb) {
        $.getJSON(this.siteurl + 'index.json').done((data) => {
            /*schema
                data = {
                    rows : [
                        //OUT [{description, id, public},,]
                        {description : 'index', id:'./sample/html/index.html', public:true}
                    ]
                }
            */
            return (cb) ? cb(data, "web") : data
        })
    }

    //deleteDraft(fileContainer, url) {
    //}

    saveDraft(fileContainer) {
    }

    loadDraft(fileContainer, url, cb) {
        $.getJSON(this.siteurl + url).done((data) => {
            fileContainer.setContainer(data);
            fileContainer.setId(fileContainer.getId())
            fileContainer.setProjectName(data.description.split(/\r\n|\r|\n/)[0] || "new project");
            //console.log("fileContainer:" + fileContainer.getContainerJson());
            return (cb) ? cb(fileContainer) : fileContainer.getContainerJson();
        })
    }

}
export default WebStorage