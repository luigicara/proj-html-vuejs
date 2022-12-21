import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter, faFacebookF, faLinkedin, faInstagram, faChevronDown)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
