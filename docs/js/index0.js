(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.indexBabel = mod.exports;
  }
})(this, function () {
  "use strict";

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function changeSrc(url, cb) {
    $("#child-frame").attr("srcdoc", "");
    //$("#child-frame").attr("src", "./blank.html");
    var frame = document.getElementById("child-frame");
    frame.onload = function () {};

    if (!url) {
      var doc = localDraft();
      if (doc) {
        data.source.model.setValue(localDraft());
        //$("#child-frame").attr("src", "./blank.html");
        return cb ? cb() : true;
      } else {
        url = $("#test5").attr("data-url");
      }
    }
    $.ajax({
      url: url,
      dataType: "html"
    }).done(function (d) {
      //editor.setValue(d);
      data.source.model.setValue(d);
      return cb ? cb() : true;
    });
  }
  $(".samples").on("click", function (event) {
    changeSrc($(this).attr("data-url"), function () {
      $.UIkit.notify("load..", { status: 'success', timeout: 1000 });
    });
  });

  //File一覧取得
  var gasUrl = "https://script.google.com/macros/s/AKfycbzjYobwi6G61HPTeiUue67PlOHvnsj2E_SFgzi-CVoV/dev?p=/uid/reactcomponent/";

  $.ajax(gasUrl + '', {
    type: 'get',
    data: { t: '1' },
    dataType: 'jsonp',
    jsonpCallback: "filesjsonCallback"
  });

  //File一覧のcallback
  function filesjsonCallback(json) {
    console.log(json);
    $("#filelist").empty();

    var file = $("\n<div class=\"uk-width-medium-1-3\">\n  <a class=\"uk-panel uk-panel-hover uk-panel-box file\" data-url=\"\">\n    <h3 class=\"uk-panel-title\"><i class=\"uk-icon-file\"></i></h3>\n  </a>\n</div>\n");

    json.rows.forEach(function (val, i) {
      console.log(i, val);
      var _file = file.clone(true);
      _file.children('.file').attr('href', val[6] + '/' + val[1] + val[2]);
      _file.find('.uk-panel-title').append(val[1]);
      $("#filelist").append(_file);
    });
  }

  function saveDraftCallback(json) {
    console.log(json);
  }

  function saveDraft(source) {
    // ローカルストレージに最新の状態を保存

    var name = 'draft' + location.pathname.replace(/\//g, '.');

    //localStorage.setItem(name, JSON.stringify(source));

    console.log("draft:" + JSON.stringify(source));
    $.UIkit.notify("save..", { status: 'success', timeout: 1000 });

    var datafilecontents = Encoding.base64Encode(Encoding.convert(Encoding.stringToCode(source), 'SJIS'));
    //var datafilefilename = Encoding.base64Encode(Encoding.convert(Encoding.stringToCode('draft.html'), 'SJIS'));
    var datafilefilename = Encoding.urlEncode(Encoding.convert(Encoding.stringToCode('draft.html'), 'UNICODE'));
    var datafiletype = 'text/html';
    var datafilelength = source.length;

    $.ajax({ url: gasUrl + 'reactcomponent/' + datafilefilename + '&callback=test',
      type: 'POST',
      data: { t: '1', datafilecontents: datafilecontents, datafilefilename: datafilefilename, datafiletype: datafiletype, datafilelength: datafilelength },
      dataType: 'json'
      //    jsonpCallback: "saveDraftCallback"
    });
  }
  function localDraft() {
    // ページが読み込まれたら、ローカルストレージから状態を読み込む
    var name = 'draft' + location.pathname.replace(/\//g, '.');
    var source = JSON.parse(localStorage.getItem(name)) || null;
    console.log("source:" + JSON.stringify(source));
    return source;
  }

  if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/js/ws.js', { scope: '/js/test/' }).then(function (registraion) {
      registraion.update();
    });
  }

  var STATIC_CACHE_KEY = '1';
  caches.delete(STATIC_CACHE_KEY);
  function saveCache(url, source, type) {
    var _type = type || 'application/javascript; charset=UTF-8';
    var _url = location.href.substr(0, location.href.length - location.pathname.length); //URLの最初のパスまで
    caches.open(STATIC_CACHE_KEY).then(function (cache) {
      var blob = new Blob([source], { type: _type });
      var response = new Response(blob, { "status": 200, "statusText": "OK" });
      cache.put(_url + "/js/test/" + url, response);
    });
  }

  var arg = new Object();
  var pair = location.search.substring(1).split('&');
  for (var i = 0; pair[i]; i++) {
    var kv = pair[i].split('=');
    arg[kv[0]] = kv[1];
  }

  var url = arg["q"] ? arg["q"] : "";

  function stringify(str) {
    var cache = [];
    return JSON.stringify(str, function (key, value) {
      if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value !== null) {
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
