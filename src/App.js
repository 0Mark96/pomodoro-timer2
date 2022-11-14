import { useEffect, useState } from "react";
import alarm from './assets/audio/alarm.mp3'
import style from './App.module.scss'

//component
import Timer from "./Component/Timer/Timer";
import TimerControl from "./Component/TimerControl/TimerControl";
import Setting from "./Component/Setting/Setting";
import BtnOpenSet from "./Component/BtnOpenSet/BtnOpenSet";
import InfoTimer from "./Component/InfoTimer/InfoTimer";

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
        new Audio(alarm).play()
      } else if(timer <= 0 && !onSession){
        setTimer(sessionLength)
        setOnSession(true)
        new Audio(alarm).play()
      }
  },[timer,breakLength,sessionLength,onSession])


  return (
    <div className="App">
      
      <main className={style.main_content} onClick={()=>{if(openSetting){setOpenSetting(false)}}}>
          <BtnOpenSet setOpenSetting={setOpenSetting}/>
          <Timer timer={timer} onSession={onSession} breakLength={breakLength} sessionLength={sessionLength}/>
          <TimerControl setTimer={setTimer} sessionLength={sessionLength} setOnSession={setOnSession}/> 
          <InfoTimer breakLength={breakLength} sessionLength={sessionLength}/>  
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
