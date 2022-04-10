require('./bootstrap');
import Vue     from "vue";
import i18n    from './lang/index'
import vuetify from './plugins/vuetify';
import store   from './store/index'

Vue.component('LoginComponent', require('./components/LoginComponent').default);
Vue.component('UserComponent', require('./components/admin/UserComponent').default);
Vue.component('EmailComponent', require('./components/EmailComponent').default);
Vue.component('ResetPasswordComponent', require('./components/ResetPasswordComponent').default);

const app = new Vue({
    el: '#app',
    vuetify,
    i18n,
    store,

    data   : () => ({
        drawer          : null,
        drawerRight     : false,
        editingUser     : false,
        logoutLoading   : false,
        changingPassword: false,
        updatingUser    : false,
        langs           : [],
        userMenus       : [],
        appMenus        : []
    }),
    methods: {
        async handleUserActions(item) {
            // this.menuItem = item.title;
            console.log(item)
            if (item.link === 'logout') {
                await axios.post('/logout')
                    .then((response) => {
                        if (response.status === 204) {
                            window.location.replace('login');
                        }
                        console.log(response);
                    })
                    .catch((error) => {
                        console.log(error.response);
                    })
            }
            return window.location.replace(item.link);
        },
        // setLang(lang) {
        //     // 設定後端語系
        //     axios.get('/api/lang/setLocal', {
        //         params: {
        //             lang: lang
        //         }
        //     }).then((resource) => {
        //         if (resource.status === 200) {
        //             localStorage.setItem('local', lang);
        //         }
        //     });
        //     return window.location = location.pathname;
        // },
        // async getLang() {
        //     await axios.get('/api/lang/getLocal')
        //         .then((resource) => {
        //             if (resource.status === 200) {
        //                 localStorage.setItem('local', resource.data.lang)
        //                 return this.$i18n.locale = resource.data.lang
        //             }
        //         });
        // }
    },
    mounted() {
        this.appMenus = [
            // {icon: 'mdi-view-dashboard', text: '儀表版', href: '/'},
            // {icon: 'mdi-cogs', text: '系統設定', href: '/Settings'},
            {icon: 'mdi-account', text: this.$t('users.manage'), href: '/admin'},
        ];
        this.langs = [
            {text: '繁體', value: 'zh-TW'},
            {text: 'English', value: 'en-US'},
        ]
        this.userMenus = [
            {icon: 'bubble_chart', title: this.$t('common.logout'), link: 'logout'},
            {icon: 'bubble_chart', title: this.$t('common.reset_password'), link: '/password/reset'}
        ];
    }

});
// window.vue = app;
