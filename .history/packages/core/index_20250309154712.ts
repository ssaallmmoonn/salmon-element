import { makeInstaller } from '@salmon-element/utils';
import components from './components';
import './style.css';

const installer = makeInstaller(components);

export * from '@salmon-element/components';
export default installer;
