require('./bootstrap');
import Vue     from "vue";
import vuetify from './plugins/vuetify';

Vue.component('login-component', require('./components/Login').default);

const app = new Vue({
    el     : '#app',
    vuetify,
    data   : () => ({
        drawer          : null,
        drawerRight     : false,
        editingUser     : false,
        logoutLoading   : false,
        changingPassword: false,
        updatingUser    : false,
        langs           : [{text: '繁體', value: 'zh-TW'}, {text: 'English', value: 'en-US'}, {text: '简体', value: 'zh-CN'}],
        userMenus       : [
            {icon: 'bubble_chart', title: 'Logout', link: 'login'},
            {icon: 'bubble_chart', title: 'Change Password', link: 'changepassword'}
        ],
        appMenus        : [
            // {icon: 'mdi-view-dashboard', text: '儀表版', href: '/'},
            // {icon: 'mdi-cogs', text: '系統設定', href: '/Settings'},
            {icon: 'mdi-account', text: '成員管理', href: 'user'},
        ]
    }),
    methods: {
        async handleUserActions(item) {
            this.menuItem = item.title;
            if (item.title === 'Logout') {
                await axios.post('logout')
                    .then((response) => {
                        console.log(response);
                        // window.location.replace(item.link);
                    })
                    .catch((error) => {
                        console.log(error.response);
                    })
            }
            window.location.replace(item.link);
        }

    }

});
window.vue = app;
