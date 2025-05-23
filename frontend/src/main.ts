import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import { setupFontAwesome } from './plugins/icon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

setupFontAwesome()
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router);
app.mount('#app');
