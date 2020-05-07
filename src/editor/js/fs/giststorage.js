
const gisturl = 'https://api.github.com/gists';

export class GistStorage {
    constructor () {
    }
    saveDraft (fileContainer, token){
        $.UIkit.notify("Share Gist..", { status: 'success', timeout: 1000 });
        
        const sendType = "POST";
        let _gisturl = gisturl;
        if (fileContainer.getId()){
            sendType = "PATCH";
            _gisturl = gisturl + "/"+fileContainer.getId();
        }

        $.ajax({
            url: _gisturl,
            type: sendType,
            dataType: 'json',
            beforeSend: function beforeSend(xhr) {
                xhr.setRequestHeader("Authorization", "token " + token);
            },
            data: fileContainer.getGistJsonData()
        }).success((e) => {
            console.log(e);
            $.UIkit.notify("complete!", { status: 'success', timeout: 1000 });
            
            //TODO ここにGASへの登録処理を追加する
            //URL https://script.google.com/macros/s/AKfycbzjYobwi6G61HPTeiUue67PlOHvnsj2E_SFgzi-CVoV/dev?p=/uid/reactcomponent/ ファイル名.gist&contents=gistID


            /*
            $.getJSON(gasUrl+filename+ ".gist&contents="+e.id+"&callback=?",  { t: '1' }, function(json){
                console.log(json);
            });
            */
        }).error((e) => {
            console.warn("gist save error", e);
            $.UIkit.notify("error..", { status: 'error', timeout: 1000 });
        });
    }

    loadDraft (fileContainer,url,cb) {
        $.getJSON(gisturl+"/"+url).done((data) => {
            fileContainer.setContainer(data);
            fileContainer.setProjectName(data.description.split(/\r\n|\r|\n/)[0]||"new project");
            console.log("fileContainer:" + fileContainer.getContainerJson());
            return (cb)?cb(fileContainer):fileContainer.getContainerJson();
        })
    }

}
export default GistStorage