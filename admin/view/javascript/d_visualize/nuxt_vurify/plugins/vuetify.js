import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import '@/assets/fortawesome/awesome/all.min.css'
import '@/assets/fortawesome/awesome/v4-shims.min.css'
Vue.use(Vuetify, {
  theme: {
    primary: '#7199ff', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  },
  iconfont: 'fa'
})
