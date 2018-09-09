/**
 * Created by njz on 2018/6/18.
 */
import { BlockNode, MarkdownRender } from "my-doc-jsx";
declare class BrowserList extends BlockNode<MarkdownRender> {
    constructor(node: any);
    renderTd(versionInfo: string | boolean): string;
    renderTh(browserName: string): string;
    render(render: MarkdownRender): Promise<string>;
}
export default BrowserList;
