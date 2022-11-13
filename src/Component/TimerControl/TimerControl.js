import { useState } from "react"
//Component
import BtnPlayStop from "./BtnPlayStop/BtnPlayStop"
import BtnReset from "./BtnReset/BtnReset"

const TimerControl = ({setTimer,sessionLength,setOnSession}) => {
    const [intervalId,setIntervalId] = useState(0)

    const controlTimer = () => {
      if(intervalId){
        clearInterval(intervalId)
        setIntervalId(0)
        return
      }
      const newInterval = setInterval(()=>{
          setTimer(prev => prev - 1)
      },200)
      setIntervalId(newInterval)
    }
    
    const reset = ()=>{
      clearInterval(intervalId)
      setIntervalId(0)
      setTimer(sessionLength)
      setOnSession(true)
    }
    
  return (
    <div>
        <BtnPlayStop controlTimer={controlTimer} intervalId={intervalId}/>
        <BtnReset reset={reset}/>
    </div>
  )
}

export default TimerControl