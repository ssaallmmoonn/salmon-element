// 该hooks文件的目的：
// 1）开始打包之前，我们把之前的打包产物清理掉
// 2）打包后，再做一些别的操作

import { each, isFunction } from 'lodash-es';
import shell from 'shelljs';

export default function hooksPlugin({
	rmFiles = [],
	beforeBuild,
	afterBuild,
}: {
	rmFiles?: string[];
	beforeBuild?: Function;
	afterBuild?: Function;
    }) {
    return {
        name: 'hooks-plugin',
        buildStart() {
            each(rmFiles,(fName) => shell.rm('-rf',fName));
        }
    }
}
