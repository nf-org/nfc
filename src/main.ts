import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import naive from 'naive-ui';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'element-plus/dist/index.css';

const app = createApp(App);
Object.entries(ElementPlusIconsVue)
    .forEach((key, component) => {
        // @ts-ignore
        app.component(key, component);
    });

app
    .use(store)
    .use(router)
    .use(naive)
    .use(VueCookies)
    .use(ElementPlus)
    .mount('#app');
