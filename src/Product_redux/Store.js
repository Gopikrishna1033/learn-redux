import { createStore } from "redux";
import { productReducer } from "./Products/Product.reducer";
import {composeWithDevTools} from "@redux-devtools/extension"

let store = createStore(productReducer,composeWithDevTools())
export {store}