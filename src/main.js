import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import {store} from "./store/store.js";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {IoCloseCircleOutline, RiSearchEyeLine } from "oh-vue-icons/icons";

addIcons(IoCloseCircleOutline, RiSearchEyeLine);

createApp(App).use(store).component("v-icon", OhVueIcon).mount('#app')
