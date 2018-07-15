import {BasePlugin} from "my-doc-jsx"
import htmlAPI from './HTMLRender/blockTags/API'
import markdownAPI from './MarkdownRender/blockTags/API'
import htmlHTMLExample from './HTMLRender/blockTags/HTMLExample'
import markdownHTMLExample from './MarkdownRender/blockTags/HTMLExample'
import htmlbrowserList from './HTMLRender/blockTags/browserList'
import markdownbrowserList from './MarkdownRender/blockTags/browserList'
import htmlNpmInfo from './HTMLRender/blockTags/NpmInfo'
import markdownNpmInfo from './MarkdownRender/blockTags/NpmInfo'

//当前版本
//通过DefinePlugin对去package.json的版本
declare const PLUGIN_VERSION: string;
class Plugin extends BasePlugin{
    constructor(){
        super()
        this.registerBlockNode('HTML', 'api', htmlAPI)
        this.registerBlockNode('HTML', 'html-example', htmlHTMLExample)
        this.registerBlockNode('HTML', 'browser-list', htmlbrowserList)
        this.registerBlockNode('HTML', 'npm-info', htmlNpmInfo)
        this.registerBlockNode('MARKDOWN', 'api', markdownAPI)
        this.registerBlockNode('MARKDOWN', 'html-example', markdownHTMLExample)
        this.registerBlockNode('MARKDOWN', 'browser-list', markdownbrowserList)
        this.registerBlockNode('MARKDOWN', 'npm-info', markdownNpmInfo)
    }

    static version: string = PLUGIN_VERSION
}

declare const module: {
    exports: any
}

module.exports = Plugin