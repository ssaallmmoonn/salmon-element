import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';

//定义类型：一个带有安装功能的单文件组件
//表示 SFCWithInstall 是组件类型 T 和 Plugin 的组合。这意味着 SFCWithInstall 类型的组件既可以作为普通的 Vue 组件使用，也可以作为插件安装到 Vue 应用中。
type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
	const installer = (app: App) => {
		return each(components, c => app.use(c));
	};

	return installer;
}

export const withInstall = <T>(component: T) => {
    
}