import { createApp } from 'vue';
import App from './App.vue';

// 测试button
import SalmonElement from 'salmon-element';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(SalmonElement);
app.mount('#app');
