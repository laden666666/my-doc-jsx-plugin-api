/**
 * Created by njz on 2018/6/18.
 */
import {BlockNode, HTMLRender} from "my-doc-jsx"
declare function require(name: string);
var style = require('./Title.css') 

class Title extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    async render(render: HTMLRender){
        render.setStyle('title', style)
        var str =
            `<div class="mydoc_api_title">
                    <a class="mydoc_api_title_a">
                        <h2 class="mydoc_api_title_h2">${await render.renderInlineNodes(this.childPseudoNodes)}</h2>
                    </a>
                    <div class="mydoc_api_title_content">
                        ${await render.renderBlockNodes(this.childNodes)}
                    </div>
                </div>`;
        return str;
    }
}

export default Title;

