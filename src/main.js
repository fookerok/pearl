import { createApp } from 'vue'
import App from './App.vue'
import { registerUI } from './scripts/app'

const app = createApp(App)
registerUI(app)
app.mount('#app')
