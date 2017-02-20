import { Provider} from 'refnux'

import getStore from './getStore'

const withRefnux = (getInitialState, Component) => {

  const Wrapper = (props) => {
    var store = props.store
    // if getInitialProps was executed on the server we get a store
    // that's missing non-serializable functions.
    // Because of this we need to recreate the store based on the 
    // state coming from the server.
    if (!store.dispatch) {
      store = getStore(props.store.state)
    }
    return <Provider
      store={store}
      app={() => <Component {...props.componentProps} />}
    />
  }

  Wrapper.getInitialProps = async function (context) {
    const store = getStore(getInitialState())
    var componentProps = {}
    // honor wrapped component getInitialProps
    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps({ ...context, store })
    }
    return { store, componentProps }
  }

  return Wrapper
}


export default withRefnux