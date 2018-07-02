<doc>
    <h1>my-doc-jsx-plugin-api</h1>
    <p>my-doc-jsx-plugin-api是一个my-doc-jsx的插件，用于生成API文档。</p>

    <h2>使用</h2>
    
    <code>{
`npm instlal my-doc-jsx-plugin-api --D`
    }</code>
    
    <p>如果是在nodejs或者浏览器中执行，使用jsxdoc的myDocJsx方法集成，nodejs：</p>
    <code>{
`const Plugin = require('my-doc-jsx-plugin-api')
myDocJsx.usePlugin(new Plugin)`
    }</code>
    
    <p>浏览器中：</p>
    <code>{
`myDocJsx.usePlugin(new myDocJsxPluginAPI())`
    }</code>
    
    <p>cli环境下使用</p>
    <code>{
`docjsx c html --plugin my-doc-jsx-plugin-api index.jsx ./`
    }</code>
    
    <h2>项目logo</h2>
    <p>用于展示项目的logo</p>

    <h2>npm信息</h2>
    <p>用于展示项目的logo，主要是基于img.shields.io这个网站来生成项目和npm相关的信息。</p>
    <npm-info version downloads license name="my-doc-jsx-plugin-api"></npm-info>
    <code>{
`<npm-info version downloads license name="my-doc-jsx-plugin-api"></npm-info>`
    }</code>

    <h2>浏览器兼容性</h2>
    <p>用于生成一个展示项目浏览器兼容性表格的标签</p>
    <browser-list Android=">4.4" Firefox Chrome IE=">8" iPhone Edge Safari/>
    <code>{
`<browser-list Android=">4.4" Firefox Chrome IE=">8" iPhone Edge Safari/>`
    }</code>

    <h2>注释生成函数文档</h2>
    <p>该功能可以将函数的注释生成为说明函数用途、参数、返回值的文档，以table表格的形式展示，具体使用方法为：</p>
    <code>{
`<api>\{\`
* 根据字符串模糊查询key，并返回匹配的缓存数组
* @param {string} searchText    key的模糊检索条件
* @return {Array<string>}      返回匹配的数组
\`\}</api>`
    }</code>
    <p>生成的效果为：</p>
    <api>{`
    * 根据字符串模糊查询key，并返回匹配的缓存数组
    * @param {string} searchText    key的模糊检索条件
    * @return {Array<string>}      返回匹配的数组
    `}</api>

    <h2>展示HTML形式的例子</h2>
    <p>该控件的功能为，运行HTML代码的显示效果，类似于jsfiddle这样的网站，不过该功能比jsfiddle简单很多，单机即可使用，同时可以展示HTML例子的代码。</p>
    <p>该控件基于HTML的iframe标签总的srcdoc属性，因此在markdown、CSP策略中设置了child-src的页面、部分浏览器中无法使用。</p>
    <p>具体使用方法为：</p>
    <code>{
`<html-example code>\{
\`
<div id="app">
    \{\{ message \}\}
</div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            message: '运行了vue!'
        }
    })
</script>
\`
\}</html-example>`
    }</code>
    <p>效果为：</p>
    <html-example code>{
`
<div id="app">
    {{ message }}
</div>
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
<script>
    var app = new Vue({
        el: '#app',
        data: {
            message: '运行了vue!'
        }
    })
</script>
`
    }</html-example>
</doc>