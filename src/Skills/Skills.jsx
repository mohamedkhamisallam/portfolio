import React from 'react'
import Progress from '../Progress'
function Skills() {
  let now=[75,60,85,90,70,80]
  let color=['primary','danger','warning','secondary','primary','info']
  let text=['Photoshop','jQuery','HTML5','CSS3','WordPress','SEO']
  
  return (
    <>
    <div className='m-5'>
      <div className="row  mx-5 my-5">


        <div className="col-12">
          <p>MY SPECIALTY</p>
          <h3>MY SKILLS</h3>
          <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
        </div>
       
      </div>
      <div>
        <div className="row m-5">
       {
        now.map((ele,index)=>{
          return(
            <div className="col-lg-6 my-2">
              <Progress now={ele} color={color[index]} text={text[index]} />
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

export default Skills