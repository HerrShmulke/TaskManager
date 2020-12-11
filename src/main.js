import { createApp } from 'vue';
import VClickOutside from './directives/v-click-outside.js';
import App from './App.vue';

const app = createApp(App);
app.directive('click-outside', VClickOutside);
app.mount('#app');
