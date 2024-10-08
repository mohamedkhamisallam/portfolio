import Carousel from 'react-bootstrap/Carousel';
import image from "../assets/pics/img_bg_1-PzvG2r05.jpg";
import image2 from "../assets/pics/img_bg_2-DzCs5o-0.jpg";
import { FaDownload } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";





function CarouselFadeExample() {
  return (
    <Carousel fade  interval={2000} pause={stop} style={{marginTop: '-120px'}} >
      <Carousel.Item className='carrsoul-size w-100 ' style={{minHeight:'120vh'}}>
        <img src={image} className='w-100  ' style={{minHeight:'120vh'}}  />
        <Carousel.Caption className='mb-5' >
          <h1 className='text-black text-center text-lg-start'>Hi<br/>I.M JACKSON</h1>
          <p className='text-lg-start text-black text-center'>
            100% html5 bootstrap templates Made
            <a href='https://colorlib.com/'>Colorlib.com</a>
            <br/>
            BY
          </p>
          <p className='text-black text-lg-start'>DOWNLOAD CV 
          <button type='button' className='btn btn-transparent'>
          
            <FaDownload className='border border-black p-2 m-1 text-black fs-2 ' />

          </button>
          </p>
        </Carousel.Caption  >
      </Carousel.Item>
      <Carousel.Item className='carrsoul-size vh-110 'style={{minHeight:'120vh'}}>
        <img src={image2} className='  w-100 vh-110 ' style={{minHeight:'120vh'}}/>
        <Carousel.Caption style={{marginBottom:'100px'}} >
          <h1 className='text-danger text-center text-lg-start'>I , M<br/>A Designer</h1>
          <p className='text-lg-start text-danger text-center'>
          100% html5 bootstrap templates Made 
            <br/>
            BY
            <a href='https://colorlib.com/'>Colorlib.com</a>
          </p>
          <p className='text-black text-lg-start border border-black px-2 ' style={{width:'230px'}}>VIEW PORTFOLIO  
          <button type='button' className='btn btn-transparent '>
          
            
            <FaBriefcase className='  text-black fs-3 ' />


          </button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default CarouselFadeExample;