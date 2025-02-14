
import {useDispatch, useSelector} from 'react-redux'
import { increaseCount, decreaseCount } from "../store"
import { useState } from 'react';


export const Counter = () => {

    const [step, setStep] = useState(0);

    const counts = useSelector((state) => state.counter);

    console.log('rendering ');
    
    const dispatch = useDispatch() 

    function handleIncrease(stepCount){
        dispatch(increaseCount(stepCount))
    }



    return (
        <>
            <h1>Counter App</h1>

            <p>{counts}</p>

            <input 
            type="number"
            max="20"
            
            value={step}
            onChange={(e)=>setStep(parseInt(e.target.value))}
            />

            <button
                onClick={()=>handleIncrease(step)}
            >Increase (+)</button>

            <button
            onClick={()=>dispatch(decreaseCount(step))}
            >Decrease (-)</button>
        </>
    )    
}