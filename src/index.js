import docjsx from "my-doc-jsx"
import htmlAPI from './HTMLRender/blockTags/API'
import markdownAPI from './MarkdownRender/blockTags/API'

class Plugin extends docjsx.BasePlugin{
    constructor(...arg){
        super(...arg)
        this.$registerBlockTag('HTML', 'api' ,htmlAPI)
        this.$registerBlockTag('MARKDOWN', 'api' ,markdownAPI)
    }
}

module.exports = Plugin