import makeInstaller from './makeInstaller';
import components from './components';
import '@salmon-element/theme/index.css';

// 引入Button组件要用到icon包
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// 引入printLogo
import printLogo from './printLogo';
printLogo();

const installer = makeInstaller(components);

export * from '@salmon-element/components';
export * from '@salmon'
export default installer;
