import treeview from 'jquery-treeview'
import { EventEmitter } from 'events'

//import 'jquery-treeview/jquery.treeview.css'

export class FileList {
    constructor(fileContainer) {
        this.fileContainer = fileContainer
        this.collapsableList = {}
        this.ev = new EventEmitter()
    }

    onOpenFile(callback) {
        this.ev.on('open', callback)
    }

    _refreshFileList(path = null) {
        let listid = (path) ? 'li[data-uri="' + path + '"]>ul' : '#filelist'
        $(listid).empty();

        const dir = $(`
                        <li>
                        <span class="folder"><i class="uk-icon-folder uk-icon-mediu"></i></span>
                        <ul>
                            <li><i class="uk-icon-spinner uk-icon-spin"></i></li>
                        </ul>
                        </li>`);
        dir.on("click", (event) => {
            if (event.target.parentElement == event.currentTarget) {
                let t = $(event.target).attr("data-uri")
                this.collapsableList[t] = $(event.currentTarget).hasClass('collapsable')
                //_refreshFileList(t);
                if (!event.ctrlKey) {
                    $('#filelist').find("li").removeClass("uk-active");
                }
                $(event.target.parentElement).addClass("uk-active");
            }
        });

        const file = $(`
                        <li>
                            <span><a class="file">
                            <i class="uk-icon-file uk-icon-mediu"></i>
                            </a></span>
                        </li>`);
        file.on("click", (event) => {
            let path = $(event.target).attr("data-uri")
            this.ev.emit('open', path)
            if (!event.ctrlKey) {
                $('#filelist').find("li").removeClass("uk-active");
            }
            $(event.target.parentElement.parentElement).addClass("uk-active");
        });

        this.fileContainer.getDirectories(path).forEach((val, i) => {
            let _dir = dir.clone(true);
            _dir.find('.fileSelect').attr('data-uri', val.path);
            _dir.find('span').attr('data-uri', val.path);
            _dir.find('.folder').append(val.name);
            _dir.attr('data-uri', val.path);

            if (this.collapsableList[val.path]) {
                _dir.addClass('open')
            } else {
                _dir.addClass('closed')
            }

            $(listid).append(_dir);
            this._refreshFileList(val.path)
        });

        this.fileContainer.getFiles(path).forEach((val, i) => {
            let _file = file.clone(true);
            _file.find('.fileSelect').attr('data-uri', val.path);
            _file.find('.file').attr('data-uri', val.path);
            _file.find('.file').append(val.name);
            _file.attr('data-uri', val.path);
            $(listid).append(_file);
        });
    }

    //File一覧の更新
    refreshFileList() {
        this._refreshFileList();
        $('#filelist').treeview({
            animated: "fast",
            collapsed: false
        })
    }
}
export default FileList