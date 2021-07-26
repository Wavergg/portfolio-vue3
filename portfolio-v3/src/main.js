import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub  } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add (faGithub)
library.add (faLinkedin)
library.add (faFilePdf)

//global CSS
import './assets/global.css'

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
