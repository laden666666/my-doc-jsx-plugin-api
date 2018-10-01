/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode, MarkdownRender} from "my-doc-jsx"
class NpmInfo extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    async render(render: MarkdownRender){
        var str = `<h1 align="center">${await render.renderInlineNodes(this.childPseudoNodes)}</h1>
`;
        return str;
    }
}

export default NpmInfo;

