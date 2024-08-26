import {Gm,Ge} from './Message.action'

let initialState={
    msg:"Hello"
}

let messageReducer  = (state=initialState,action)=>{
    console.log(action.type)

switch(action.type){
    case 'GM':
        return  { msg:"Good Monring"}
    case 'GE':
        return { msg:"Good Evening"}
    default:
        return state
}


}
export {messageReducer}

