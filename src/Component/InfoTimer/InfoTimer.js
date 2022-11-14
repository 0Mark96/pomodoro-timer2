import { formatTime } from '../../common/formatTime'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import style from './InfoTimer.module.scss'

const InfoTimer = ({sessionLength,breakLength}) => {

  const {info_wrapper,info} = style
  
  return (
    <div className={info_wrapper}>
        <div className={info}>
            <FontAwesomeIcon icon={faBriefcase}/>
            <p>{formatTime(sessionLength)}</p>
        </div>
        <div className={info}>
            <FontAwesomeIcon icon={faMugSaucer}/>
            <p>{formatTime(breakLength)}</p>
        </div>
    </div>
  )
}

export default InfoTimer