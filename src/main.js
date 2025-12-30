import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import components from './components/UI';
import 'virtual:svg-icons-register';
// fonts
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

const app = createApp(App)
components.forEach(component =>{
	app.component(component.name, component)
})

app.mount('#app')
