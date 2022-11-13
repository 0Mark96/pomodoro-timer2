import { useEffect, useState } from "react";
import breakAudio from './assets/audio/breakAudio.mp3'
import sessionAudio from './assets/audio/sessionAudio.mp3'

//component
import Timer from "./Component/Timer/Timer";
import TimerControl from "./Component/TimerControl/TimerControl";
import Setting from "./Component/Setting/Setting";


function App() {
  const [timer,setTimer]=useState(2 * 60)
  
  const [sessionLength,setSessionLength] = useState(2 * 60) 
  const [breakLength,setBreakLength] = useState(1 * 60)
  const [onSession,setOnSession] = useState(true)

  const [openSetting,setOpenSetting] = useState(false)

  useEffect(()=>{
    setTimer(sessionLength)
    setOnSession(true)
   },[sessionLength])

  // toggle timer when 0
  useEffect(()=>{
      if(timer <= 0 && onSession){
        setTimer(breakLength)
        setOnSession(false)
        new Audio(breakAudio).play()
      } else if(timer <= 0 && !onSession){
        setTimer(sessionLength)
        setOnSession(true)
        new Audio(sessionAudio).play()
      }
  },[timer,breakLength,sessionLength,onSession])



  return (
    <div className="App">
      
      <main onClick={()=>{if(openSetting){setOpenSetting(false)}}}>
          <button onClick={()=>setOpenSetting(true)}>open</button>
          <Timer timer={timer} onSession={onSession} breakLength={breakLength} sessionLength={sessionLength}/>
          <TimerControl setTimer={setTimer} sessionLength={sessionLength} setOnSession={setOnSession}/>   
      </main>
     
      <Setting sessionLength={sessionLength} 
               breakLength={breakLength}
               setSessionLength={setSessionLength}
               setBreakLength={setBreakLength}
               setTimer={setTimer}
               openSetting={openSetting}
               />
    </div>
  );
}

export default App;
