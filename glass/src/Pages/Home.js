
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import glass1 from './images/glass1.jpg';

import sun1 from './images/sun1.jpg'

import sun2 from './images/sun2.jpg'
import sun3 from './images/sun3.jpg'
import sun4 from './images/sun4.jpg'
import sun5 from './images/sun5.jpeg'
import sun6 from './images/sun6.jpg'
import sun7 from './images/sun7.jpeg'

import './Home.css';

const Home = () => {
    return (
        <div>
           
            <Carousel className="top">
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src={glass1}
                   alt="First slide"
               />
           </Carousel.Item>
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src={sun1}
                   alt="Second slide"
               />
               <Carousel.Caption>
                   <h3>Second Slide Label</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
           </Carousel.Item>
           <Carousel.Item>
               <img
                   className="d-block w-100"
                   src={sun2}
                   alt="Third slide"
               />
           </Carousel.Item>
           </Carousel>
           
           
           
           <div className="sun mt-5">
               <div id="sun1">
                   <div id="sun2">
              <Link to="/Sun1"> <img  src={sun3} alt=""/></Link>    
                   <h6>Kid's collection</h6>
                   </div>
             
                   <div id="sun2">
               <Link to="/sun2"><img  src={sun4} alt=""/></Link>    
                   <h6>Swimming Glass</h6>
           </div>
                   <div id="sun2">
                   <Link to="/sun3"><img  src={sun5} alt=""/></Link> 
                   <h6>Driving Glass</h6>
                       </div>
           
                   <div id="sun2">
                   <Link to="/sun4"><img  src={sun6} alt=""/></Link> 
                   <h6>Sport Glass</h6>
                       </div>
           
                   <div id="sun2">
                   <Link to="/sun5"><img  src={sun7} alt=""/></Link> 
                   <h6>Stylesh for All</h6>
                       </div>
           
             </div>
              
           </div>
        </div>
    );
};

export default Home;