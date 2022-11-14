import { formatTime } from "../../../common/formatTime"
import style from './SetTime.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

const SetTime = ({type,title,time,changeLength}) => {
  
  const {setting_wrapper,setting,btn,time_num} = style

  return (
    <div className={setting_wrapper}>
    <h4>{title}</h4>
    <div className={setting}>
      <button className={btn} onClick={()=>changeLength(60,type)}><FontAwesomeIcon icon={faCaretUp}/></button>
      <h4 className={time_num}>{formatTime(time)}</h4>
      <button className={btn} onClick={()=>changeLength(-60,type)}><FontAwesomeIcon icon={faCaretDown}/></button>
    </div>
  </div>
  )
}

export default SetTime 