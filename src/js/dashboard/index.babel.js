"use strict";

import WebStorage from '../fs/webstorage.js'



var webStorage = new WebStorage();

//プロジェクト一覧表示
function projectjsonCallback (json, type) {
  console.log(json);
  $("#prjlist").empty();

  const prj = $(`
<div class="uk-width-medium-1-3">
  <a target="_blank" class="uk-panel uk-panel-hover uk-panel-box file" data-url="">
    <h3 class="uk-panel-title"><i class="uk-icon-file"></i></h3>
  </a>
</div>
`);
  // [ROWID, filename, ext, timestamp, uid, scope,projectid]
  // [{description, id, public},,]
  json.rows.forEach((val, i) => {
    let _prj = prj.clone(true);
    _prj.children('.file').attr('href','editor.html?q='+val.id+'&t='+type);
    _prj.find('.uk-panel-title').append(val.description);
    $("#prjlist").append(_prj);
  });
}

//プロジェクト一覧取得
webStorage.loadList((json, type) => {
  projectjsonCallback(json, type)

});



function stringify(str) {
  var cache = [];
  return JSON.stringify(
    str,
    function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      if (key == "parentNode") return;
      return value;
    },
    "\t"
  );
}