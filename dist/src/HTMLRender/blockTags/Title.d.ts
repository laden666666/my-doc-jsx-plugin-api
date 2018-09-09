/**
 * Created by njz on 2018/6/18.
 */
import { BlockNode, HTMLRender } from "my-doc-jsx";
declare class Title extends BlockNode<HTMLRender> {
    constructor(node: any);
    render(render: HTMLRender): Promise<string>;
}
export default Title;
