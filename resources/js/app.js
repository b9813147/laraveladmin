require('./bootstrap');
import Vue     from "vue";
import vuetify from './plugins/vuetify';

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    vuetify
});
