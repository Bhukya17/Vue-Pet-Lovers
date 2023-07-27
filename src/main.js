import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab} from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/pro-regular-svg-icons'
import infiniteScroll from "vue-infinite-scroll";
// import InfiniteLoading from "vue-infinite-loading";

library.add(fas, fab,)



createApp(App)
.use(infiniteScroll)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount("#app");

