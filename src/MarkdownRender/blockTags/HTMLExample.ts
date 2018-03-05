/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode, MarkdownRender} from "my-doc-jsx"
declare function require(name: string);


class HTMLExample extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: MarkdownRender){
        return `<iframe class="mydoc_api_htmlExample" ${this.props.height != null ? `height="${this.props.height}"` : ''} 
    ${this.props.width != null ? `width="${this.props.width}"` : ''}    
    srcdoc="${'<!DOCTYPE html>' + this.childPseudoNodes[0].getText().replace(/"/g, '\\"') || ''}"></iframe>`
    }
}

export default HTMLExample;