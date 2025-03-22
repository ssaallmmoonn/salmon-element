import type { App, Plugin } from 'vue';
//定义类型：一个带有安装功能的单文件组件
//表示 SFCWithInstall 是组件类型 T 和 Plugin 的组合。这意味着 SFCWithInstall 类型的组件既可以作为普通的 Vue 组件使用，也可以作为插件安装到 Vue 应用中。
type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(component: T) => {
	(component as SFCWithInstall<T>).install = (app: App) => {
		const name = (component as any).name;
		app.component(name, component as Plugin);
	};

	return component as SFCWithInstall<T>;
};

export const withInstallFunction = <T>(fn: T, name: string) => {
	(fn as SFCWithInstall<T>).install = (app: App) => {
		app.config.globalProperties[name] = fn;
	};
	return fn as SFCWithInstall<T>;
};


