/**
 * Created by njz on 2018/6/18.
 */
import {BlockNode, HTMLRender} from "my-doc-jsx"
declare function require(name: string);
var style = require('./NpmInfo.css') 

class NpmInfo extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        render.setStyle('npm-info', style)
        let name = this.props.name
        if(name == null || name === ''){
            console.warn(`NpmInfo is missing the name attribute`)
            return ''
        } else {
            return `<p class="mydoc_api_npm-info" align="center">
                ${this.props.version ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/v/${name}.svg" alt="Version"></a>` : ''}
                ${this.props.downloads ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/dm/${name}.svg" alt="Downloads"></a>` : ''}
                ${this.props.license ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/l/${name}.svg" alt="License"></a>` : ''}
            </p>`
        }
    }
}

export default NpmInfo;

