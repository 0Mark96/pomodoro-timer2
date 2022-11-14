import style from '../TimerControl.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'

const BtnPlayStop = ({controlTimer,intervalId}) => {
  return (
    <button className={style.control_btn} onClick={controlTimer}><FontAwesomeIcon icon={intervalId ? faPause : faPlay} /></button>
  )
}

export default BtnPlayStop