import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/main.scss';

// PrimeVue imports (fixed)
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css';

// AOS (Animate On Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// PrimeVue components
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Divider from 'primevue/divider';

const app = createApp(App);

app.use(PrimeVue, { ripple: true });
app.use(router);

// Register PrimeVue components
app.component('Button', Button);
app.component('Card', Card);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('Divider', Divider);

app.mount('#app');