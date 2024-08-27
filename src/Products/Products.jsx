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
        <div className="container mt-5">
            <div className="row">
                <table className='table table-bordered'>
                    <thead className='bg-primary'>
                        <th>Name</th>
                        <th>image</th>
                        <th>Qty</th>
                        <th>price</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt="iphone" width={80} /></td>
                            <td><i class='bx bxs-minus-circle ' onClick={deHandler} style={{cursor:'pointer'}}></i>{product.qty}<i class='bx bxs-plus-circle' onClick={inHandler} style={{cursor:'pointer'}}></i></td>
                            <td>{(product.price*product.qty).toLocaleString('en-IN')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
{/*         <pre>{JSON.stringify(product)}</pre> */}
        {/* <h3>Product Component</h3>
        <button onClick={deHandler}>-</button>{1}
        <button onClick={inHandler}>+</button> */}
    </div>
  )
}

export default Products