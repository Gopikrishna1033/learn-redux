import Products from "./Products/Products"
import { Provider } from "react-redux"
import { store } from "./Product_redux/Store"
let App = ()=>{

  return <div>
    <Provider store = {store}>
      {/* <h3>App Component</h3>
    <hr /> */}
    <Products/>
    </Provider>
    
  </div>
}
export default App