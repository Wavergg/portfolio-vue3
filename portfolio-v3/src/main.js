import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//global CSS
import './assets/global.css'

createApp(App).use(router).mount('#app')
