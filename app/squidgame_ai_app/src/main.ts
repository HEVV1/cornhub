// VUETIFY STYLES
import 'vuetify/styles'
// LOCAL STYLES
import '@/styles/scss/public.scss'

// VUE & VUETIFY
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


// TEMPLATE
import App from './App.vue'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
})

app.use(createPinia())
app.use(vuetify);

window.addEventListener('load', () => {
    app.mount('#app')
})


