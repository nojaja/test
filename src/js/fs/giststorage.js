
const gisturl = 'https://api.github.com/gists';

export class GistStorage {
    constructor() {
        this.tokens = localStorage.getItem('gittoken') || null
    }
    
    async getToken () {
        let _getToken = async () => {
            return new Promise(resolve => {
                if (this.tokens == null) {
                    $.UIkit.modal.prompt('<p>Gist Authentication</p><br><p><a href="https://github.com/settings/tokens" target="_blank">Personal access tokens</a>:</p>', '', (newtoken) => {
                        this.tokens = newtoken;
                        resolve(this.tokens)
                    }, () => {
                        resolve(null)
                    })
                } else {
                    resolve(this.tokens)
                }
            })
        }
        return await _getToken()
    }

    //プロジェクト一覧取得
    async loadList (callback) {
        if(await this.getToken()){
            $.ajax({
                url: gisturl,
                type: 'GET',
                beforeSend: (xhr) => {
                    // <p>Gist</p><br><p><a href="https://github.com/settings/tokens">Personal access tokens</a>:</p>
                    // if (this.tokens == null) this.token = prompt("<p>Gist</p><br><p><a href='https://github.com/settings/tokens'>Personal access tokens</a>:</p>", "")
                    xhr.setRequestHeader("Authorization", "token " + this.tokens)
                }
            }).done((response) => {
                // '.siteeditor'があるgistだけに絞る
                let fileslist = response.filter( (x, i, self) => (x.files && (x.files['.siteeditor'] || x.files['.siteeditor.md'])))
                let list = { rows: fileslist }
                localStorage.setItem('gittoken', this.tokens)
                return (callback) ? callback(list, "gist") : list
            }).fail((jqXHR, textStatus, errorThrown) => {
                // エラーの場合処理
                this.tokens = null
            })
        }
    }

    async saveDraft(fileContainer) {
        if(await this.getToken()){
            this.updateInfoFile(fileContainer)

            $.UIkit.notify("Share Gist..", { status: 'success', timeout: 1000 });
    
            let sendType = "POST";
            let _gisturl = gisturl;
            if (fileContainer.getGistId()) {
                sendType = "PATCH";
                _gisturl = gisturl + "/" + fileContainer.getGistId();
            }
            $.ajax({
                url: _gisturl,
                type: sendType,
                dataType: 'json',
                beforeSend: (xhr) => {
                    xhr.setRequestHeader("Authorization", "token " + this.tokens);
                },
                data: fileContainer.getGistJsonData()
            }).done((response) => {
                $.UIkit.notify("complete!", { status: 'success', timeout: 1000 })
                localStorage.setItem('gittoken', this.tokens)
                fileContainer.setGistId(response.id)
            }).fail((jqXHR, textStatus, errorThrown) => {
                console.warn("gist save error", errorThrown);
                $.UIkit.notify("error..", { status: 'error', timeout: 1000 });
            })
        }
    }

    loadDraft(fileContainer, url, callback) {
        $.getJSON(gisturl + "/" + url).done((response) => {
            let conv = (response) => ({
                "v": 0.1,
                "id": response.id,
                "gistid": response.id,
                "files": Object.fromEntries(Object.entries(response.files).map(([key, value]) => {
                    return [key.replace(/%2F/g, '\/'), { "filename": value.filename.replace(/%2F/g, '\/'), "content": value.content, "type": value.type, "language": value.language, "size": value.size, "truncated": value.truncated }]
                })),
                "public": response.public,
                "createdTime": new Date(response.created_at).getTime(),
                "lastUpdatedTime": new Date(response.updated_at).getTime(),
                "description": response.description,
                "projectName": response.projectName
            })
            let data = conv(response)
            fileContainer.setContainer(data);
            fileContainer.setId(fileContainer.getId())
            fileContainer.setProjectName(data.projectName || data.description.split(/\r\n|\r|\n/)[0] || "new project");
            // console.log("fileContainer:" + fileContainer.getContainerJson());
            return (callback) ? callback(fileContainer) : fileContainer.getContainerJson();
        })
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
export default GistStorage