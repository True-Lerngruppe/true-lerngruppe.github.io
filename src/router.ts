import { createWebHistory, createRouter } from 'vue-router'
import SvgToSvgConverter from './components/SvgToSvgConverter.vue'
import FunnySomething from './components/BouncyButton.vue'

const routes = [
  { path: '/funny_something', component: FunnySomething },
  { path: '/svg_converter', component: SvgToSvgConverter },
]

export const router = createRouter({
  routes,
  history: createWebHistory(),
})
