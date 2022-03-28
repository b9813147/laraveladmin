import Vue     from 'vue'
import VueI18n from 'vue-i18n'
import TW      from './zh-Tw'
import EN      from './en-Us'

Vue.use(VueI18n);


// 自動偵測瀏覽器語言
const defaultLang = navigator.language;
if (!localStorage.getItem('local')) {
    switch (defaultLang) {
        case 'en-US':
            localStorage.setItem('local', 'en-US');
            break;
        default:
            localStorage.setItem('local', 'zh-TW');
            break;
    }
}

// console.log(localStorage.getItem('local'));

/*todo 自動偵測多語系 */
const messages = {
    "zh-TW": TW,
    "en-US": EN,
};


const i18n = new VueI18n({
    locale: localStorage.getItem('local'),
    messages
});

export default i18n;
