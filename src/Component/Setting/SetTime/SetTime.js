import { formatTime } from "../../../common/formatTime"

const SetTime = ({type,title,time,changeLength}) => {
  return (
    <div>
    <h1>{title}</h1>
    <div>
      <button onClick={()=>changeLength(60,type)}>+</button>
      <h1>{formatTime(time)}</h1>
      <button onClick={()=>changeLength(-60,type)}>-</button>
    </div>
  </div>
  )
}

export default SetTime 