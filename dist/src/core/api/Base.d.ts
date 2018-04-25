/**
 * @file 定义一些文档的基础类，如参数，函数
 */
export declare class Parameter {
    name: string;
    required: boolean;
    describe: string;
    type: string;
    default: string;
}
export declare class FunctionDescribe {
    name: string;
    describe: string;
    inputParameters: Parameter[];
    outputParameters: Parameter;
}
