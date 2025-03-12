import { makeInstaller } from '@salmon-element/utils';
import components from './components';
import '@salmon-element/theme/index.css';

// 引入Button组件要用到icon包
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// 引入

const installer = makeInstaller(components);

export * from '@salmon-element/components';
export default installer;
