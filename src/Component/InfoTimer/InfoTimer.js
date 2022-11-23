import { formatTime } from '../../common/formatTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import style from './InfoTimer.module.scss'

const InfoTimer = ({sessionLength,breakLength,onSession}) => {

  
  const {info_wrapper,info,time,title} = style
  
  return (
    <div className={info_wrapper}>
     
        <div className={info}>
           <p className={title}>Next {onSession ? 'break' : 'session'}</p>
            <FontAwesomeIcon icon={onSession ? faMugSaucer : faBriefcase }/>
            <p className={time}>{formatTime(onSession ? breakLength : sessionLength)}</p>
        </div>
      
    </div>
  )
}

export default InfoTimer