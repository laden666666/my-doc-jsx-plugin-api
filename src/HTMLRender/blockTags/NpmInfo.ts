/**
 * Created by njz on 2018/6/18.
 */
import {BlockNode, HTMLRender} from "my-doc-jsx"
declare function require(name: string);

class NpmInfo extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        let name = this.props.name
        return `<p align="center">
            ${this.props.version ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/v/${name}.svg" alt="Version"></a>` : ''}
            ${this.props.downloads ? `<a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/dm/${name}.svg" alt="Downloads">` : ''}
            ${this.props.license ? `a href="https://www.npmjs.com/package/${name}"><img src="https://img.shields.io/npm/l/${name}.svg" alt="License"></a>` : ''}
        </p>`
    }
}

export default NpmInfo;

