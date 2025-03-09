import { makeInstaller } from '@salmon-element/utils';
import components from './components';
import '@salmon-element/theme/';

const installer = makeInstaller(components);

export * from '@salmon-element/components';
export default installer;
