import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf, faPhone , faAt } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add (faGithub, faLinkedin, faFilePdf, faPhone, faAt)

//VueLightBox
import VueEasyLightbox from 'vue-easy-lightbox'

//global CSS
import './assets/global.css'


createApp(App)
    .use(router)
    .use(VueEasyLightbox)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
