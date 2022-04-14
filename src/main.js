import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import LongPress from './component/longpress.js'
createApp(App).use(store).use(router).mount('#app')