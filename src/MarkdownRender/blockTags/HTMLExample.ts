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
        return ``
    }
}

export default HTMLExample;