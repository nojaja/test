/***********************************************
Copyright 2017 - 2018
***********************************************/
/* v1.0.0 */

/*------------------------------------------------
  ファイル管理クラス FileContainer
------------------------------------------------*/
class FileData {
  constructor(file,monaco) {
    if(file instanceof FileData){
      this.file = file.getFileData
    }else{
      this.file = {
          "filename": file&&file["filename"]?file["filename"]:"",
          "type":  file&&file["type"]?file["type"]:"text/plain",
          "language":  file&&file["language"]?file["language"]:"Markdown",
          "size":  file&&file["size"]?file["size"]:0,
          "truncated":  file&&file["truncated"]?file["truncated"]:false,
          "content":  file&&file["content"]?file["content"]:""
      };
      this.editorData = {
        source: {
          model: (monaco)?monaco.editor.createModel("", "html"):null,
          state: null
        },
        dom: {
          model: (monaco)?monaco.editor.createModel("", "json"):null,
          state: null
        },
        component: {
          model: (monaco)?monaco.editor.createModel("", "javascript"):null,
          state: null
        },
        app: {
          model: (monaco)?monaco.editor.createModel("", "javascript"):null,
          state: null
        },
        html: {
          model: (monaco)?monaco.editor.createModel("", "html"):null,
          state: null
        }
      };
      if(monaco)this.editorData.source.model.setValue(this.file ["content"]);
      this.monaco = monaco;
    }
  }

  setLanguage(language) {
    this.file["language"] = language;
  }
  getLanguage() {
    return this.file["language"];
  }
  setType(type) {
    this.file["type"] = type;
  }
  getType() {
    return this.file["type"];
  }
  getSize(){
    return this.file["size"];
  }
  setContent(content) {
    if(this.monaco){
        this.editorData.source.model.setValue(content);
    }else{
        this.file["content"] = content;
    }
  }
  getContent() {
    return (this.monaco)?this.editorData.source.model.getValue():this.file["content"];
  }
  setFilename(filename) {
    this.file["filename"] = filename;
    if(filename.match(/txt$/)){this.setType("text/plain")}
    if(filename.match(/json$/)){this.setType("application/json")}
    if(filename.match(/htm.?$/)){this.setType("text/html")}
    if(filename.match(/js$/)){this.setType("text/javascript")}
    if(filename.match(/css$/)){this.setType("text/css")}
  }
  getFilename() {
    return this.file["filename"];
  }

  setEditorData(data) {
    this.editorData = data;
    if(monaco)this.file ["content"]=this.editorData.source.model.getValue();
  }
  getEditorData() {
    return this.editorData;
  }


  getFileData() {
    return this.file;
  }
  getFileDataJson() {
    return JSON.stringify(this.getFileData());
  }

  remove(){
    this.file["content"] = "";
    this.file["truncated"] = true;
  };
}

export default FileData;

if (typeof window != "undefined") {
  !window.FileData && (window.FileData = FileData);
}
