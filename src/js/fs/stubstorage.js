
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'


export class StubStorage {
    constructor() {
        this.siteurl = './sample/blank_container/'
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
            return (cb) ? cb(data, "stub") : data
        })
    }

    saveDraft(fileContainer) {
    }

    loadDraft(fileContainer, url, cb) {
        console.log('loadDraft',this.siteurl + url)
        $.getJSON(this.siteurl + url).done((data) => {
            console.log('loadDraft2',this.siteurl + url)
            fileContainer.setContainer(data);
            fileContainer.setId(fileContainer.getId())
            fileContainer.setProjectName(data.description.split(/\r\n|\r|\n/)[0] || "new project");
            console.log("fileContainer:" + fileContainer.getContainerJson());
            return (cb) ? cb(fileContainer) : fileContainer.getContainerJson();
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log('loadDraft2.fail',jqXHR, textStatus, errorThrown)
            console.warn("gist save error", errorThrown);
            $.UIkit.notify("error..", { status: 'error', timeout: 1000 });
        })
    }

}
export default StubStorage