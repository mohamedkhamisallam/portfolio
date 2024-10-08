import React, { useState } from "react";
import image1 from '../assets/pics/img-1-C4nS0eD8.jpg'
import image2 from '../assets/pics/img-2-D-4H1m4L.jpg'
import image3 from '../assets/pics/img-3-pR2ZEVY9.jpg'
import image4 from '../assets/pics/img-4-tHccITd-.jpg'
import image5 from '../assets/pics/img-5-lAucr__a.jpg'
import image6 from '../assets/pics/img-6-DFW03AZ3.jpg'
function Work() {
  
  const [active, setActive] = useState("");
  const [show, setShow] = useState(false);
  let activeLink = (e) => {
    if (e.target.text) {
      setActive(e.target.text);
    }
  };
  return (
    <>
      <div className="m-5">
        <div className="row m-5 ">
          <div className="col-lg-12">
            {" "}
            <p className="text-muted ">MY WORK</p>
          </div>
          <div className="col-lg-12">
            <h3>RECENT WORK</h3>
          </div>
          <div className="col-lg-12 ">
            <ul className="d-flex justify-content-start list-unstyled ">
              <li className="mx-3 
              
              ">
                <a
                  onClick={(e) => activeLink(e)}
                  className={`${
                    active === "Graphic DESSIGN" ? "text-primary" : ""
                  }`}
                >
                  Graphic DESSIGN
                </a>
              </li>
              <li className="mx-3">
                <a
                  onClick={(e) => activeLink(e)}
                  className={`${active === "APPS" ? "text-primary" : ""}`}
                >
                  APPS
                </a>
              </li>
              <li className="mx-3">
                <a
                  onClick={(e) => activeLink(e)}
                  className={`${active === "SOFTWARE" ? "text-primary" : ""}`}
                >
                  SOFTWARE
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6  " ><img src={image1} className="w-100  pic-container"/></div> 

          <div className="col-lg-6 "><img src={image2} className="w-100  pic-container my-1"/></div>
          <div className="col-lg-6"><img src={image3} className=" w-100 pic-container" /></div>
          <div className="col-lg-6"><img src={image4} className="w-100 pic-container my-1" /></div>
         <div className="col-12">
         <button className="btn btn-outline-primary w-25 my-2" onClick={()=>{setShow(!show)}}>{show?'SHOW LESS':'SHOW MORE'}</button>
         </div>
          <div className={`col-lg-6   ${show==false?'d-none':'d-block'}`}><img src={image5} className={`w-100 pic-container   `} /></div>
          <div className={`col-lg-6 ${show==false?'d-none':'d-block'}`}><img src={image6} className="w-100 pic-container" /></div>
        </div>
      </div>
    </>
  );
}

export default Work;
