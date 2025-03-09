import type { App, Plugin } from 'vue';
import { each } from 'lodash-es';

type SFCWithInstall<T> = T & 