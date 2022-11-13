import { CircularProgressbarWithChildren,buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import { formatTime } from "../../common/formatTime"


const Timer = ({timer,onSession,breakLength,sessionLength}) => {
    
    const circleStyle = { pathTransitionDuration: 0, 
                          pathColor: 'rgb(73, 73, 73)',
                          trailColor: 'yellow',
                          trailWidth:6,
                          strokeLinecap: 'butt',
                        }
  
    
    return (
    <div>
        <CircularProgressbarWithChildren value={timer} minValue={0} maxValue={onSession ? sessionLength : breakLength} strokeWidth={1} counterClockwise={true}   styles={buildStyles(circleStyle)}> 
           <h3>{onSession ? 'Stay Focused': 'Take a Break'}</h3>
           <h1>{formatTime(timer)}</h1>
           <h3>{onSession ? 'Session' : 'Break'}</h3>
        </CircularProgressbarWithChildren>
    </div>
  )
}

export default Timer