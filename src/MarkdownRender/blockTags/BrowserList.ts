/**
 * Created by njz on 2018/6/18.
 */
import {BlockNode, MarkdownRender, jsxStr2Nodes} from "my-doc-jsx"
declare function require(name: string);

class browserList extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }
    render(render: MarkdownRender){
        const browserList = ['Android', 'Firefox', 'Chrome', 'IE', 'iPhone', 'Edge', 'Safari']
        
        browserList.filter(browser => this.props[browser] != null)
        
        let name = this.props.ie
        return render.renderBlockNodes(jsxStr2Nodes(`<table>
            <tr>
            ${
                browserList.map(browser=>`<th align="center">${ browser }</th>`).join('')
            }
            </tr>
            <tr>
            ${
                browserList.map(browser=>`<td align="center">${ this.props[browser] }</td>`).join('')
            }
            </tr>
        </table>`, render, null))
    }
}

export default browserList;

