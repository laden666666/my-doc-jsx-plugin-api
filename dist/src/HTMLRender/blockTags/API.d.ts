/**
 * Created by njz on 2017/3/26.
 */
import { BlockNode, HTMLRender } from "my-doc-jsx";
declare class API extends BlockNode<HTMLRender> {
    constructor(node: any);
    render(render: HTMLRender): Promise<string>;
}
export default API;
