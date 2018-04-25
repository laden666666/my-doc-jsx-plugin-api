/**
 * @file 定义一些文档的基础类，如参数，函数
 */

export class Parameter{
    name: string
    required: boolean = true
    describe: string
    type: string
    default: string
}

export class FunctionDescribe{
    name: string
    describe: string
    inputParameters: Parameter[]
    outputParameters: Parameter
}