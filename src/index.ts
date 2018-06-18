import {BasePlugin} from "my-doc-jsx"
import htmlAPI from './HTMLRender/blockTags/API'
import markdownAPI from './MarkdownRender/blockTags/API'
import htmlHTMLExample from './HTMLRender/blockTags/HTMLExample'
import markdownHTMLExample from './MarkdownRender/blockTags/HTMLExample'
import htmlBrowserCompatible from './HTMLRender/blockTags/BrowserCompatible'
import markdownBrowserCompatible from './MarkdownRender/blockTags/BrowserCompatible'
import htmlNpmInfo from './HTMLRender/blockTags/NpmInfo'
import markdownNpmInfo from './MarkdownRender/blockTags/NpmInfo'

class Plugin extends BasePlugin{
    constructor(){
        super()
        this.registerBlockNode('HTML', 'api', htmlAPI)
        this.registerBlockNode('HTML', 'html-example', htmlHTMLExample)
        this.registerBlockNode('HTML', 'browserCompatible', htmlBrowserCompatible)
        this.registerBlockNode('HTML', 'npmInfo', htmlNpmInfo)
        this.registerBlockNode('MARKDOWN', 'api', markdownAPI)
        this.registerBlockNode('MARKDOWN', 'html-example', markdownHTMLExample)
        this.registerBlockNode('MARKDOWN', 'browserCompatible', markdownBrowserCompatible)
        this.registerBlockNode('MARKDOWN', 'npmInfo', markdownNpmInfo)
        
    }
}

declare const module: {
    exports: any
}

module.exports = Plugin