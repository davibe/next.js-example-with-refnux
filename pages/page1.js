import { Provider, connect } from 'refnux'
import Link from 'next/link'

import getStore from '../store/getStore'
import counterIncrement from '../store/counterIncrement'

const Index = connect(
  (state, dispatch) =>
    <div>
      <h3>Page 1</h3>
      <p>Current state: {JSON.stringify(state, null, 2)}</p>
      <button onClick={() => dispatch(counterIncrement)} >Increment</button>
      <Link href="/page2"><button>go to page 2</button></Link>
    </div>
)

const App = () => <Provider store={getStore()} app={Index} />

export default App