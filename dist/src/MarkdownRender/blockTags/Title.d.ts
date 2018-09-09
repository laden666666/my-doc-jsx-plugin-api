/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode, MarkdownRender } from "my-doc-jsx";
declare class NpmInfo extends BlockNode<MarkdownRender> {
    constructor(node: any);
    render(render: MarkdownRender): Promise<string>;
}
export default NpmInfo;
