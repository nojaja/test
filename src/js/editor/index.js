"use strict";
import * as monaco from 'monaco-editor'

import UIkit from 'uikit'
import notify from 'uikit/dist/js/components/notify'
import EditorFileData from '../model/EditorFileData.js'
import FileContainer from '../model/PublishFileContainer.js'
import LocalStorage from '../fs/localstorage.js'
import GistStorage from '../fs/giststorage.js'
import HtmlStorage from '../fs/htmlstorage.js'
import WebStorage from '../fs/webstorage.js'
import StubStorage from '../fs/stubstorage.js'

import BuilderLogic from './builderlogic.js'
import RefreshView from './refreshView.js'
import FileList from './filelistlogic.js'

import contextmenu from 'jquery-contextmenu'
import 'jquery-contextmenu/dist/jquery.contextMenu.css'
import 'uikit/dist/css/uikit.css'
import 'uikit/dist/css/components/notify.css'
import '../../css/style.css'

let editor = null;
let currentFile = null;
let fileContainer = new FileContainer('/public/');

let localstorage = new LocalStorage();
let gistStorage = new GistStorage();
let htmlStorage = new HtmlStorage();
let webStorage = new WebStorage();
let stubStorage = new StubStorage();
let builderLogic = new BuilderLogic(fileContainer);
let refreshViewLogic = new RefreshView(fileContainer);
let filelist = new FileList(fileContainer);

let selectStorage = webStorage

self.MonacoEnvironment = {
  getWorkerUrl: function(moduleId, label) {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }
    if (label === 'css') {
      return './css.worker.bundle.js';
    }
    if (label === 'html') {
      return './html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  },
};

/**
 * イベント操作系
 */
fileContainer.onOpenFile((filename) => {
  refreshTab(filename)
});

fileContainer.onCloseFile((filename) => {
  refreshTab(filename)
});

refreshViewLogic.onload((url) => {
  $("#url").val(url)
  $("#popout").attr('href', url)
})

filelist.onOpenFile((path) => {
  fileOpen(path);
})

fileContainer.onChangeMetas(() => {
  $("#title").empty();
  $("#title").text(fileContainer.getProjectName());
});

//ファイルセットが変更された場合
//File一覧の更新
fileContainer.onChangeFiles((filename) => {
  refreshTab(filename)
  filelist.refreshFileList()
  $.contextMenu({
    selector: '#filelist',
    // define the elements of the menu
    items: {
      "delete": { name: "Delete", callback: (key, options) => { fileDelete() } },
      "rename": { name: "Rename", callback: (key, options) => { fileRename() } }
    }
  })
})

/**
 * 左のpanelのstorage処理
 */

let mode = 1
/* 左側のタブ切り替え処理 */
function changeleftTab(desiredModelId) {
  let list = document.getElementsByClassName('tabs')
  for (let element of list) {
    element.classList.remove('active')
  }
  mode = desiredModelId
  list[desiredModelId].classList.add('active')
}

/* storage選択処理 */
$(".storageType").on("click", (event) => {
  let type = $(event.target).attr("data-type")
  if (type == 'localstorage') selectStorage = localstorage
  if (type == 'gistStorage') selectStorage = gistStorage
  if (type == 'htmlStorage') selectStorage = htmlStorage
  if (type == 'webStorage') selectStorage = webStorage
  if (type == 'stubStorage') selectStorage = stubStorage

  $("#prjlist").empty();
  $("#prjlist").html('<li><i class="uk-icon-spinner uk-icon-spin"></i></li>');
  mode++
  changeleftTab(mode)

  //プロジェクト一覧取得
  selectStorage.loadList((json, type) => {
    projectjsonCallback(json, type)
  });
})

//プロジェクト一覧表示
function projectjsonCallback(json, type) {
  $("#prjlist").empty();

  const prj = $('<li ><a  class="project" data-url=""><i class="uk-icon-folder"></i></a></li>');
  prj.on("click", (event) => {
    loadProject($(event.target).attr("data-url"), type, () => {
      fileContainer.refreshCache(EditorFileData, monaco);
    })
  });

  json.rows.forEach((val, i) => {
    // [{description, id, public},,]
    let _prj = prj.clone(true);
    _prj.children('.project').attr('data-url', val.id);
    _prj.children('.project').append(' ' + val.description);
    $("#prjlist").append(_prj);
  });
}

//プロジェクトファイルの読み込み
function loadProject(url, type, cb) {
  // file一覧に切り替え
  changeleftTab(2)
  $.UIkit.notify("load..", { status: 'success', timeout: 1000 });
  $("#filelist").html('<li><i class="uk-icon-spinner uk-icon-spin"></i></li>');
  // iframeの初期化
  refreshView("./blank.html");
  // URL指定がない場合はlocalから取得
  if (!url || type == "local") {
    localstorage.loadDraft(fileContainer, url, (fileContainer) => {
      openFirst()
      return (cb) ? cb() : true
    })
  } else if (type == "gist") {
    gistStorage.loadDraft(fileContainer, url, (fileContainer) => {
      openFirst();
      return (cb) ? cb() : true;
    })
  } else if (type == "html") {
    htmlStorage.loadDraft(fileContainer, url, (fileContainer) => {
      openFirst();
      return (cb) ? cb() : true;
    })
  } else if (type == "web") {
    webStorage.loadDraft(fileContainer, url, (fileContainer) => {
      openFirst();
      return (cb) ? cb() : true;
    })
  } else if (type == "stub") {
    stubStorage.loadDraft(fileContainer, url, (fileContainer) => {
      openFirst();
      return (cb) ? cb() : true;
    })
  }
}

//１つ目のファイルを開く
function openFirst() {
  let files = fileContainer.getFiles()
  if (files.length > 0) {
    fileOpen(files[0]);
    $("#filelist").children("li").removeClass("uk-active");
    $("#filelist li:first").addClass("uk-active");
  } else {
    filelist.refreshFileList()
  }
}

//Fileを開く
//Editorに開いたファイルをセット
function fileOpen(filename) {
  currentFile = fileContainer.openFile(filename, EditorFileData, monaco)
  const editorContainer = document.getElementById("container")
  if (!currentFile) {
    editorContainer.style.display = 'none'
    return
  } else {
    editorContainer.style.display = ''
    let data = currentFile.getEditorData();
    //refreshTab(data)
    editor.setModel(data.model);
    editor.restoreViewState(data.state);
    editor.focus();
  }
}

/* タブ切り替え処理 */
function changeTab(desiredModelId) {
  saveState()
  fileOpen(desiredModelId)
}

//タブの更新
function refreshTab(filename) {
  $("#edittab").empty();
  const tab = $('<li><a></a></li>');
  tab.on("click", (event) => {
    //タブの切替
    if (!$(event.target).hasClass('uk-icon-close')) {
      changeTab($(event.currentTarget).attr("id"))
    } else {
      fileContainer.closeFile($(event.currentTarget).attr("id"))
    }
  });
  let index = -1
  fileContainer.getOpenFiles().forEach((key, i) => {
    let _tab = tab.clone(true);
    _tab.attr('id', key);
    _tab.children("a").append(key).append($('<a class="uk-icon-hover uk-icon-close" style="padding-left: 10px; display: inline-block; #display: inline;"></a>'));
    $("#edittab").append(_tab);
    if (key == filename) {
      //_tab.addClass('uk-active');
      index = i
    }
  })
  if (index == -1) {
    const editorContainer = document.getElementById("container")
    editorContainer.style.display = 'none'
  } else {
    $.UIkit.switcher('#edittab').show(index)
  }
}

//Editorの内容をcurrentFileに保存
//currentFileをFileに保存
function saveState() {
  if (currentFile) {
    let data = currentFile.getEditorData();
    //let currentState = editor.saveViewState();
    //let currentModel = editor.getModel();
    //data.state = currentState;

    if (currentFile.setEditorData(data)) {
      data.state = editor.saveViewState();
      fileContainer.putFile(currentFile);
    }
  }
}

// コンパイル処理の実行
// /public/に出力する
function compileAll() {
  $.UIkit.notify("compile..", { status: 'success', timeout: 1000 });
  // cachesLogic.refreshCache(fileContainer);
  builderLogic.compileAll(fileContainer, '', '/public/', () => {
    $.UIkit.notify("success..", { status: 'success', timeout: 1000 });
    refreshView("./public/index.html");
  })
}

// iframe内のコンテンツを更新
function refreshView(url) {
  let frame = document.getElementById("child-frame");
  refreshViewLogic.refreshView(frame, url)
}

// Projectの保存
function saveAll() {
  localstorage.saveDraft(fileContainer);
  fileContainer.refreshCache(EditorFileData, monaco);
}

// ファイル名変更
function fileRename() {
  $('#filelist .uk-active').each((index, element) => {
    const filename = $(element).attr("data-uri");
    UIkit.modal.prompt('<p>Rename File Name</p>', filename, (newName) => {
      console.log('newName ' + newName);
      fileContainer.renameFile(filename, newName);
      // refreshFileList();
    }, () => {
      console.log('Rejected.');
      return;
    });
  });
}

// ファイル削除
function fileDelete() {
  $('#filelist .uk-active').each((index, element) => {
    const filename = $(element).attr("data-uri");
    UIkit.modal.confirm('<p>Delete ' + filename + ' File </p>', () => {
      console.log('filename ' + filename);
      fileContainer.removeFile(filename);
      // refreshFileList();
    }, () => {
      console.log('Rejected.');
      return;
    });
  });
};

var arg = new Object();
var pair = location.search.substring(1).split("&");
for (var i = 0; pair[i]; i++) {
  var kv = pair[i].split("=");
  arg[kv[0]] = kv[1];
}

//View///////////////////////////////////////////////////
$(document).ready(() => {
  const editorContainer = document.getElementById("container");
  editor = monaco.editor.create(editorContainer, {
    automaticLayout: true,
    model: null
  });
  let url = "";
  let type = "localStorage";
  url = arg["q"] || arg["g"] || arg["ga"]
  type = arg["t"] || "localStorage"

  //URLの引数からプロジェクト取得、コンパイルの実行
  loadProject(url, type, () => {
    compileAll();
    fileContainer.refreshCache(EditorFileData, monaco);
  });

  //プロジェクト一覧取得
  selectStorage.loadList((json, type) => {
    projectjsonCallback(json, type)
  });

  $("#save").on("click", (event) => {
    saveAll();
  });

  $("#run").on("click", (event) => {
    compileAll();
  });

  $("#load").on("click", (event) => {
    loadProject($(event.currentTarget).attr("data-url"), "html", () => {
      fileContainer.refreshCache(EditorFileData, monaco);
    })
  });

  $("#refresh").on("click", (event) => {
    refreshView($("#url").val())
  })

  $("#url").keypress((e) => {
    if (e.which == 13) {
      refreshView($("#url").val())
      return false //submit 停止
    }
  })
  $("#history_back").on("click", (event) => {
    $("#child-frame")[0].contentWindow.history.back()
  })
  $("#history_forward").on("click", (event) => {
    $("#child-frame")[0].contentWindow.history.forward()
  })

  $(".test1").on("click", (event) => {
    if (mode > 0) mode--
    changeleftTab(mode)
  });
  $(".test2").on("click", (event) => {
    if (mode <= 2) mode++
    changeleftTab(mode)
  });

  if (!navigator.serviceWorker) {
    $("#popout").css('display', 'none')
  }

  $("#gist").on("click", (event) => {
    gistStorage.saveDraft(fileContainer)
  });

  $("#titleEdit").on("click", (event) => {
    const title = $("#title").text();
    UIkit.modal.prompt('<p>title</p>', title, (newTitle) => {
      console.log('newTitle ' + newTitle);
      fileContainer.setProjectName(newTitle);
      // refreshFileList();
    }, () => {
      console.log('Rejected.');
      return;
    });
  });

  $("#newfile").on("click", (event) => {
    UIkit.modal.prompt(`
<h3>New File</h3>
<h4>File Types Cheatsheet</h4>
<ul class="uk-list uk-list-striped uk-width-medium-1-3">
    <li><b>HTML</b> <span>.html</span> <span title="Markdown">.md</span> <span title="ReactHtml">.ahtml</span></li>
    <li><b>CSS</b> <span>.css</span> <span>.scss</span></li>
    <li><b>JavaScript</b> <span>.js</span> <span title="ECMASCRIPT6">.es6</span></li>
</ul>
<p>File Name:</p>`, '', (newFile) => {
      let file = new EditorFileData(monaco)
      file.setFilename(newFile);
      file.setContent("");
      fileContainer.putFile(file);
      // refreshFileList();
    }, () => {
      console.log('Rejected.');
      return;
    });
  });

  $('#container').bind('blur keyup change', (e) => {
    saveState()
  });

  $(window).keydown((e) => {
    if (e.keyCode === 120) {
      compileAll();
      return false;
    }
    if (e.ctrlKey) {
      if (e.keyCode === 83) {
        saveAll()
        return false;
      }
    }
  });

  console._log = console.log
  console._debug = console.debug
  console._error = console.error
  console._info = console.info
  console._trace = console.trace
  console._warn = console.warn
  let logPanel = $('#log-panel')
  console.log = (...param) => {
    console._log(...param)
    let _param = param.map(val => { 
      if(typeof val == 'object'){
        return JSON.stringify(val)
      }else{
        return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }
    });

    logPanel.append($(`<pre class="log">${_param}</pre>`));
  }
  console.debug = (...param) => {
    console._debug(...param)
    let _param = param.map(val => { 
      if(typeof val == 'object'){
        return JSON.stringify(val)
      }else{
        return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }
    });
    logPanel.append($(`<pre class="log">${_param}</pre>`));
  }
  console.error = (...param) => {
    console._error(...param)
    let _param = param.map(val => { 
      if(typeof val == 'object'){
        return JSON.stringify(val)
      }else{
        return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }
    });
    logPanel.append($(`<pre class="log error">${_param}</pre>`));
  }
  console.info = (...param) => {
    console._info(...param)
    let _param = param.map(val => { 
      if(typeof val == 'object'){
        return JSON.stringify(val)
      }else{
        return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }
    });
    logPanel.append($(`<pre class="log">${_param}</pre>`));
  }
  console.trace = (...param) => {
    console._trace(...param)
    let _param = param.map(val => { 
      if(typeof val == 'object'){
        return JSON.stringify(val)
      }else{
        return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      }
    });
    logPanel.append($(`<pre class="log">${_param}</pre>`));
  }
  console.warn = (...param) => {
    console._warn(...param)
    let _param = param.map(val => { 
      if (typeof val == 'object'){
        return JSON.stringify(val)
      } else if (typeof val === 'string'){
        return val.replace(/</g, '&lt;').replace(/>/g, '&gt;')
      } else {
        return val
      }
    });
    logPanel.append($(`<pre class="log warn">${_param}</pre>`));
  }
});

