
const BtnPlayStop = ({controlTimer,intervalId}) => {


    
  return (
    <button onClick={controlTimer}>{intervalId ? 'stop':'play'}</button>
  )
}

export default BtnPlayStop