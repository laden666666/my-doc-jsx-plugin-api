/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode, MarkdownRender } from "my-doc-jsx";
declare class HTMLExample extends BlockNode<MarkdownRender> {
    constructor(node: any);
    render(render: MarkdownRender): string;
}
export default HTMLExample;
