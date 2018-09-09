/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode, MarkdownRender } from "my-doc-jsx";
declare class Logo extends BlockNode<MarkdownRender> {
    constructor(node: any);
    render(render: MarkdownRender): Promise<string>;
}
export default Logo;
