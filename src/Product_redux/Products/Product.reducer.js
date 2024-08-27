import {INCR,DECR} from "./Product.action"

let intialstate = {
    name:"Iphone",
    image:"https://tse1.mm.bing.net/th?id=OIP.AvmlYsG3aiIuVbz4H4czfwHaHa&pid=Api&P=0&h=180",
    qty:1,
    price:70000
    
}

let productReducer = (state=intialstate,action)=>{
    switch(action.type){
        case 'INCR':
            return {...state,qty:state.qty+1}
        case 'DECR':
            return {...state,qty:state.qty-1}
        default:
            return state
    }
}
export {productReducer}