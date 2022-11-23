import { CircularProgressbarWithChildren,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { formatTime } from "../../common/formatTime"

const Timer = ({timer,onSession,breakLength,sessionLength}) => {
    
    const circleStyle = { pathTransitionDuration: 0, 
                          pathColor: '#FDC592',
                          trailColor: '#373737',
                          strokeLinecap: 'butt',
                        }
  
    
    return (
    <div>
        <CircularProgressbarWithChildren value={timer} minValue={0} maxValue={onSession ? sessionLength : breakLength} strokeWidth={1} styles={buildStyles(circleStyle)}> 
           <p>{onSession ? 'Stay Focused': 'Take a Break'}</p>
           <h1>{formatTime(timer)}</h1>
           <p>{onSession ? 'Session' : 'Break'}</p>
        </CircularProgressbarWithChildren>
    </div>
  )
}

export default Timer