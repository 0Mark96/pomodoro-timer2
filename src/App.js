import { useEffect, useState } from "react";
import classnames from 'classnames'
import alarm from './assets/audio/alarm.mp3'
import style from './App.module.scss'

//component
import Timer from "./Component/Timer/Timer";
import TimerControl from "./Component/TimerControl/TimerControl";
import Setting from "./Component/Setting/Setting";
import BtnOpenSet from "./Component/BtnOpenSet/BtnOpenSet";
import InfoTimer from "./Component/InfoTimer/InfoTimer";



function App() {
  const [timer,setTimer]=useState(25 * 60)
  const [sessionLength,setSessionLength] = useState(25 * 60) 
  const [breakLength,setBreakLength] = useState(5 * 60)
  const [onSession,setOnSession] = useState(true)
  const [openSetting,setOpenSetting] = useState(false)

  //change timer when set session
  useEffect(()=>{
    if(onSession){
      setTimer(sessionLength)
    }

   },[sessionLength,onSession])

   useEffect(()=>{
   if(!onSession){
    setTimer(breakLength)
  }
   },[onSession,breakLength])

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
    <div className={style.app}>
      
      <main className={classnames(style.main_content,{[style.main_opacity]:openSetting})} 
            onClick={()=>{openSetting && setOpenSetting(false)}}>
        
          <BtnOpenSet setOpenSetting={setOpenSetting}/>
          
          <Timer timer={timer} 
                 onSession={onSession} 
                 breakLength={breakLength} 
                 sessionLength={sessionLength}/>
         
          <TimerControl sessionLength={sessionLength} 
                        setTimer={setTimer} 
                        setOnSession={setOnSession}/> 
         
          <InfoTimer breakLength={breakLength} 
                     sessionLength={sessionLength}/>  
      
      </main>
      
      <Setting sessionLength={sessionLength} 
               breakLength={breakLength} 
               setSessionLength={setSessionLength}
               setBreakLength={setBreakLength} 
               openSetting={openSetting} />
    </div>

  );
}

export default App;
