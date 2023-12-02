/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import MyHeader from './components/MyHeader.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

app.component('Header', MyHeader)

registerPlugins(app)

app.mount('#app')
