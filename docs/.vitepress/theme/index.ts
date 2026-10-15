import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import SubscriptionList from './components/SubscriptionList.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('SubscriptionList', SubscriptionList)
  },
} satisfies Theme
