import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ShowPlus from './directives/v-show-plus'
import Snapshot from './directives/v-snapshot'

createApp(App).use(ShowPlus).use(Snapshot).mount('#app')
