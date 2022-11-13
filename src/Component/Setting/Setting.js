
//component
import SetTime from "./SetTime/SetTime"
const Setting = ({sessionLength,breakLength,setSessionLength,setBreakLength,setOpenSetting,setTimer,openSetting}) => {
     
    
    const changeLength = (amount,type)=>{
   
        if(type === 'breakLength'){
          if (breakLength <= 60 && amount < 0){ 
            return 
          }
          setBreakLength(prev => prev + amount)
        }
        else{
          if (sessionLength <= 60 && amount < 0){
            return 
          }
          setSessionLength(prev => prev + amount)
        }
      }
    


  return (
    <div style={{display: openSetting ? 'block' : 'none'}}>
        <SetTime type='sessionLength' title='Session Length' changeLength={changeLength} time={sessionLength}/>
        <SetTime type='breakLength' title='Break Length'  changeLength={changeLength} time={breakLength}/>
    </div>
  )
}

export default Setting