import * as monaco from 'monaco-editor'
import EditorFileData from './model/EditorFileData.js'
const STATIC_CACHE_KEY = '1';

export class CachesLogic {
    constructor () {
        // キャッシュの初期化
        if(caches)caches.delete(STATIC_CACHE_KEY);
    }
    /**
    キャッシュファイルの登録
    */
    async saveCache (url,source,type) {
        return new Promise((resolve, reject) => {
            const _type = type || 'application/javascript; charset=UTF-8';
            const _url = location.href.substr(0,location.href.substr(0,location.href.length-location.search.length).lastIndexOf("/"));//URLの最初のパスまで
            if(!caches) resolve();
            caches.open(STATIC_CACHE_KEY).then(cache => {
                const blob = new Blob([source], {type : _type});
                const response = new Response(blob,{ "status" : 200 , "statusText" : "OK" });
                cache.put(_url + "/test/"+url, response);
                resolve();
            })
        })
    }

    //ファイルキャッシュの更新
    refreshCache (fileContainer) {
        fileContainer.getFiles().forEach((filename, i) => {
            const _file = fileContainer.getFile(filename,EditorFileData,monaco) 
            this.saveCache('src/'+filename,_file.getContent(),_file.getType());
        });
    }

}
export default CachesLogic