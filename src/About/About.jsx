import React from 'react'
import MainCard from '../MainCard'
import { TiWorld } from "react-icons/ti";
import { FaMobileScreen } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { SiPaloaltosoftware } from "react-icons/si";
function About() {
  let text=['Graphic Design','Web Design','Software','Application']
  let style=[<FaRegLightbulb   className='fs-3 text-primary'/>,<TiWorld  className='fs-3 text-danger'/>,
  <SiPaloaltosoftware className='fs-3 text-warning' />,<FaMobileScreen className='fs-3 text-seconday' />]



  let colors=['primary','danger','warning','secondary']
  return (
    <>





    <div style={{margin:'10px'} }  >
      <div className=" row mx-5">
        <div className="col-12  mx-5 ">
          <p className='fs-6'>ABOUT US</p>
          <p className='fs-5 fon text-black'>WHO AM I?</p>
          <p className=' lh-base'>Hi Im Jackson Ford On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
          <p className=' lh-base'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        </div>
      </div>
    </div>
    <div>
      <div className='mx-5'>
      <div className="row g-3 mx-5">
        {
          text.map((ele,index)=>{
            
            return(

              <div  key={index}  className="col-xl-3 col-lg-3 col-md-6 col-ms-12  
              shadow-lg p-3 mb-5 bg-body rounded
              "style={{height:'150px'}} >
                <MainCard text={ele} style={style[index]}  colors={colors[index]} />
              </div>
            )
          })
        }
        
      </div>
      </div>
    </div>
    
    </>
  )
}

export default About