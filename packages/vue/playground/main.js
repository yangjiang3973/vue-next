// import { reactive,
//   isReactive,
//   effect,
//   toRaw } from '../dist/vue.runtime.esm-browser.js'
import {
  reactive,
  isReactive,
  effect,
  toRaw
} from '../../reactivity/dist/reactivity.esm-browser'

const array = reactive([1])
let length = ''
effect(() => {
  length = ''
  for (const key in array) {
    length += key
  }
  console.log('effect')
})
// expect(length).toBe('0');
// console.log(length);
array.push(1)
// console.log(length);
// expect(length).toBe('01');
