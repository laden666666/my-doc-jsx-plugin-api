import * as myDocJsx from 'my-doc-jsx'
import Plugin from '../src/index'

var assert = require('chai').assert;

describe('myDocJsx基本功能测试', function() {
    it('转换测试', function() {
        myDocJsx.usePlugin(new Plugin)
        var jsxStr =
            `<doc>
                <hello-world>
                    hello world!
                    <hello-world2>hello world2!</hello-world2>
                </hello-world>
            </doc>`
        var htmlStr = myDocJsx.convert(jsxStr)
        assert.equal(htmlStr.indexOf('hello world!') > -1, true)
        assert.equal(htmlStr.indexOf('hello world2!') > -1, true)
    });

    it('转换测试md', function() {
        myDocJsx.usePlugin(new Plugin)
        var jsxStr =
            `<doc>
                <hello-world>
                    hello world!
                    <hello-world2>hello world2!</hello-world2>
                </hello-world>
            </doc>`
        var htmlStr = myDocJsx.convert(jsxStr, {format: 'MARKDOWN'})
        assert.equal(htmlStr.indexOf('hello world!') > -1, true)
        assert.equal(htmlStr.indexOf('hello world2!') > -1, true)
    });
});