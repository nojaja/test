
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

    //deleteDraft(fileContainer, url) {
    //}

    saveDraft(fileContainer) {
    }

    loadDraft(fileContainer, url, cb) {
        $.getJSON(this.siteurl + url).done((data) => {
            fileContainer.setContainer(data);
            fileContainer.setId(fileContainer.getId())
            fileContainer.setProjectName(data.description.split(/\r\n|\r|\n/)[0] || "new project")
            return (cb) ? cb(fileContainer) : fileContainer.getContainerJson();
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.log('gist save error',jqXHR, textStatus, errorThrown)
            $.UIkit.notify("error..", { status: 'error', timeout: 1000 });
        })
    }

}
export default StubStorage