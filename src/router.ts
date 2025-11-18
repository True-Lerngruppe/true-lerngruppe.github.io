import { createWebHashHistory, createRouter } from 'vue-router'
import SvgToSvgConverter from './components/SvgToSvgConverter.vue'
import FunnySomething from './components/BouncyButton.vue'
import SteakHolder from './components/SteakHolder.vue'
import MainPage from './components/MainPage.vue'
import LsdTrip from './components/LsdTrip.vue'
import EscapeRoom from './components/EscapeRoom.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/funny_something', component: FunnySomething },
  { path: '/svg_converter', component: SvgToSvgConverter },
  { path: '/impressum', component: SteakHolder },
  { path: '/trippy', component: LsdTrip },
  { path: '/escape_room', component: EscapeRoom },

  // redirect to default route on unknown paths
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
})
