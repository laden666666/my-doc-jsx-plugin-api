# my-doc-jsx-plugin-api
my-doc-jsx-plugin-api是一个my-doc-jsx的插件，用于生成API文档。

## 安装
从npm上面安装：

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



