import { makeInstaller } from '@salmon-element/utils';
import components from './components';
import '@salmon-element/theme/index.css';

// 引入Button组件要用到icon包
import { type Library } from '@fortawesome/fontawesome-svg-core';
importt {fas} from 

const installer = makeInstaller(components);

export * from '@salmon-element/components';
export default installer;
