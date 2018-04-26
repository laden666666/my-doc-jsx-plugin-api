import * as myDocJsx from 'my-doc-jsx'
import Plugin from '../src/index'

var assert = require('chai').assert;

describe('myDocJsx基本功能测试', function() {
    it('转换测试', function() {
        myDocJsx.usePlugin(new Plugin)
        var jsxStr =
`<doc>
    <api>{\`
* 根据字符串模糊查询key，并返回匹配的缓存数组
* @param {string} searchText    key的模糊检索条件
* @return {Array<string>}      返回匹配的数组
    \`}</api>
    <html-example>{
\`
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
\`
    }</html-example>
</doc>`
        var htmlStr = myDocJsx.convert(jsxStr)
        console.log(htmlStr)
    });
});