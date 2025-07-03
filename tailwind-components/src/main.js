import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'
import 'swiper/css'

import App from './App.vue'
import router from './router'

register()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
