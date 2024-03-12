// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/home.css';

import {SocialIcon} from 'react-social-icons';
import Navi from './nav';
const Home = () =>{
  return(
    <>
    <Navi/>
    
        
     
      <div className="hero-img">
        <img src="//i.picsum.photos/id/880/1000/600.jpg" alt="" />
      </div>
      
      <div className="services">
        <div className="service">
          <h2 className="service-title">Event</h2>
          <p className="service-text">
          In the general sense, an  refers to a notable occurrence or incident that takes place at a specific time and place. It could be a wide range of happenings, including social gatherings, celebrations, ceremonies, performances, or any other incidents that people plan, attend, or participate in.
          </p>
          <img src="//i.picsum.photos/id/380/400/250.jpg" alt="" />
        </div>
        <div className="service">
          <h2 className="service-title">Events</h2>
          <p className="service-text">
            1.Birthday Party 2.Wedding 3.Party 4.Start Ups
          </p>
          <img src="//i.picsum.photos/id/480/400/250.jpg" alt="" />
        </div>
        
      </div>
      <div className="youtube">
        <div
          className="fb-like"
          data-href="https://res.cloudinary.com/dnv99q36g/image/upload/v1708727566/pexels-wolfgang-2747449_tzvik8.jpg"
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        />
        <iframe
          width={560}
          height={315}
          src="https://www.youtube.com/watch?v=w7AccvbiWqI"
          frameBorder={0}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen=""
        />
      </div>
      <div className="youtube">
        <div
          className="fb-like"
          data-href="https://facebook.com/drnourhomsi"
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
       <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      </div>
    
    <div id="fb-root" />
    <div className="s-layout">
  {/* Sidebar */}
  <div className="s-layout__sidebar">
    <a className="s-sidebar__trigger" href="#0">
      <i className="fa fa-bars" />
    </a>
    <nav className="s-sidebar__nav">
      <ul>
        <li>
          <a className="s-sidebar__nav-link" href="#0">
            <i className="fa fa-home" />
            <em>Home</em>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/profile">
            <i className="fa fa-user" />
            <em>My Profile</em>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/invitation">
            <i className="fa fa-user" />
            <em>Invitation</em>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/event calender">
            <i className="fa fa-user" />
            <em>Event select</em>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/eventform">
            <i className="fa fa-user" />
            <em>Event Form</em>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/payment">
            <i className="fa fa-camera" />
            <em>Payment</em>
          </a>
        </li>
        <li>
          <a className="s-sidebar__nav-link" href="/contact">
            <i className="fa fa-camera" />
            <em>Contact</em>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div className="main-footer">
    <div className="row">
      {/* Column1 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>COMPANY</h4>
          <li className='fot'>About us</li>
          <li className='fot'>Team</li>
          <li className='fot'>Careers</li>
          <li className='fot'>Blog</li>
        </ul>
      </div>
      {/* Column2 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>CONTACT</h4>
          <li className='fot'>Help and Support</li>
          <li className='fot'>Partner with us</li>
          <li className='fot'>Ride with us </li>
        </ul>
      </div>
      {/* Column3 */}
      <div className="col">
        <ul className="list-unstyled">
          <h4>LEGAL</h4>
          <li className='fot'>Terms & Conditions</li>
          <li className='fot'>Privacy Policy</li>
          <li className='fot'>Cookie Policy</li>
          <li className='fot'>Security</li>
          <li className='fot'>Sitemap</li>
        </ul>
      </div>
      <div className="col">
        <ul className="list-unstyled">
          <h4>SOCIAL LINKS </h4>
          <li className='fot1'><SocialIcon  url="https://twitter.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://instagram.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://linkedin.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://facebook.com/jaketrent"/></li>
          <li className='fot1'><SocialIcon url="https://youtube.com/jaketrent"/></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="row_sm">
      <p className="col-sm">
      By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 ©  Foody™ Ltd. All rights reserved.
      </p>
    </div>
</div>
</div>

  </>
  
  );
};
export default Home;
