import {BasePlugin} from "my-doc-jsx"
import htmlAPI from './HTMLRender/blockTags/API'
import markdownAPI from './MarkdownRender/blockTags/API'
import htmlHTMLExample from './HTMLRender/blockTags/HTMLExample'
import markdownHTMLExample from './MarkdownRender/blockTags/HTMLExample'
import htmlBrowserList from './HTMLRender/blockTags/browserList'
import markdownBrowserList from './MarkdownRender/blockTags/browserList'
import htmlNpmInfo from './HTMLRender/blockTags/NpmInfo'
import markdownNpmInfo from './MarkdownRender/blockTags/NpmInfo'
import htmlTitle from './HTMLRender/blockTags/Title'
import markdownTitle from './MarkdownRender/blockTags/Title'

//当前版本
//通过DefinePlugin对去package.json的版本
declare const PLUGIN_VERSION: string;
class Plugin extends BasePlugin{
    constructor(){
        super()
        this.registerBlockNode('HTML', 'api', htmlAPI)
        this.registerBlockNode('HTML', 'html-example', htmlHTMLExample)
        this.registerBlockNode('HTML', 'browser-list', htmlBrowserList)
        this.registerBlockNode('HTML', 'npm-info', htmlNpmInfo)
        this.registerBlockNode('HTML', 'title', htmlTitle)
        this.registerBlockNode('MARKDOWN', 'api', markdownAPI)
        this.registerBlockNode('MARKDOWN', 'html-example', markdownHTMLExample)
        this.registerBlockNode('MARKDOWN', 'browser-list', markdownBrowserList)
        this.registerBlockNode('MARKDOWN', 'npm-info', markdownNpmInfo)
        this.registerBlockNode('MARKDOWN', 'title', markdownTitle)
    }

    static version: string = PLUGIN_VERSION
}

declare const module: {
    exports: any
}

module.exports = Plugin