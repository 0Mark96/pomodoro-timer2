import style from './BtnOpenSet.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders} from '@fortawesome/free-solid-svg-icons'

const BtnOpenSet = ({setOpenSetting}) => {
  return (
        <button className={style.btn_open} onClick={()=>setOpenSetting(true)}><FontAwesomeIcon icon={faSliders} /></button>
    )
}

export default BtnOpenSet