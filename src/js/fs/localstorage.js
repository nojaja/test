
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

    saveDraft(fileContainer) {
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
            const prjId = Date.now() + Math.floor(1e4 + 9e4 * Math.random())

            const source = null;
            const file = new FileData();
            file.setFilename("index.html");
            file.setContent(source);

            fileContainer.setId(prjId)
            fileContainer.putFile(file);
        }
        fileContainer.setProjectName(fileContainer.getProjectName() || "new project")
        // console.log("fileContainer:" + fileContainer.getContainerJson());
        return (cb) ? cb(fileContainer) : fileContainer.getContainerJson();
    }

}
export default LocalStorage