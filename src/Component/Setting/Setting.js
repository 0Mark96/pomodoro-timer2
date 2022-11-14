import style from './Setting.module.scss'
import classnames from 'classnames'
//component
import SetTime from "./SetTime/SetTime"

const Setting = ({sessionLength,breakLength,setSessionLength,setBreakLength,setOpenSetting,setTimer,openSetting}) => {
     
    const {setting_menu_cont,setting_open,setting_title} = style
    
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
    <div className={classnames(setting_menu_cont,{[setting_open]:openSetting})}>
        <h3 className={setting_title}>Timer setting</h3>
        <SetTime type='sessionLength' title='Session Length' changeLength={changeLength} time={sessionLength}/>
        <SetTime type='breakLength' title='Break Length'  changeLength={changeLength} time={breakLength}/>
    </div>
  )
}

export default Setting