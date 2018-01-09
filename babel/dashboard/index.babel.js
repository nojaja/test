


//プロジェクト一覧表示
var gasUrl="https://script.google.com/macros/s/AKfycbzyNQRAwdTJ2yqdNzyD5-9nvb84kbkS4vztfcyuT8kwvqQhE-Lr/exec?p=/uid/reactcomponent/";
function projectjsonCallback(json){
  console.log(json);
  $("#filelist").empty();

  var file = $(`
<div class="uk-width-medium-1-3">
  <a target="_blank" class="uk-panel uk-panel-hover uk-panel-box file" data-url="">
    <h3 class="uk-panel-title"><i class="uk-icon-file"></i></h3>
  </a>
</div>
`);
  json.rows.forEach(function(val, i) {
    console.log(i, val); 
    var _file = file.clone(true);
    _file.children('.file').attr('href','editor.html?ga='+val[6]+'/'+val[1]+val[2]);
    _file.find('.uk-panel-title').append(val[1]);
    $("#filelist").append(_file);
  });
}

//プロジェクト一覧取得
$.getJSON(gasUrl+ "&callback=?",  { t: '1' }, function(json){
  projectjsonCallback(json);
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
