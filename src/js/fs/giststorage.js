
const gisturl = 'https://api.github.com/gists';

export class GistStorage {
    constructor() {
        this.tokens = localStorage.getItem('gittoken') || null
    }
    
    async getToken () {
        let _getToken = async () => {
            return new Promise(resolve => {
                if (this.tokens == null) {
                    $.UIkit.modal.prompt('<p>Gist</p><br><p><a href="https://github.com/settings/tokens">Personal access tokens</a>:</p>', '', (newtoken) => {
                        console.log('Confirmed.'+newtoken);
                        this.token = newtoken;
                        resolve(true)
                    }, () => {
                        console.log('newtoken Rejected.')
                        resolve(false)
                    })
                } else {
                    resolve(false)
                }
            })
        }
        return await _getToken()
    }

    //プロジェクト一覧取得
    loadList (callback) {
        $.ajax({
            url: gisturl,
            type: 'GET',
            beforeSend: (xhr) => {
                // <p>Gist</p><br><p><a href="https://github.com/settings/tokens">Personal access tokens</a>:</p>
                // if (this.tokens == null) this.token = prompt("<p>Gist</p><br><p><a href='https://github.com/settings/tokens'>Personal access tokens</a>:</p>", "")
                this.getToken()
                xhr.setRequestHeader("Authorization", "token " + this.tokens)
            }
        }).done((response) => {
            let list = { rows: response }
            localStorage.setItem('gittoken', this.tokens)
            return (callback) ? callback(list, "gist") : list
        }).fail((jqXHR, textStatus, errorThrown) => {
            // エラーの場合処理
            this.tokens = null
        });
    }

    saveDraft(fileContainer) {
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
                this.getToken()
                xhr.setRequestHeader("Authorization", "token " + this.tokens);
            },
            data: fileContainer.getGistJsonData()
        }).done((response) => {
            $.UIkit.notify("complete!", { status: 'success', timeout: 1000 })
            localStorage.setItem('gittoken', this.tokens)

            fileContainer.setGistId(response.id)

            //TODO ここにGASへの登録処理を追加する
            //URL https://script.google.com/macros/s/AKfycbzjYobwi6G61HPTeiUue67PlOHvnsj2E_SFgzi-CVoV/dev?p=/uid/reactcomponent/ ファイル名.gist&contents=gistID


            /*
            $.getJSON(gasUrl+filename+ ".gist&contents="+e.id+"&callback=?",  { t: '1' }, function(json){
                console.log(json);
            });
            */
        }).fail((jqXHR, textStatus, errorThrown) => {
            console.warn("gist save error", errorThrown);
            $.UIkit.notify("error..", { status: 'error', timeout: 1000 });
        });
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
            fileContainer.setProjectName(data.projectName || data.description.split(/\r\n|\r|\n/)[0] || "new project");
            // console.log("fileContainer:" + fileContainer.getContainerJson());
            return (callback) ? callback(fileContainer) : fileContainer.getContainerJson();
        })
    }

}
export default GistStorage