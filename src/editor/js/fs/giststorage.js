
import FileContainer from '../model/FileContainer.js'
import FileData from '../model/FileData.js'

var gistUrl  = "https://api.github.com/gists/"

export class GistStorage {
    constructor () {
    }
    saveDraft (fileContainer, token){
        $.UIkit.notify("Share Gist..", { status: 'success', timeout: 1000 });
        
        var sendType = "POST";
        var gisturl = 'https://api.github.com/gists';
        if(fileContainer.getId()){
        sendType = "PATCH";
        gisturl = gisturl + "/"+fileContainer.getId();
        }

        $.ajax({
            url: gisturl,
            type: sendType,
            dataType: 'json',
            beforeSend: function beforeSend(xhr) {
                xhr.setRequestHeader("Authorization", "token " + token);
            },
            data: fileContainer.getGistJsonData()
        }).success(function (e) {
            console.log(e);
            $.UIkit.notify("complete!", { status: 'success', timeout: 1000 });
            
            //TODO ここにGASへの登録処理を追加する
            //URL https://script.google.com/macros/s/AKfycbzjYobwi6G61HPTeiUue67PlOHvnsj2E_SFgzi-CVoV/dev?p=/uid/reactcomponent/ ファイル名.gist&contents=gistID


            /*
            $.getJSON(gasUrl+filename+ ".gist&contents="+e.id+"&callback=?",  { t: '1' }, function(json){
                console.log(json);
            });
            */
        }).error(function (e) {
            console.warn("gist save error", e);
            $.UIkit.notify("error..", { status: 'error', timeout: 1000 });
        });
    }

    loadDraft (fileContainer,url,cb) {
        $.getJSON(gistUrl+url).done(function(data) {
            fileContainer.setContainer(data);
            fileContainer.setProjectName(data.description.split(/\r\n|\r|\n/)[0]||"new project");
            console.log("fileContainer:" + fileContainer.getContainerJson());
            return (cb)?cb(fileContainer):fileContainer.getContainerJson();
        })
    }

}
export default GistStorage