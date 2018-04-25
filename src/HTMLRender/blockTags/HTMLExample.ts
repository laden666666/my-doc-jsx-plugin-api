/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode, HTMLRender, jsxStr2Nodes} from "my-doc-jsx"
declare function require(name: string);

let style = require('./HTMLExample.css')

class HTMLExample extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        render.setStyle('htmlExample', style)
        var srcdoc = ('<!DOCTYPE html>\n' + this.childPseudoNodes[0].getText() || '')
        return `
<div class="mydoc_api_htmlExample">
    <iframe class="mydoc_api_htmlExample_iframe" ${this.props.height != null ? `height="${this.props.height}"` : ''} 
        ${this.props.width != null ? `width="${this.props.width}"` : ''}    
        srcdoc="${ srcdoc.replace(/\"/g, '&#34;') }"></iframe>
    <div class="mydoc_api_htmlExample_tip">Your browser does not support the srcdoc attribute in the iframe. Or CSP prohibits the use of iframes.</div>
    <details>
        <summary>view code</summary>
        <p>
${
            render.renderBlockNodes(jsxStr2Nodes(`<code>{\`${srcdoc}\`}</code>`, render, {}))
}</p>
        </details>
    </div>
`
    }
}

export default HTMLExample;