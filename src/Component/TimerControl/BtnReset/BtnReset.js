import style from '../TimerControl.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'

const BtnReset = ({reset}) => {
  return (
    <button className={style.control_btn} onClick={reset}><FontAwesomeIcon icon={faRepeat} /></button>
  )
}

export default BtnReset