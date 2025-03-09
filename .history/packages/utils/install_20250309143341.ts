import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';

//定义类型：一个带有安装功能的单文件组件
//
type SFCWithInstall<T> = T & Plugin;
