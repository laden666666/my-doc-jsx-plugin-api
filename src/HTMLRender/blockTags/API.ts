/**
 * Created by njz on 2017/3/26.
 */
import {BlockNode, HTMLRender} from "my-doc-jsx"
declare function require(name: string);

let style = require('./API.css')

//查找参数的正则
const paramRegex = /@param\s+({.*})?(\s+\S+)?(\s+.*)?$/

//查找返回值的正则
const returnRegex = /@return\s+({.*})?(\s+.*)?$/

class API extends BlockNode<HTMLRender>{
    constructor(node){
        super(node)
        this.priority = 0;
    }

    render(render: HTMLRender){
        render.setStyle('api', style)
        let str = render.renderInlineNodes(this.childPseudoNodes)

        //将注释代码以“*”分割，因为每个个“*”是一行
        let rows = str.split("*").map(str=>str.trim()).filter(str=> str != '<br/>')

        //获取全部描述文本，描述文本是不以@开头的所有文本
        let describeText = rows.filter(str=> str[0] != '@').join('\n')

        //参数
        let paramsText = rows.filter(str => paramRegex.test(str)).map(str=>{
            var paramInfo = paramRegex.exec(str).slice(1, 4).map(str=>str && str.trim());
            return {
                name: paramInfo[1],
                type: paramInfo[0] && /{(.*)}/.exec(paramInfo[0])[1],
                describe: paramInfo[2]
            }
        })

        //返回值
        let returnText = rows.filter(str => returnRegex.test(str)).map(str=>{
            var paramInfo = returnRegex.exec(str).slice(1, 3).map(str=>str && str.trim());
            return {
                type: paramInfo[0] && /{(.*)}/.exec(paramInfo[0])[1],
                describe: paramInfo[1]
            }
        })[0]

        var html =
            `<div class="mydoc_api">
                <div class="mydoc_api_describe">${describeText}</div>
                <div class="mydoc_api_content">
                    
                    ${paramsText.length ? `
                    <p>参数</p>
                    <table class="mydoc_api_table">
                        <tr>
                            <th>参数名</th><th>参数类型</th><th>参数说明</th>
                        </tr>
                        ${paramsText.map(param=>{
                        return `<tr>
                            <td>${param.name || ''}</td><td>${param.type || ''}</td><td>${param.describe || ''}</td>
                        </tr>`
                        }).join('')}
                    </table>
                    ` : ''}
                    
                    ${returnText ? `
                    <p>返回值</p>
                    <table class="mydoc_api_table">
                        <tr>
                            <th>参数类型</th><th>参数说明</th>
                        </tr>
                        <tr>
                            <td>${returnText.type || ''}</td><td>${returnText.describe || ''}</td>
                        </tr>
                    </table>
                    ` : ''}
                </div>
            </div>`;

        return html
    }
}

export default API;