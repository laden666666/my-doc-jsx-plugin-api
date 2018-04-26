import {BasePlugin} from "my-doc-jsx"
import htmlAPI from './HTMLRender/blockTags/API'
import markdownAPI from './MarkdownRender/blockTags/API'
import htmlHTMLExample from './HTMLRender/blockTags/HTMLExample'
import markdownHTMLExample from './MarkdownRender/blockTags/HTMLExample'

class Plugin extends BasePlugin{
    constructor(){
        super()
        this.registerBlockNode('HTML', 'api', htmlAPI)
        this.registerBlockNode('HTML', 'html-example', htmlHTMLExample)
        this.registerBlockNode('MARKDOWN', 'api', markdownAPI)
        this.registerBlockNode('MARKDOWN', 'html-example', htmlHTMLExample)
        
    }
}

declare const module: {
    exports: any
}

module.exports = Plugin