# my-doc-jsx-plugin-api
my-doc-jsx-plugin-api是一个my-doc-jsx的插件，用于生成API文档。

## 使用
```javascript
npm instlal my-doc-jsx-plugin-api --D
```
如果是在nodejs或者浏览器中执行，使用jsxdoc的myDocJsx方法集成，nodejs：

```javascript
const Plugin = require('my-doc-jsx-plugin-api')
myDocJsx.usePlugin(new Plugin)
```
浏览器中：

```javascript
myDocJsx.usePlugin(new myDocJsxPluginAPI())
```
cli环境下使用

```javascript
docjsx c html --plugin my-doc-jsx-plugin-api index.jsx ./
```

## 项目logo
用于展示项目的logo


## npm信息
用于展示项目的logo，主要是基于img.shields.io这个网站来生成项目和npm相关的信息。

<p class="mydoc_api_npm-info" align="center">
            <a href="https://www.npmjs.com/package/my-doc-jsx-plugin-api"><img src="https://img.shields.io/npm/v/my-doc-jsx-plugin-api.svg" alt="Version"></a>
            <a href="https://www.npmjs.com/package/my-doc-jsx-plugin-api"><img src="https://img.shields.io/npm/dm/my-doc-jsx-plugin-api.svg" alt="Downloads"></a>
            <a href="https://www.npmjs.com/package/my-doc-jsx-plugin-api"><img src="https://img.shields.io/npm/l/my-doc-jsx-plugin-api.svg" alt="License"></a>
        </p>```javascript
<npm-info version downloads license name="my-doc-jsx-plugin-api"></npm-info>
```

## 浏览器兼容性
用于生成一个展示项目浏览器兼容性表格的标签

|Android|Firefox|Chrome|IE|iPhone|Edge|Safari|
|----|----|----|----|----|----|----|
|&gt;4.4|true|true|&gt;8|true|true|true|```javascript
<browser-list Android=">4.4" Firefox Chrome IE=">8" iPhone Edge Safari/>
```

## 注释生成函数文档
该功能可以将函数的注释生成为说明函数用途、参数、返回值的文档，以table表格的形式展示，具体使用方法为：

```javascript
<api>{`
* 根据字符串模糊查询key，并返回匹配的缓存数组
* @param {string} searchText    key的模糊检索条件
* @return {Array<string>}      返回匹配的数组
`}</api>
```
生成的效果为：


>
根据字符串模糊查询key，并返回匹配的缓存数组


##### 参数
|参数名|参数类型|参数说明|
|-|-|-|
|searchText|string|key的模糊检索条件|



##### 返回值
|参数类型|参数说明|
|-|-|-|
|Array&lt;string&gt;|返回匹配的数组|


## 展示HTML形式的例子
该控件的功能为，运行HTML代码的显示效果，类似于jsfiddle这样的网站，不过该功能比jsfiddle简单很多，单机即可使用，同时可以展示HTML例子的代码。

该控件基于HTML的iframe标签总的srcdoc属性，因此在markdown、CSP策略中设置了child-src的页面、部分浏览器中无法使用。

具体使用方法为：

```javascript
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
```
效果为：



