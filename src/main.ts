import {createApp, defineComponent, DefineComponent} from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/styles.scss"

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faUsers,
    faUserPlus,
    faUserCheck,
    faJedi,
    faHeart,
    faLock,
    faBolt,
    faEye,
    faQuestionCircle,
    faArrowsUpDownLeftRight,
    faSackDollar,
    faWalkieTalkie,
    faPersonWalkingArrowLoopLeft,
    faWandMagic,
    faShield,
    faToolbox,
    faCloudBolt,
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faUsers,
    faUserPlus,
    faUserCheck,
    faJedi,
    faHeart,
    faLock,
    faBolt,
    faEye,
    faQuestionCircle,
    faArrowsUpDownLeftRight,
    faSackDollar,
    faWalkieTalkie,
    faPersonWalkingArrowLoopLeft,
    faWandMagic,
    faShield,
    faToolbox,
    faCloudBolt,
)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
