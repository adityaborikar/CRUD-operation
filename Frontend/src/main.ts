import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes'
import App from './App.vue'
import axios from 'axios';
import './index.css'

    const router = createRouter({
        history: createWebHistory(),
        routes
    });

//for FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

createApp(App).use(router, axios).mount('#app')
