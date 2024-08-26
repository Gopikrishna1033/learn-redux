import React from 'react'
import Message from './Messages/Message'
import { store } from './redux/Store'
import { Provider } from 'react-redux'
function App(){



  return  <div>
 
  <Provider store={store}>
    <h1>App Component</h1>
    <hr />
    <Message/>
  </Provider>
</div>


}



export default App