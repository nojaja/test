
import FileData from '../model/FileData.js'
import htmlparser from '@nojaja/htmlparser'
import htmlcompiler from '@nojaja/htmlcompiler'
import {EventEmitter} from 'events'

export class RefreshView {
    constructor (fileContainer) {
        this.fileContainer = fileContainer
        this.url = ''
        this.ev = new EventEmitter ()        
        /**
        サービスワーカーの登録
        キャッシュファイルの制御を可能にする
        */
        if (navigator.serviceWorker) {
            navigator.serviceWorker.register('./serviceWorker.bundle.js', { scope: './' }).then(function(registraion) {
                registraion.update()
            })
        }
    }

    parseHtml (rawHtml) {
        return htmlparser.parseDOM(rawHtml, {
            enforceEmptyTags: true,
            ignoreWhitespace: true,
            caseSensitiveTags: true,
            caseSensitiveAttr: true,
            verbose: false
        })
    }

    onload (callback) {
        this.ev.on('load', callback)
    }

    test () {
        console.log('test')
        let index_app = new FileData()
        index_app.setFilename('/public/index_app.js')
        index_app.setContent(`	
        class App extends React.Component{
            render(){
              return React.createElement('div',null,
              /*  Page Container  */
              React.createElement('div',{ 'className':'w3-content w3-margin-top','style':{"maxwidth":"1400px"}},
                  /*  The Grid  */
                  React.createElement('div',{ 'className':'w3-row-padding'},
                      /*  Left Column  */
                      React.createElement('div',{ 'className':'w3-third'},
                          React.createElement('div',{ 'className':'w3-white w3-text-grey w3-card-4'},
                              React.createElement('div',{ 'className':'w3-display-container'},
                                  React.createElement('img',{ 'src':'https://www.w3schools.com/w3images/avatar_hat.jpg','style':{"width":"100%"},'alt':'Avatar'}),
                                  React.createElement('div',{ 'className':'w3-display-bottomleft w3-container w3-text-black'},
                                      React.createElement('h2',null,
                                          'Jane Doe'
                                      )
                                  )
                              ),
                              React.createElement('div',{ 'className':'w3-container'},
                                  React.createElement('p',null,
                                      React.createElement('i',{ 'className':'fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal'}),
                                      'Designer'
                                  ),
                                  React.createElement('p',null,
                                      React.createElement('i',{ 'className':'fa fa-home fa-fw w3-margin-right w3-large w3-text-teal'}),
                                      'London, UK'
                                  ),
                                  React.createElement('p',null,
                                      React.createElement('i',{ 'className':'fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal'}),
                                      'ex@mail.com'
                                  ),
                                  React.createElement('p',null,
                                      React.createElement('i',{ 'className':'fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal'}),
                                      '1224435534'
                                  ),
                                  React.createElement('hr',null),
                                  React.createElement('p',{ 'className':'w3-large'},
                                      React.createElement('b',null,
                                          React.createElement('i',{ 'className':'fa fa-asterisk fa-fw w3-margin-right w3-text-teal'}),
                                          'Skills'
                                      )
                                  ),
                                  React.createElement('p',null,
                                      'Adobe Photoshop'
                                  ),
                                  React.createElement('div',{ 'className':'w3-light-grey w3-round-xlarge w3-small'},
                                      React.createElement('div',{ 'className':'w3-container w3-center w3-round-xlarge w3-teal','style':{"width":"90%"}},
                                          '90%'
                                      )
                                  ),
                                  React.createElement('p',null,
                                      'Photography'
                                  ),
                                  React.createElement('div',{ 'className':'w3-light-grey w3-round-xlarge w3-small'},
                                      React.createElement('div',{ 'className':'w3-container w3-center w3-round-xlarge w3-teal','style':{"width":"80%"}},
                                          React.createElement('div',{ 'className':'w3-center w3-text-white'},
                                              '80%'
                                          )
                                      )
                                  ),
                                  React.createElement('p',null,
                                      'Illustrator'
                                  ),
                                  React.createElement('div',{ 'className':'w3-light-grey w3-round-xlarge w3-small'},
                                      React.createElement('div',{ 'className':'w3-container w3-center w3-round-xlarge w3-teal','style':{"width":"75%"}},
                                          '75%'
                                      )
                                  ),
                                  React.createElement('p',null,
                                      'Media'
                                  ),
                                  React.createElement('div',{ 'className':'w3-light-grey w3-round-xlarge w3-small'},
                                      React.createElement('div',{ 'className':'w3-container w3-center w3-round-xlarge w3-teal','style':{"width":"50%"}},
                                          '50%'
                                      )
                                  ),
                                  React.createElement('br',null),
                                  React.createElement('p',{ 'className':'w3-large w3-text-theme'},
                                      React.createElement('b',null,
                                          React.createElement('i',{ 'className':'fa fa-globe fa-fw w3-margin-right w3-text-teal'}),
                                          'Languages'
                                      )
                                  ),
                                  React.createElement('p',null,
                                      'English'
                                  ),
                                  React.createElement('div',{ 'className':'w3-light-grey w3-round-xlarge'},
                                      React.createElement('div',{ 'className':'w3-round-xlarge w3-teal','style':{"height":"24px","width":"100%"}})
                                  ),
                                  React.createElement('p',null,
                                      'Spanish'
                                  ),
                                  React.createElement('div',{ 'className':'w3-light-grey w3-round-xlarge'},
                                      React.createElement('div',{ 'className':'w3-round-xlarge w3-teal','style':{"height":"24px","width":"55%"}})
                                  ),
                                  React.createElement('p',null,
                                      'German'
                                  ),
                                  React.createElement('div',{ 'className':'w3-light-grey w3-round-xlarge'},
                                      React.createElement('div',{ 'className':'w3-round-xlarge w3-teal','style':{"height":"24px","width":"25%"}})
                                  ),
                                  React.createElement('br',null)
                              )
                          ),
                          React.createElement('br',null)
                          /*  End Left Column  */
                      ),
                      /*  Right Column  */
                      React.createElement('div',{ 'className':'w3-twothird'},
                          React.createElement('div',{ 'className':'w3-container w3-card-2 w3-white w3-margin-bottom'},
                              React.createElement('h2',{ 'className':'w3-text-grey w3-padding-16'},
                                  React.createElement('i',{ 'className':'fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal'}),
                                  'Work Experience'
                              ),
                              React.createElement('div',{ 'className':'w3-container'},
                                  React.createElement('h5',{ 'className':'w3-opacity'},
                                      React.createElement('b',null,
                                          'Front End Developer / w3schools.com'
                                      )
                                  ),
                                  React.createElement('h6',{ 'className':'w3-text-teal'},
                                      React.createElement('i',{ 'className':'fa fa-calendar fa-fw w3-margin-right'}),
                                      'Jan 2015 - ',
                                      React.createElement('span',{ 'className':'w3-tag w3-teal w3-round'},
                                          'Current'
                                      )
                                  ),
                                  React.createElement('p',null,
                                      'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
                                  ),
                                  React.createElement('hr',null)
                              ),
                              React.createElement('div',{ 'className':'w3-container'},
                                  React.createElement('h5',{ 'className':'w3-opacity'},
                                      React.createElement('b',null,
                                          'Web Developer / something.com'
                                      )
                                  ),
                                  React.createElement('h6',{ 'className':'w3-text-teal'},
                                      React.createElement('i',{ 'className':'fa fa-calendar fa-fw w3-margin-right'}),
                                      'Mar 2012 - Dec 2014'
                                  ),
                                  React.createElement('p',null,
                                      'Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.'
                                  ),
                                  React.createElement('hr',null)
                              ),
                              React.createElement('div',{ 'className':'w3-container'},
                                  React.createElement('h5',{ 'className':'w3-opacity'},
                                      React.createElement('b',null,
                                          'Graphic Designer / designsomething.com'
                                      )
                                  ),
                                  React.createElement('h6',{ 'className':'w3-text-teal'},
                                      React.createElement('i',{ 'className':'fa fa-calendar fa-fw w3-margin-right'}),
                                      'Jun 2010 - Mar 2012'
                                  ),
                                  React.createElement('p',null,
                                      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
                                  ),
                                  React.createElement('br',null)
                              )
                          ),
                          React.createElement('div',{ 'className':'w3-container w3-card-2 w3-white'},
                              React.createElement('h2',{ 'className':'w3-text-grey w3-padding-16'},
                                  React.createElement('i',{ 'className':'fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal'}),
                                  'Education'
                              ),
                              React.createElement('div',{ 'className':'w3-container'},
                                  React.createElement('h5',{ 'className':'w3-opacity'},
                                      React.createElement('b',null,
                                          'W3Schools.com'
                                      )
                                  ),
                                  React.createElement('h6',{ 'className':'w3-text-teal'},
                                      React.createElement('i',{ 'className':'fa fa-calendar fa-fw w3-margin-right'}),
                                      'Forever'
                                  ),
                                  React.createElement('p',null,
                                      'Web Development! All I need to know in one place'
                                  ),
                                  React.createElement('hr',null)
                              ),
                              React.createElement('div',{ 'className':'w3-container'},
                                  React.createElement('h5',{ 'className':'w3-opacity'},
                                      React.createElement('b',null,
                                          'London Business School'
                                      )
                                  ),
                                  React.createElement('h6',{ 'className':'w3-text-teal'},
                                      React.createElement('i',{ 'className':'fa fa-calendar fa-fw w3-margin-right'}),
                                      '2013 - 2015'
                                  ),
                                  React.createElement('p',null,
                                      'Master Degree'
                                  ),
                                  React.createElement('hr',null)
                              ),
                              React.createElement('div',{ 'className':'w3-container'},
                                  React.createElement('h5',{ 'className':'w3-opacity'},
                                      React.createElement('b',null,
                                          'School of Coding'
                                      )
                                  ),
                                  React.createElement('h6',{ 'className':'w3-text-teal'},
                                      React.createElement('i',{ 'className':'fa fa-calendar fa-fw w3-margin-right'}),
                                      '2010 - 2013'
                                  ),
                                  React.createElement('p',null,
                                      'Bachelor Degree'
                                  ),
                                  React.createElement('br',null)
                              )
                          )
                          /*  End Right Column  */
                      )
                      /*  End Grid  */
                  )
                  /*  End Page Container  */
              ),
              React.createElement('footer',{ 'className':'w3-container w3-teal w3-center w3-margin-top'},
                  React.createElement('p',null,
                      'Find me on social media.'
                  ),
                  React.createElement('i',{ 'className':'fa fa-facebook-official w3-hover-opacity'}),
                  React.createElement('i',{ 'className':'fa fa-instagram w3-hover-opacity'}),
                  React.createElement('i',{ 'className':'fa fa-snapchat w3-hover-opacity'}),
                  React.createElement('i',{ 'className':'fa fa-pinterest-p w3-hover-opacity'}),
                  React.createElement('i',{ 'className':'fa fa-twitter w3-hover-opacity'}),
                  React.createElement('i',{ 'className':'fa fa-linkedin w3-hover-opacity'}),
                  React.createElement('p',null,
                      'Powered by ',
                      React.createElement('a',{ 'href':'https://www.w3schools.com/w3css/default.asp','target':'_blank'},
                          'w3.css'
                      )
                  )
              )
          )
            }
          
          };`
        )
        this.fileContainer.putFile(index_app)

        let index_html = new FileData()
        index_html.setFilename('/public/index.html')
        index_html.setContent(`
        <html>
        <title>
            W3.CSS Template
        </title>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='https://www.w3schools.com/w3css/4/w3.css' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
        <style>
            
    html,body,h1,h2,h3,h4,h5,h6 
            {font-family: "Roboto", sans-serif}
        </style>
        <head>
            <script src='//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
            <script src='https://unpkg.com/react@16/umd/react.development.js'></script>
            <script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js'></script>
            <script src='/public/index_app.js'></script>
        </head>
        <body class='w3-light-grey'>
            <div id='app' />
            <script>
                
            var render = function render() {
                ReactDOM.render(
                    React.createElement(App, null),
                    document.querySelector("#app")
                );
            };
    
            $(function () {
                /* render initial component */
                render();
            });
                    
            </script>
        </body>
    </html>
        `) 
        this.fileContainer.putFile(index_html)
        
        let frame = document.getElementById("child-frame");
        this.refreshView(frame, '/public/index.html', false)
    }

    //////
    // 1つのファイルにローカルファイルを埋め込む
    //////
    createSingleHtml (url) {
        if(url.indexOf('.')==0)url=url.slice(1) // 1文字目のドットは削る
        let file = this.fileContainer.getFile(url)
        if(!file)return "404";

        let vdom = this.parseHtml(file.getContent())
        
        let linkElementList = vdom.getElementsByTagName('link');
        let scriptElementList = vdom.getElementsByTagName('script');
        Object.keys(linkElementList).forEach((key) => {
            let el = linkElementList[key]
            let srcdata = el.getAttribute('href')
            let src = (srcdata && srcdata[0])? srcdata[0].data : null
            if (src && src.indexOf('//') == -1) {
                let file = this.fileContainer.getFile(src)
                if(file){
                    let el2 = el.parentNode.insertBefore('style', el)
                    let child = el.createTextNode(file.getContent())
                    el2.appendChild(child)
                    el2.setAttribute('type', 'text/css')
                    vdom.removeChild(el); 
                }
            }
        })
        Object.keys(scriptElementList).forEach((key) => {
            let el = scriptElementList[key]
            let srcdata = el.getAttribute('src')
            let src = (srcdata && srcdata[0])? srcdata[0].data : null
            if (src && src.indexOf('//') == -1) {
                let file = this.fileContainer.getFile(src)
                if(file){
                    let child = el.createTextNode(file.getContent())
                    el.appendChild(child)
                    el.removeAttribute('src')
                }
            }
        })
        let builder = new HtmlBuilder({})
        let compiler = new Compiler([builder], {})
        compiler.compile(vdom.children)
        return builder.getNodes()
    }   
    // iframe内のコンテンツを更新
    //htmlElement: ifremeのelement document.getElementById("Iframe");
    refreshView (htmlElement,url,flg=true) {
        this.url = url
        if (flg && navigator.serviceWorker) {
            htmlElement.addEventListener('load', () => {
                this.ev.emit('load', this.url)
             })
            // iframe内のコンテンツを更新
            htmlElement.setAttribute("src", this.url)
            //document.getElementById("#url")
            //$("#url").val(this.url)
        } else {
            // iframe内のコンテンツを更新
            htmlElement.setAttribute("srcdoc", "");
        
            let contents = this.createSingleHtml(this.url)
            htmlElement.src = "./blank.html";

            htmlElement.addEventListener('load', () => {
                this.ev.emit('load', this.url)
            })

            htmlElement.onload = () => {
                htmlElement.onload=function(){};
                //htmlElement.contentWindow.location.replace(this.url)
                htmlElement.contentDocument.open();
                htmlElement.contentDocument.write(contents);
                htmlElement.contentDocument.close();
            }
        }
    }
    
    stringify(str) {
        var cache = [];
        return JSON.stringify(
            str,
            function (key, value) {
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
        )
    }
}
export default RefreshView