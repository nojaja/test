
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'

export class LocalStorage {
    constructor() {
    }
    loadList(cb) {
        //プロジェクト一覧取得
        // ROWID, filename, ext, timestamp, uid, scope,projectid
        //let json = {
        //    rows : [
        //        //OUT [{description, id, public},,]
        //        {description : 'index', id:'reactcomponent/index.text', public:true}
        //    ]
        //}

        let json = {
            rows: Object.keys(localStorage).filter((x, i, self) => /^Container_/.test(x)).map(key => {
                let data = JSON.parse(localStorage[key])
                return { "description": data.projectName, "id": key, "public": data.public }
            })
        }
        return (cb) ? cb(json, "local") : json
    }

    deleteDraft(fileContainer, path) {
        const name1 = path || 'draftContainer' + location.pathname.replace(/\//g, '.');
        if (localStorage.getItem(name1)) {
            localStorage.removeItem(name1)
        }
    }

    saveDraft(fileContainer) {
        this.updateInfoFile(fileContainer)
        // ローカルストレージに最新の状態を保存
        //const name = 'draftContainer'+location.pathname.replace(/\//g, '.');
        const prjName = 'Container_' + fileContainer.getId()
        localStorage.setItem(prjName, fileContainer.getContainerJson());
        // console.log("draftContainer:" + fileContainer.getContainerJson());
        $.UIkit.notify("save..", { status: 'success', timeout: 1000 });
    }

    loadDraft(fileContainer, path, cb) {
        // ページが読み込まれたら、ローカルストレージから状態を読み込む
        const name1 = path || 'draftContainer' + location.pathname.replace(/\//g, '.');
        if (localStorage.getItem(name1)) {
            fileContainer.setContainerJson(localStorage.getItem(name1));
        } else {
            fileContainer.init()

            const source = null;
            const file = new FileData();
            file.setFilename("index.html");
            file.setContent(source);
            fileContainer.putFile(file);
        }
        fileContainer.setId(fileContainer.getId())
        fileContainer.setProjectName(fileContainer.getProjectName() || "new project")
        // console.log("fileContainer:" + fileContainer.getContainerJson());
        return (cb) ? cb(fileContainer) : fileContainer.getContainerJson();
    }

    updateInfoFile(fileContainer) {
        const siteeditor = new FileData()
        siteeditor.setFilename('.siteeditor.md');
        siteeditor.setContent(`{"description": "
# ${fileContainer.getProjectName()}
        
This is a project created by [SiteEditor](https://nojaja.github.io/SiteEditor/editor.html)
        
To run it, please go [here](https://nojaja.github.io/SiteEditor/editor.html?q=${fileContainer.getGistId()}&t=gist)
        
---
",
"setting": {
        "main": "index.html",
        "dependencies": []
    }
}`);
        siteeditor.getFileData()
        fileContainer.putFile(siteeditor)
    }
}
export default LocalStorage