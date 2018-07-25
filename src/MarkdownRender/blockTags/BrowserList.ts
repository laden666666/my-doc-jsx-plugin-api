/**
 * Created by njz on 2018/6/18.
 */
import {BlockNode, MarkdownRender, jsxStr2Nodes} from "my-doc-jsx"
import browserList from './../../../dist/src/MarkdownRender/blockTags/browserList.d';
declare function require(name: string);

class BrowserList extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }
    
    renderTd(versionInfo: string | boolean){
        return `<td align="center" style="background-color: #60d848">${( versionInfo == true || versionInfo == 'true') ? '√' : versionInfo }</td>`
    }
    
    renderTh(browserName: string){
        return `<th align="center">${browserName}</td>`
    }

    async render(render: MarkdownRender){
        const browserList = Object.keys(this.props)
        
        browserList.filter(browser => this.props[browser] != null)
        
        return `<table cellspacing="1" style="margin: 0 auto;font-size: 14px;background-color: #f9f9f9;color: #036;padding: 3px;border-radius: 4px;border: 1px solid rgba(220, 220, 220, .5);">
    <colgroup width="100" span="${browserList.length}" align="center"></colgroup>
    <tr style="height: 30px;">
        ${browserList.map(browser=>this.renderTh(browser)).join('')}
    </tr>
    <tr style="color: #000;line-height: 28px;font-weight: bold;">
        ${browserList.map(browser=>this.renderTd( this.props[browser])).join('')}
    </tr>
</table>`
    }
}

export default BrowserList;

