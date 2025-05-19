// STYLES
import "primevue/resources/primevue.min.css";
import '@/styles/scss/public.scss'

// VUE LIBRARY
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import PrimeVue from 'primevue/config'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue, {ripple: true})


window.addEventListener('load', () => {
    app.mount('#app')
})
