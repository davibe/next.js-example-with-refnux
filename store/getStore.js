import { createStore } from 'refnux'

const storeInitialState = { counter: 0, key: 'value' }

let storeMemoized = null

const getStore = () => {
  let store = null
  if (typeof window == 'undefined') {
    store = createStore(storeInitialState)
  } else {
    if (!storeMemoized) {
      storeMemoized = createStore(storeInitialState)
    }
    store = storeMemoized
  }
  return store
}

export default getStore