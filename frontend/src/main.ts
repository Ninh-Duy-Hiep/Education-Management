import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';


const app = createApp(App);

app.use(router);  // Sử dụng Vue Router
app.mount('#app');
