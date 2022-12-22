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

import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import { faUser } from '@fortawesome/free-regular-svg-icons'

import { faFileLines } from '@fortawesome/free-regular-svg-icons'

import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { faSignal } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faTwitter, faFacebookF, faLinkedin, faInstagram, faChevronDown, faArrowRightLong, faUser, faFileLines, faCheck, faArrowUpLong, faMagnifyingGlass, faCartShopping, faHeart, faSignal)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
