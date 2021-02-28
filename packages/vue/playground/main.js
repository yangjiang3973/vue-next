import { createApp, h } from '../dist/vue.runtime.esm-browser.js'

const app = createApp({
  data() {
    return {
      title: 'hello'
    }
  },
  render() {
    return <span>{this.title}</span>
  }
})

// do some necessary preparations
app.mount('#app')
