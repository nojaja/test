(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.FileData = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var FileData = function () {
    function FileData(file, monaco) {
      _classCallCheck(this, FileData);

      if (file instanceof FileData) {
        this.file = file.getFileData;
      } else {
        this.file = {
          "filename": file && file["filename"] ? file["filename"] : "",
          "fileType": file && file["fileType"] ? file["fileType"] : "txt",
          "type": file && file["type"] ? file["type"] : "text/plain",
          "language": file && file["language"] ? file["language"] : "Markdown",
          "size": file && file["size"] ? file["size"] : 0,
          "truncated": file && file["truncated"] ? file["truncated"] : false,
          "content": file && file["content"] ? file["content"] : ""
        };
        this.editorData = {};
        if (file && file["filename"]) this.setFilename(file["filename"]);
        if (monaco) this.editorData.source.model.setValue(this.file["content"]);
        this.monaco = monaco;
      }
    }

    _createClass(FileData, [{
      key: "addEditorData",
      value: function addEditorData(key, caption, type) {
        this.editorData[key] = {
          caption: caption,
          model: monaco ? monaco.editor.createModel("", type) : null,
          state: null
        };
      }
    }, {
      key: "setLanguage",
      value: function setLanguage(language) {
        this.file["language"] = language;
      }
    }, {
      key: "getLanguage",
      value: function getLanguage() {
        return this.file["language"];
      }
    }, {
      key: "setFileType",
      value: function setFileType(fileType) {
        this.file["fileType"] = fileType;
      }
    }, {
      key: "getFileType",
      value: function getFileType() {
        return this.file["fileType"];
      }
    }, {
      key: "setType",
      value: function setType(type) {
        this.file["type"] = type;
      }
    }, {
      key: "getType",
      value: function getType() {
        return this.file["type"];
      }
    }, {
      key: "getSize",
      value: function getSize() {
        return this.file["size"];
      }
    }, {
      key: "setContent",
      value: function setContent(content) {
        if (this.monaco) {
          this.editorData.source.model.setValue(content);
        } else {
          this.file["content"] = content;
        }
      }
    }, {
      key: "getContent",
      value: function getContent() {
        return this.monaco ? this.editorData.source.model.getValue() : this.file["content"];
      }
    }, {
      key: "setFilename",
      value: function setFilename(filename) {
        this.file["filename"] = filename;
        if (filename.match(/md$/)) {
          this.setType("text/plain");
          this.setLanguage("Markdown");
          this.addEditorData("source", filename, "txt");
          return;
        }
        if (filename.match(/markdown$/)) {
          this.setType("text/plain");
          this.setLanguage("Markdown");
          this.addEditorData("source", filename, "txt");
          return;
        }
        if (filename.match(/txt$/)) {
          this.setType("text/plain");
          this.setLanguage("text");
          this.addEditorData("source", filename, "txt");
          return;
        }
        if (filename.match(/json$/)) {
          this.setType("application/json");
          this.setLanguage("json");
          this.addEditorData("source", filename, "json");
          return;
        }
        if (filename.match(/ahtml$/)) {
          this.setType("text/html");
          this.setLanguage("ahtml");
          this.addEditorData("source", filename, "html");
          this.addEditorData("dom", "dom tree", "json");
          this.addEditorData("component", "js component.js", "javascript");
          this.addEditorData("app", "js app.js", "javascript");
          this.addEditorData("html", "result(html)", "html");
          return;
        }
        if (filename.match(/htm.?$/)) {
          this.setType("text/html");
          this.setLanguage("html");
          this.addEditorData("source", filename, "html");
          return;
        }
        if (filename.match(/js$/)) {
          this.setType("text/javascript");
          this.setLanguage("JavaScript");
          this.addEditorData("source", filename, "javascript");
          return;
        }
        if (filename.match(/css$/)) {
          this.setType("text/css");
          this.setLanguage("css");
          this.addEditorData("source", filename, "css");
          return;
        }
        this.addEditorData("source", filename, "txt");
        return;
      }
    }, {
      key: "getFilename",
      value: function getFilename() {
        return this.file["filename"];
      }
    }, {
      key: "setEditorData",
      value: function setEditorData(data) {
        this.editorData = data;
        if (monaco) this.file["content"] = this.editorData.source.model.getValue();
      }
    }, {
      key: "getEditorData",
      value: function getEditorData() {
        return this.editorData;
      }
    }, {
      key: "getFileData",
      value: function getFileData() {
        return this.file;
      }
    }, {
      key: "getFileDataJson",
      value: function getFileDataJson() {
        return JSON.stringify(this.getFileData());
      }
    }, {
      key: "remove",
      value: function remove() {
        this.file["content"] = "";
        this.file["truncated"] = true;
      }
    }]);

    return FileData;
  }();

  exports.default = FileData;


  if (typeof window != "undefined") {
    !window.FileData && (window.FileData = FileData);
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./FileData.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./FileData.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FileData);
    global.FileContainer = mod.exports;
  }
})(this, function (exports, _FileData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _FileData2 = _interopRequireDefault(_FileData);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var FileContainer = function () {
    function FileContainer(monaco) {
      _classCallCheck(this, FileContainer);

      this.monaco = monaco;
      this.container = {
        id: null,
        files: {},
        "public": true,
        "created_at": "2017-10-29T05:45:01Z",
        "updated_at": "2017-11-14T12:41:14Z",
        "description": ""
      };
      this.fileObjects = {};
    }

    _createClass(FileContainer, [{
      key: "setId",
      value: function setId(id) {
        this.container['id'] = id;
      }
    }, {
      key: "getId",
      value: function getId() {
        return this.container['id'];
      }
    }, {
      key: "setMonaco",
      value: function setMonaco(monaco) {
        this.monaco = monaco;
      }
    }, {
      key: "getMonaco",
      value: function getMonaco() {
        return this.monaco;
      }
    }, {
      key: "getFiles",
      value: function getFiles() {
        // 配列のキーを取り出す
        var ret = [];
        for (var key in this.container["files"]) {
          if (!this.container["files"][key]["truncated"]) {
            ret.push(key);
          }
        }
        return ret;
      }
    }, {
      key: "getFile",
      value: function getFile(filename) {
        if (filename in this.container["files"]) {
          if (!(filename in this.fileObjects)) {
            this.fileObjects[filename] = new _FileData2.default(this.container["files"][filename], this.monaco);
          }
          return this.fileObjects[filename];
        }
      }
    }, {
      key: "getFileRaw",
      value: function getFileRaw(filename) {
        if (filename in this.container["files"]) {
          return this.container["files"][filename];
        }
      }
    }, {
      key: "putFile",
      value: function putFile(file) {
        var filename = file.getFilename();
        this.container["files"][filename] = file.getFileData();
        return true;
      }
    }, {
      key: "renameFile",
      value: function renameFile(filename, newName) {
        var file = this.getFile(filename);
        file.setFilename(newName);
        this.putFile(file);
        delete this.container["files"][filename];
      }
    }, {
      key: "removeFile",
      value: function removeFile(filename) {
        var file = this.getFile(filename);
        file.remove();
        this.putFile(file);
      }
    }, {
      key: "init",
      value: function init() {
        this.container = {
          id: "",
          files: {},
          "public": true,
          "created_at": "2017-10-29T05:45:01Z",
          "updated_at": "2017-11-14T12:41:14Z",
          "description": ""
        };
        this.fileObjects = {};
      }
    }, {
      key: "setPublic",
      value: function setPublic(bool) {
        this.container["public"] = bool;
      }
    }, {
      key: "getPublic",
      value: function getPublic() {
        return this.container["public"];
      }
    }, {
      key: "setDescription",
      value: function setDescription(description) {
        this.container["description"] = description;
      }
    }, {
      key: "getDescription",
      value: function getDescription() {
        return this.container["description"];
      }
    }, {
      key: "setContainer",
      value: function setContainer(container) {
        this.container = container;
        this.fileObjects = {};
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        return this.container;
      }
    }, {
      key: "setContainerJson",
      value: function setContainerJson(container) {
        this.setContainer(JSON.parse(container));
        this.fileObjects = {};
      }
    }, {
      key: "getContainerJson",
      value: function getContainerJson() {
        return JSON.stringify(this.getContainer());
      }
    }, {
      key: "getGistData",
      value: function getGistData() {
        var gistdata = {
          "description": this.container["description"],
          "public": this.container["public"],
          "files": this.container["files"]
        };
        return gistdata;
      }
    }, {
      key: "getGistJsonData",
      value: function getGistJsonData() {
        return JSON.stringify(this.getGistData());
      }
    }]);

    return FileContainer;
  }();

  exports.default = FileContainer;

  if (typeof window != "undefined") {
    !window.FileContainer && (window.FileContainer = FileContainer);
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./model/FileData.js', './model/FileContainer.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./model/FileData.js'), require('./model/FileContainer.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.FileData, global.FileContainer);
    global.indexBabel = mod.exports;
  }
})(this, function (_FileData, _FileContainer) {
  'use strict';

  var _FileData2 = _interopRequireDefault(_FileData);

  var _FileContainer2 = _interopRequireDefault(_FileContainer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  //var monaco = null;
  var editor = null;
  var currentFile = null;
  var currentModelId = "source";

  /**
  サービスワーカーの登録
  キャッシュファイルの制御を可能にする
  */
  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./ws.js', { scope: './' }).then(function (registraion) {
      registraion.update();
    });
  }

  /* タブ切り替え処理 */
  function changeTab(editor, desiredModelId) {
    var currentState = editor.saveViewState();
    var currentModel = editor.getModel();
    var data = currentFile.getEditorData();
    data[currentModelId].state = currentState;
    currentFile.setEditorData(data);

    editor.setModel(data[desiredModelId].model);
    editor.restoreViewState(data[desiredModelId].state);
    currentModelId = desiredModelId;
    editor.focus();
  }
  //１つ目のファイルを開く
  function openFirst() {
    fileOpen(fileContainer.getFiles()[0]);
    $("#filelist").children("li").removeClass("uk-active");
    $("#filelist li:first").addClass("uk-active");
  }

  //Fileを開く
  function fileOpen(filename) {
    currentFile = fileContainer.getFile(filename);
    currentModelId = "source";
    var source = currentFile.getContent();
    var data = currentFile.getEditorData();
    $("#edittab").empty();
    var tab = $('<li><a></a></li>');
    tab.on("click", function (event) {
      //タブの切替
      changeTab(editor, $(this).attr("id"));
    });

    for (var key in data) {
      var i = 0;
      var _tab = tab.clone(true);
      _tab.attr('id', key);
      _tab.children("a").append(data[key].caption);
      $("#edittab").append(_tab);
      if (key == currentModelId) {
        _tab.addClass('uk-active');
        editor.setModel(data[currentModelId].model);
        editor.restoreViewState(data[currentModelId].state);
        editor.focus();
      }
      i++;
    };
    $.UIkit.switcher('#edittab').show(0);
  }

  // iframe内のコンテンツを更新
  function refreshView(content) {
    // iframe内のコンテンツを更新
    $("#child-frame").attr("src", content);
    /*
      //$("#child-frame").attr("srcdoc", "");
      //$("#child-frame").attr("src", "./blank.html");
      var frame = document.getElementById("child-frame");
      frame.src = "./blank.html";
      frame.onload = function(){
         frame.onload=function(){};
         frame.contentDocument.open();
         frame.contentDocument.write(content);
         frame.contentDocument.close();
      }
    */
  }

  //プロジェクトファイルの読み込み
  function loadProject(url, type, cb) {
    $.UIkit.notify("load..", { status: 'success', timeout: 1000 });
    $("#filelist").html('<li><i class="uk-icon-spinner uk-icon-spin"></i></li>');
    //iframeの初期化
    refreshView("./blank.html");
    //localから取得
    if (!url) {
      var doc = localDraft();
      if (doc) {
        fileContainer.setContainerJson(doc);
        refreshFileList();
        openFirst();
        return cb ? cb(doc) : true;
      }
    }

    if (type == "gas") {
      $.getJSON(url + "&callback=?", { t: '1' }, function (json) {
        fileContainer.init();
        var file = new _FileData2.default();
        file.setFilename("index.ahtml");
        file.setContent(json.content);
        fileContainer.putFile(file);

        refreshFileList();
        openFirst();
        return cb ? cb(json) : true;
      });
    } else if (type == "gist") {
      $.getJSON(url).done(function (data) {
        fileContainer.setContainer(data);
        refreshFileList();
        openFirst();
        return cb ? cb() : true;
      });
    } else if (type == "html") {
      $.ajax({
        url: url
      }).done(function (data) {
        fileContainer.init();
        var file = new _FileData2.default();
        file.setFilename("index.html");
        file.setContent(data);
        fileContainer.putFile(file);
        refreshFileList();
        openFirst();
        return cb ? cb() : true;
      });
    }
  }

  $(".samples").on("click", function (event) {
    loadProject($(this).attr("data-url"), "html", function () {});
  });

  //File一覧の更新
  function refreshFileList() {
    $("#filelist").empty();

    var file = $('<li ><a  class="file" data-url=""><input type="checkbox" class="fileSelect" > <i class="uk-icon-file uk-icon-mediu"></i> </a></li>');
    file.on("click", function (event) {
      fileOpen($(event.target).attr("data-uri"));
      $("#filelist").children("li").removeClass("uk-active");
      $(event.target.parentElement).addClass("uk-active");
    });

    fileContainer.getFiles().forEach(function (val, i) {
      console.log(i, val);
      var _file = file.clone(true);
      _file.find('.fileSelect').attr('data-uri', val);
      _file.children('.file').attr('data-uri', val);
      _file.children('.file').append(val);
      $("#filelist").append(_file);
    });
  }

  //ファイルキャッシュの更新
  function refreshCache() {
    fileContainer.getFiles().forEach(function (filename, i) {
      var _file = fileContainer.getFile(filename);
      saveCache('src/' + filename, _file.getContent(), _file.getType()).then();
    });
  }

  //プロジェクト一覧表示
  var gasUrl = "https://script.google.com/macros/s/AKfycbzjYobwi6G61HPTeiUue67PlOHvnsj2E_SFgzi-CVoV/dev?p=/uid/reactcomponent/";
  function projectjsonCallback(json) {
    $("#prjlist").empty();

    var prj = $('<li ><a  class="project" data-url=""><i class="uk-icon-file"></i></a></li>');
    prj.on("click", function (event) {
      loadProject(gasUrl + $(event.target).attr("data-url"), "gas", function () {});
    });

    json.rows.forEach(function (val, i) {
      var _prj = prj.clone(true);
      _prj.children('.project').attr('data-url', val[6] + '/' + val[1] + val[2]);
      _prj.children('.project').append(val[1]);
      $("#prjlist").append(_prj);
    });
  }

  //プロジェクト一覧取得
  $.getJSON(gasUrl + "&callback=?", { t: '1' }, function (json) {
    projectjsonCallback(json);
  });

  var fileContainer = new _FileContainer2.default();

  function saveDraft(source) {
    // ローカルストレージに最新の状態を保存
    var name = 'draftContainer' + location.pathname.replace(/\//g, '.');
    localStorage.setItem(name, fileContainer.getContainerJson());
    console.log("draftContainer:" + fileContainer.getContainerJson());
    $.UIkit.notify("save..", { status: 'success', timeout: 1000 });
  }

  function localDraft() {
    // ページが読み込まれたら、ローカルストレージから状態を読み込む
    var name1 = 'draftContainer' + location.pathname.replace(/\//g, '.');

    var name2 = 'draft' + location.pathname.replace(/\//g, '.');

    if (localStorage.getItem(name1)) {
      fileContainer.setContainerJson(localStorage.getItem(name1));
    } else {
      var source = JSON.parse(localStorage.getItem(name2)) || null;
      var file = new _FileData2.default();
      file.setFilename("index.html");
      file.setContent(source);
      fileContainer.putFile(file);
    }
    console.log("fileContainer:" + fileContainer.getContainerJson());
    return fileContainer.getContainerJson();
  }

  /**
  キャッシュファイルの登録
  */
  var STATIC_CACHE_KEY = '1';
  caches.delete(STATIC_CACHE_KEY);
  var saveCache = async function saveCache(url, source, type) {
    return new Promise(function (resolve, reject) {
      var _type = type || 'application/javascript; charset=UTF-8';
      var _url = location.href.substr(0, location.href.substr(0, location.href.length - location.search.length).lastIndexOf("/")); //URLの最初のパスまで
      caches.open(STATIC_CACHE_KEY).then(function (cache) {
        var blob = new Blob([source], { type: _type });
        var response = new Response(blob, { "status": 200, "statusText": "OK" });
        cache.put(_url + "/test/" + url, response);
        resolve();
      });
    });
  };

  var htmlparser = Tautologistics.NodeHtmlParser;

  var parseHtml = function parseHtml(rawHtml) {
    return htmlparser.parseDOM(rawHtml, {
      enforceEmptyTags: true,
      ignoreWhitespace: true,
      caseSensitiveTags: true,
      caseSensitiveAttr: true,
      verbose: false
    });
  };

  var DebugBuilder = function (_Builder) {
    _inherits(DebugBuilder, _Builder);

    function DebugBuilder() {
      _classCallCheck(this, DebugBuilder);

      return _possibleConstructorReturn(this, (DebugBuilder.__proto__ || Object.getPrototypeOf(DebugBuilder)).apply(this, arguments));
    }

    _createClass(DebugBuilder, [{
      key: 'beforeCompile',
      value: function beforeCompile(src) {
        console.log("DebugBuilder", stringify(src));
      }
    }, {
      key: 'beforeCreateNodes',
      value: function beforeCreateNodes(src) {
        console.log("DebugBuilder-createNodes", stringify(src));
      }
    }, {
      key: 'beforeCreateTagElement',
      value: function beforeCreateTagElement(src) {
        console.log("DebugBuilder-beforeCreateTagElement", stringify(src));
      }
    }]);

    return DebugBuilder;
  }(Builder);

  var arg = new Object();
  var pair = location.search.substring(1).split('&');
  for (var i = 0; pair[i]; i++) {
    var kv = pair[i].split('=');
    arg[kv[0]] = kv[1];
  }

  var editorContainer = document.getElementById("container");

  //View///////////////////////////////////////////////////
  $(function () {
    require.config({
      paths: {
        vs: "js/monaco-editor/min/vs"
      }
    });
    require(["vs/editor/editor.main"], function () {
      editor = monaco.editor.create(editorContainer, {
        automaticLayout: true,
        model: null
      });
      fileContainer.setMonaco(monaco);
      var url = "";
      var type = "localStorage";
      if (arg["q"]) {
        type = "html";
        url = arg["q"];
      } else if (arg["g"]) {
        type = "gist";
        url = "https://api.github.com/gists/" + arg["g"];
      }
      loadProject(url, type, function () {
        refreshCache();
        compileAll();
      });
    });

    //全てのsourceのcompile
    function compileAll() {
      $.UIkit.notify("compile..", { status: 'success', timeout: 1000 });
      async function _compileAll() {
        function compileResolve(filename) {
          return new Promise(function (resolve) {
            var language = fileContainer.getFile(filename).getLanguage();
            if (language == "ahtml") {
              resolve(compile(filename));
            } else {
              resolve(true);
            }
          });
        }
        var array = fileContainer.getFiles();
        var promiseAll = await Promise.all(array.map(async function (filename) {
          return await compileResolve(filename);
        }));
        return promiseAll;
      }
      _compileAll().then(function () {
        $.UIkit.notify("success..", { status: 'success', timeout: 1000 });
        refreshView("./test/index.html");
      });
    }

    async function compile(targetFile) {
      var webComponentParser = new WebComponentParser({
        builder: ReactComponentBuilder
      });

      var reactRootParser = new ReactRootComponentBuilder({
        builder: ReactComponentBuilder
      });

      var builder = new HtmlBuilder({});
      //var builder2 = new HtmlBuilder({});
      //var debugBuilder = new DebugBuilder({});
      var cssbuilder = new CSSBuilder({});
      var reactComponentBuilder = new ReactComponentBuilder({});
      var compiler1 = new Compiler([cssbuilder, webComponentParser, reactRootParser], {});
      var compiler2 = new Compiler([builder], {});

      //-ここからDemo用処理----------------------------------
      var data = targetFile ? fileContainer.getFile(targetFile).getEditorData() : currentFile.getEditorData();
      var filename = targetFile ? fileContainer.getFile(targetFile).getFilename() : currentFile.getFilename();
      filename = filename.substr(0, filename.lastIndexOf("."));

      var parseData = parseHtml(data.source.model.getValue().trim());
      data.dom.model.setValue(stringify(parseData));
      await saveCache(filename + '_dom.json', stringify(parseData), 'application/json');
      compiler1.compile(parseData); //jsonオブジェクトを各種コードに変換します

      //editor4.setValue(cssbuilder.getNodes());

      webComponentParser.build(); //react化処理の実行
      //変換されたコードはwindowに読み込まれ実行可能になります。
      reactRootParser.build(); //react化処理の実行
      //変換されたコードはwindowに読み込まれ実行可能になります。
      data.component.model.setValue(webComponentParser.getResult());
      await saveCache(filename + '_component.js', webComponentParser.getResult());

      data.app.model.setValue(reactRootParser.getResult());
      await saveCache(filename + '_app.js', reactRootParser.getResult());

      targetFile ? fileContainer.getFile(targetFile).setEditorData(data) : currentFile.setEditorData(data);
      var bodyElements = parseData.getElementsByTagName("body");
      if (parseData.getElementsByTagName("head").length == 0) {
        var $html = parseData.getElementsByTagName("html");
        var newElement = $html[0].createElement("head");
        $html[0].insertBefore(newElement, bodyElements[0]);
      }
      var headElements = parseData.getElementsByTagName("head");
      headElements.forEach(function (headElement) {
        //head配下に追加
        var addpoint = headElement.getElementsByTagName("script")[0];
        {
          var newElement = headElement.createElement("script");
          var child = newElement.createTextNode(reactRootParser.getResult() + "\n//# sourceURL=app.js");
          newElement.appendChild(child);
          headElement.insertBefore(newElement, addpoint);
          addpoint = newElement;
        }
        {
          var newElement = headElement.createElement("script");
          var child = newElement.createTextNode(webComponentParser.getResult() + "\n//# sourceURL=Component.js");
          newElement.appendChild(child);
          headElement.insertBefore(newElement, addpoint);
          addpoint = newElement;
        }
        {
          var newElement = headElement.createElement("script");
          newElement.attributes = {
            src: [{
              type: "text",
              data: "https://unpkg.com/react-dom@16/umd/react-dom.development.js"
            }]
          };
          headElement.insertBefore(newElement, addpoint);
          addpoint = newElement;
        }
        {
          var newElement = headElement.createElement("script");
          newElement.attributes = {
            src: [{
              type: "text",
              data: "https://unpkg.com/react@16/umd/react.development.js"
            }]
          };
          headElement.insertBefore(newElement, addpoint);
          addpoint = newElement;
        }
        {
          var newElement = headElement.createElement("script");
          newElement.attributes = {
            src: [{
              type: "text",
              data: "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
            }]
          };
          headElement.insertBefore(newElement, addpoint);
          addpoint = newElement;
        }
      }, this);

      bodyElements.forEach(function (bodyElement) {
        {
          var newElement = bodyElement.createElement("script");
          var child = newElement.createTextNode('\n var render = function render() {\n  ReactDOM.render(\n    React.createElement(App, null),\n    document.querySelector("#app")\n  );\n};\n\n$(function() {\n  render();\n});');
          newElement.appendChild(child);
          bodyElement.appendChild(newElement);
        }
      }, this);
      compiler2.compile(parseData.children); //jsonオブジェクトを各種コードに変換します
      data.html.model.setValue(builder.getNodes());
      await saveCache(filename + '.html', builder.getNodes(), 'text/html; charset=UTF-8');
    }

    $("#run").on("click", function (event) {
      refreshCache();
      compileAll();
    });

    $("#test").on("click", function (event) {
      loadProject("https://api.github.com/gists/8e670a377e30a60520705d916a434a22", "gist", function () {});
    });

    function saveGist(token) {
      $.UIkit.notify("Share Gist..", { status: 'success', timeout: 1000 });

      var sendType = "POST";
      var gisturl = 'https://api.github.com/gists';
      if (fileContainer.getId()) {
        sendType = "PATCH";
        gisturl = gisturl + "/" + fileContainer.getId();
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
      }).error(function (e) {
        console.warn("gist save error", e);
        $.UIkit.notify("error..", { status: 'error', timeout: 1000 });
      });
    }

    $("#gist").on("click", function (event) {
      var token_key = 'gist_pat' + location.pathname.replace(/\//g, '.');
      var token = localStorage.getItem(token_key);
      if (!token) {
        UIkit.modal.prompt('<p>Gist</p><br><p><a href="https://github.com/settings/tokens">Personal access tokens</a>:</p>', '', function (newtoken) {
          console.log('Confirmed.' + newtoken);
          token = newtoken;
          localStorage.setItem(token_key, token);
          saveGist(token);
        }, function () {
          console.log('Rejected.');
          return;
        });
      } else {
        saveGist(token);
      }
    });

    $("#fileRename").on("click", function (event) {
      $('.fileSelect:checkbox:checked').each(function () {
        var filename = $(this).attr("data-uri");
        UIkit.modal.prompt('<p>Rename File Name</p>', filename, function (newName) {
          console.log('newName ' + newName);

          fileContainer.renameFile(filename, newName);
          refreshFileList();
        }, function () {
          console.log('Rejected.');
          return;
        });
      });
    });

    $("#fileDelete").on("click", function (event) {
      $('.fileSelect:checkbox:checked').each(function () {
        var filename = $(this).attr("data-uri");
        UIkit.modal.confirm('<p>Delete ' + filename + ' File </p>', function () {
          console.log('filename ' + filename);
          fileContainer.removeFile(filename);
          refreshFileList();
        }, function () {
          console.log('Rejected.');
          return;
        });
      });
    });

    $("#newfile").on("click", function (event) {
      UIkit.modal.prompt('<p>File Name</p>', '', function (newFile) {
        console.log('newFile ' + newFile);
        var file = new _FileData2.default();
        file.setFilename(newFile);
        file.setContent("");
        fileContainer.putFile(file);
        refreshFileList();
      }, function () {
        console.log('Rejected.');
        return;
      });
    });

    $('#container').bind('blur keydown keyup keypress change', function () {
      if (currentFile) {
        var currentState = editor.saveViewState();
        var currentModel = editor.getModel();
        var data = currentFile.getEditorData();
        data[currentModelId].state = currentState;
        currentFile.setEditorData(data);
        fileContainer.putFile(currentFile);
      }
    });

    $(window).keydown(function (e) {
      if (e.keyCode === 120) {
        refreshCache();
        compileAll();
        return false;
      }
      if (e.ctrlKey) {
        if (e.keyCode === 83) {
          saveDraft();
          refreshCache();
          return false;
        }
      }
    });
  });

  function stringify(str) {
    var cache = [];
    return JSON.stringify(str, function (key, value) {
      if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      if (key == "parentNode") return;
      return value;
    }, "\t");
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./FileData.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./FileData.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.FileData);
    global.FileContainer = mod.exports;
  }
})(this, function (exports, _FileData) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _FileData2 = _interopRequireDefault(_FileData);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var FileContainer = function () {
    function FileContainer(monaco) {
      _classCallCheck(this, FileContainer);

      this.monaco = monaco;
      this.container = {
        id: null,
        files: {},
        "public": true,
        "created_at": "2017-10-29T05:45:01Z",
        "updated_at": "2017-11-14T12:41:14Z",
        "description": ""
      };
      this.fileObjects = {};
    }

    _createClass(FileContainer, [{
      key: "setId",
      value: function setId(id) {
        this.container['id'] = id;
      }
    }, {
      key: "getId",
      value: function getId() {
        return this.container['id'];
      }
    }, {
      key: "setMonaco",
      value: function setMonaco(monaco) {
        this.monaco = monaco;
      }
    }, {
      key: "getMonaco",
      value: function getMonaco() {
        return this.monaco;
      }
    }, {
      key: "getFiles",
      value: function getFiles() {
        // 配列のキーを取り出す
        var ret = [];
        for (var key in this.container["files"]) {
          if (!this.container["files"][key]["truncated"]) {
            ret.push(key);
          }
        }
        return ret;
      }
    }, {
      key: "getFile",
      value: function getFile(filename) {
        if (filename in this.container["files"]) {
          if (!(filename in this.fileObjects)) {
            this.fileObjects[filename] = new _FileData2.default(this.container["files"][filename], this.monaco);
          }
          return this.fileObjects[filename];
        }
      }
    }, {
      key: "getFileRaw",
      value: function getFileRaw(filename) {
        if (filename in this.container["files"]) {
          return this.container["files"][filename];
        }
      }
    }, {
      key: "putFile",
      value: function putFile(file) {
        var filename = file.getFilename();
        this.container["files"][filename] = file.getFileData();
        return true;
      }
    }, {
      key: "renameFile",
      value: function renameFile(filename, newName) {
        var file = this.getFile(filename);
        file.setFilename(newName);
        this.putFile(file);
        delete this.container["files"][filename];
      }
    }, {
      key: "removeFile",
      value: function removeFile(filename) {
        var file = this.getFile(filename);
        file.remove();
        this.putFile(file);
      }
    }, {
      key: "init",
      value: function init() {
        this.container = {
          id: "",
          files: {},
          "public": true,
          "created_at": "2017-10-29T05:45:01Z",
          "updated_at": "2017-11-14T12:41:14Z",
          "description": ""
        };
        this.fileObjects = {};
      }
    }, {
      key: "setPublic",
      value: function setPublic(bool) {
        this.container["public"] = bool;
      }
    }, {
      key: "getPublic",
      value: function getPublic() {
        return this.container["public"];
      }
    }, {
      key: "setDescription",
      value: function setDescription(description) {
        this.container["description"] = description;
      }
    }, {
      key: "getDescription",
      value: function getDescription() {
        return this.container["description"];
      }
    }, {
      key: "setContainer",
      value: function setContainer(container) {
        this.container = container;
        this.fileObjects = {};
      }
    }, {
      key: "getContainer",
      value: function getContainer() {
        return this.container;
      }
    }, {
      key: "setContainerJson",
      value: function setContainerJson(container) {
        this.setContainer(JSON.parse(container));
        this.fileObjects = {};
      }
    }, {
      key: "getContainerJson",
      value: function getContainerJson() {
        return JSON.stringify(this.getContainer());
      }
    }, {
      key: "getGistData",
      value: function getGistData() {
        var gistdata = {
          "description": this.container["description"],
          "public": this.container["public"],
          "files": this.container["files"]
        };
        return gistdata;
      }
    }, {
      key: "getGistJsonData",
      value: function getGistJsonData() {
        return JSON.stringify(this.getGistData());
      }
    }]);

    return FileContainer;
  }();

  exports.default = FileContainer;

  if (typeof window != "undefined") {
    !window.FileContainer && (window.FileContainer = FileContainer);
  }
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.FileData = mod.exports;
  }
})(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var FileData = function () {
    function FileData(file, monaco) {
      _classCallCheck(this, FileData);

      if (file instanceof FileData) {
        this.file = file.getFileData;
      } else {
        this.file = {
          "filename": file && file["filename"] ? file["filename"] : "",
          "fileType": file && file["fileType"] ? file["fileType"] : "txt",
          "type": file && file["type"] ? file["type"] : "text/plain",
          "language": file && file["language"] ? file["language"] : "Markdown",
          "size": file && file["size"] ? file["size"] : 0,
          "truncated": file && file["truncated"] ? file["truncated"] : false,
          "content": file && file["content"] ? file["content"] : ""
        };
        this.editorData = {};
        if (file && file["filename"]) this.setFilename(file["filename"]);
        if (monaco) this.editorData.source.model.setValue(this.file["content"]);
        this.monaco = monaco;
      }
    }

    _createClass(FileData, [{
      key: "addEditorData",
      value: function addEditorData(key, caption, type) {
        this.editorData[key] = {
          caption: caption,
          model: monaco ? monaco.editor.createModel("", type) : null,
          state: null
        };
      }
    }, {
      key: "setLanguage",
      value: function setLanguage(language) {
        this.file["language"] = language;
      }
    }, {
      key: "getLanguage",
      value: function getLanguage() {
        return this.file["language"];
      }
    }, {
      key: "setFileType",
      value: function setFileType(fileType) {
        this.file["fileType"] = fileType;
      }
    }, {
      key: "getFileType",
      value: function getFileType() {
        return this.file["fileType"];
      }
    }, {
      key: "setType",
      value: function setType(type) {
        this.file["type"] = type;
      }
    }, {
      key: "getType",
      value: function getType() {
        return this.file["type"];
      }
    }, {
      key: "getSize",
      value: function getSize() {
        return this.file["size"];
      }
    }, {
      key: "setContent",
      value: function setContent(content) {
        if (this.monaco) {
          this.editorData.source.model.setValue(content);
        } else {
          this.file["content"] = content;
        }
      }
    }, {
      key: "getContent",
      value: function getContent() {
        return this.monaco ? this.editorData.source.model.getValue() : this.file["content"];
      }
    }, {
      key: "setFilename",
      value: function setFilename(filename) {
        this.file["filename"] = filename;
        if (filename.match(/md$/)) {
          this.setType("text/plain");
          this.setLanguage("Markdown");
          this.addEditorData("source", filename, "txt");
          return;
        }
        if (filename.match(/markdown$/)) {
          this.setType("text/plain");
          this.setLanguage("Markdown");
          this.addEditorData("source", filename, "txt");
          return;
        }
        if (filename.match(/txt$/)) {
          this.setType("text/plain");
          this.setLanguage("text");
          this.addEditorData("source", filename, "txt");
          return;
        }
        if (filename.match(/json$/)) {
          this.setType("application/json");
          this.setLanguage("json");
          this.addEditorData("source", filename, "json");
          return;
        }
        if (filename.match(/ahtml$/)) {
          this.setType("text/html");
          this.setLanguage("ahtml");
          this.addEditorData("source", filename, "html");
          this.addEditorData("dom", "dom tree", "json");
          this.addEditorData("component", "js component.js", "javascript");
          this.addEditorData("app", "js app.js", "javascript");
          this.addEditorData("html", "result(html)", "html");
          return;
        }
        if (filename.match(/htm.?$/)) {
          this.setType("text/html");
          this.setLanguage("html");
          this.addEditorData("source", filename, "html");
          return;
        }
        if (filename.match(/js$/)) {
          this.setType("text/javascript");
          this.setLanguage("JavaScript");
          this.addEditorData("source", filename, "javascript");
          return;
        }
        if (filename.match(/css$/)) {
          this.setType("text/css");
          this.setLanguage("css");
          this.addEditorData("source", filename, "css");
          return;
        }
        this.addEditorData("source", filename, "txt");
        return;
      }
    }, {
      key: "getFilename",
      value: function getFilename() {
        return this.file["filename"];
      }
    }, {
      key: "setEditorData",
      value: function setEditorData(data) {
        this.editorData = data;
        if (monaco) this.file["content"] = this.editorData.source.model.getValue();
      }
    }, {
      key: "getEditorData",
      value: function getEditorData() {
        return this.editorData;
      }
    }, {
      key: "getFileData",
      value: function getFileData() {
        return this.file;
      }
    }, {
      key: "getFileDataJson",
      value: function getFileDataJson() {
        return JSON.stringify(this.getFileData());
      }
    }, {
      key: "remove",
      value: function remove() {
        this.file["content"] = "";
        this.file["truncated"] = true;
      }
    }]);

    return FileData;
  }();

  exports.default = FileData;


  if (typeof window != "undefined") {
    !window.FileData && (window.FileData = FileData);
  }
});
