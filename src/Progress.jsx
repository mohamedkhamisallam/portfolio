import ProgressBar from 'react-bootstrap/ProgressBar';

function progress({now,color,text}) {
  // const now = now;
  return (
    <>
    
    <div className=' position-relative '>
      <div >
      <h5 className='text-mutes'> {text}</h5>
      <div  className=' percentage position-absolute' style={{left:`calc(${now}%) `}}>{now}%</div>
      </div>
    <div className={`progress-circle bg-${color} `} style={{left:`calc(${now}%) `}}></div>
    <ProgressBar   now={now} style={{height:'10px'}}  variant={color}  className='pregress-bar'  />
    </div>
  </>
  )
}

export default progress;