import { createApp } from 'vue';
import App from './App.vue';

// 测试
import SalmonElement, { zhCn } from 'salmon-element';

// 引入样式
import 'salmon-element/dist/index.css';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(SalmonElement, { locale: zhCn });
app.mount('#app');
