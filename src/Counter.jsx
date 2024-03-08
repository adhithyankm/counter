import React from 'react'

import { decrement, increment, reset } from './counterslice'
import { useDispatch, useSelector } from 'react-redux'






function Counter() {

  const count=useSelector((state)=>state.conunterReducer.value)

  const dispatch=useDispatch()

 

  return (

    <>

    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>

        <div style={{width:"500px"}} className='border rounded p-5 text-center m-auto mb-5'>

            <h1 className='text-danger' style={{fontSize:'80px'}}>{count}</h1>

            <div>
                <button onClick={()=>dispatch(increment())} className='btn btn-primary'>Increment</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger ms-5'>Rest</button>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning ms-5'>Decrement</button>
            </div>


        </div>

    </div>
    
    </>
  )
}

export default Counter