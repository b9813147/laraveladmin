require('./bootstrap');
import Vue     from "vue";
import vuetify from './plugins/vuetify';

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('login-button', require('./components/LoginButtonComponent.vue').default);
Vue.component('register-button', require('./components/RegisterButtonComponent.vue').default);
Vue.component('remember-password', require('./components/RememberPasswordComponent.vue').default);
Vue.component('reset-password', require('./components/ResetPasswordComponent.vue').default);
Vue.component('snackbar', require('./components/SnackBarComponent.vue').default);
Vue.component('gravatar', require('./components/GravatarComponent.vue').default);


import store          from './store'
import * as actions   from './store/action-types'
import * as mutations from './store/mutation-types'

import {mapGetters} from 'vuex'
import withSnackbar from './components/mixins/withSnackbar'

if (window.user) {
    store.commit(mutations.USER, user)
    store.commit(mutations.LOGGED, true)
}
const app = new Vue({
    el      : '#app',
    vuetify,
    store,
    mixins  : [withSnackbar],
    data    : () => ({
        drawer          : null,
        drawerRight     : false,
        editingUser     : false,
        logoutLoading   : false,
        changingPassword: false,
        updatingUser    : false,
        langs           : [{text: '繁體', value: 'zh-TW'}, {text: 'English', value: 'en-US'}, {text: '简体', value: 'zh-CN'}],
        // items           : [
        //     {icon: 'home', text: 'Home', href: '/home'},
        //     {icon: 'home', text: 'Landing Page', href: '/'},
        //     {icon: 'settings', text: 'Settings'},
        //     {icon: 'chat_bubble', text: 'Contact'},
        //     {heading: 'Links'},
        //     {icon: 'link', text: 'Google', href: 'http://www.google.com'}
        //     // { heading: 'Administració', role: 'Manager' }
        // ]
    }),
    computed: {
        ...mapGetters({
            user: 'user'
        })
    },
    methods : {
        editUser() {
            this.editingUser = true
            this.$nextTick(this.$refs.email.focus)
        },
        updateUser() {
            this.updatingUser = true
            this.$store.dispatch(actions.UPDATE_USER, this.user).then(response => {
                this.showMessage('User modified ok!')
            }).catch(error => {
                console.dir(error)
                this.showError(error)
            }).then(() => {
                this.editingUser = false
                this.updatingUser = false
            })
        },
        updateEmail(email) {
            this.$store.commit(mutations.USER, {...this.user, email})
        },
        updateName(name) {
            this.$store.commit(mutations.USER, {...this.user, name})
        },
        toggleRightDrawer() {
            this.drawerRight = !this.drawerRight
        },
        checkRoles(item) {
            if (item.role) {
                return this.$store.getters.roles.find(function (role) {
                    return role == item.role // eslint-disable-line
                })
            }
            return true
        },
        logout() {
            this.logoutLoading = true
            this.$store.dispatch(actions.LOGOUT).then(response => {
                window.location = '/'
            }).catch(error => {
                console.log(error)
            }).then(() => {
                this.logoutLoading = false
            })
        },
        menuItemSelected(item) {
            if (item.href) {
                if (item.new) {
                    window.open(item.href)
                } else {
                    window.location.href = item.href
                }
            }
        },
        changePassword() {
            this.changingPassword = true
            this.$store.dispatch(actions.REMEMBER_PASSWORD, this.user.email).then(response => {
                this.showMessage(`Email sent to change password`)
            }).catch(error => {
                console.dir(error)
                this.showError(error)
            }).then(() => {
                this.changingPassword = false
            })
        }
    },
    mounted() {
        console.log(this.$store.state.auth.logged)

    }
});
window.vue = app;
