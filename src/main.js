import {createApp} from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import {repo} from "@/store/store";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

const app = createApp(App);
app.use(Vuex);
app.use(repo);
app.mount('#app');
