//Create Actions
let INCR = 'INCR'
let DECR = 'DECR'
//create actions
let inAction = ()=>{
    return {type:INCR}
}

let deAction = ()=>{
    return {type:DECR}
}
export {inAction,deAction,INCR,DECR}