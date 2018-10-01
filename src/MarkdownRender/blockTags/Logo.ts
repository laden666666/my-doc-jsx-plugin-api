/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode, MarkdownRender} from "my-doc-jsx"
class Logo extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    async render(render: MarkdownRender){
        var str = `<p align="center"><img width="100" src="${this.props.src}" alt="${this.props.alt ? '' : this.props.alt}"></p>
`;
        return str;
    }
}

export default Logo;

