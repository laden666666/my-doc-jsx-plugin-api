/**
 * Created by njz on 2018/6/18.
 */
import { BlockNode, MarkdownRender } from "my-doc-jsx";
declare class browserList extends BlockNode<MarkdownRender> {
    constructor(node: any);
    render(render: MarkdownRender): string;
}
export default browserList;
