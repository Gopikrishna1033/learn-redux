import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { inAction,deAction } from '../Product_redux/Products/Product.action'
function Products() {

    let dispatch = useDispatch()

    let product = useSelector((state)=>{
        return state
    })

    let inHandler = ()=>{
        dispatch(inAction())
    }

    let deHandler = ()=>{
        dispatch(deAction())
    }

  return (
    
    <div>
        <div className="container">
            <div className="row">
                <table>
                    <thead>
                        <th>Name</th>
                        <th>image</th>
                        <th>Qty</th>
                        <th>price</th>
                    </thead>
                </table>
            </div>
        </div>
        <pre>{JSON.stringify(product)}</pre>
        <h3>Product Component</h3>
        <button onClick={deHandler}>-</button>{1}
        <button onClick={inHandler}>+</button>
    </div>
  )
}

export default Products