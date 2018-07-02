/**
 * Created by njz on 2018/6/18.
 */
import {BlockNode, HTMLRender, jsxStr2Nodes} from "my-doc-jsx"
declare function require(name: string);

class browserList extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }
    render(render: HTMLRender){
        const browserList = Object.keys(this.props)
        
        browserList.filter(browser => this.props[browser] != null)
        
        return render.renderBlockNodes(jsxStr2Nodes(`<table>
            <tr>
            ${
                browserList.map(browser=>`<th align="center">${ browser }</th>`).join('')
            }
            </tr>
            <tr>
            ${
                browserList.map(browser=>`<td align="center">${ this.props[browser] === true ? '√' : this.props[browser] }</td>`).join('')
            }
            </tr>
        </table>`, render, null))
    }
}

export default browserList;

