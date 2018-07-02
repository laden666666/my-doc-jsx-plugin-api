/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode, MarkdownRender} from "my-doc-jsx"
declare function require(name: string);
class NpmInfo extends BlockNode<MarkdownRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: MarkdownRender){
        let name = this.props.name
        return `<p class="mydoc_api_npm-info" align="center">
            ${this.props.version ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/v/${name}.svg" alt="Version"></a>` : ''}
            ${this.props.downloads ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/dm/${name}.svg" alt="Downloads"></a>` : ''}
            ${this.props.license ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/l/${name}.svg" alt="License"></a>` : ''}
        </p>`
    }
}

export default NpmInfo;

