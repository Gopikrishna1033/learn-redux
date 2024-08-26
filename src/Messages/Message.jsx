import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {gmActions, geAction} from '../redux/Messages/Message.action'
const Message = () => {
  
  let dispatch = useDispatch()
    let message = useSelector((state)=>{
        return state
    })
  let gmHandler=()=>{
    dispatch(gmActions())
  }
  let geHanlder=()=>{
    dispatch(geAction())
  }
  return      <div>
                 <h2>Message Compononent</h2>
                 <pre>{JSON.stringify(message)}</pre>
                 <h3>Value:::::::{message.msg}</h3>
                  <button onClick={gmHandler}>GM</button>
                <button onClick={geHanlder}>GE</button>
            </div>
}

export default Message