/**
 * Created by njz on 2018/6/18.
 */
import { BlockNode, HTMLRender } from "my-doc-jsx";
declare class BrowserList extends BlockNode<HTMLRender> {
    constructor(node: any);
    renderTd(versionInfo: string | boolean): string;
    renderTh(browserName: string): string;
    render(render: HTMLRender): Promise<string>;
}
export default BrowserList;
