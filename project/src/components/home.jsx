// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/home.css';

const Home = () => {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>PARTYFY</title>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Maitree|Montserrat|Calligraffitti|Playfair+Display|Sahitya|Source+Sans+Pro|Ubuntu"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    type="text/css"
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#myNavbar"
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="https://www.flaticon.com/free-icon/event_2558944" className="navbar-brand lg-position" target="_blank">
  
</a>

      </div>
      <div>
        <div className="collapse navbar-collapse tab-right" id="myNavbar">
          <ul className="nav nav-pills navbar-nav">
            <li className="pull-right">
            <a href="/contact">Contact</a>
            </li>
            <li className="pull-right">
              <a href="/feedback">Feedback</a>
            </li>
            <li className="pull-right">
              <a href="/payment">Payment</a>
            </li>
            <li className="pull-right">
              <a href="#portfolio">My Work</a>
            </li>
          
            <li className="pull-right">
              <a href="#about">About</a>
            </li>
            
            <li className="pull-right">
              <a href="#home">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  {/*Home Page*/}
  <div id="home">
    <div className="home-page">
      <div className="block text-center">
        <h1 className="style-name">PARTYFY</h1>
        <h3 className="style-description">
        The best way to predict the future is to create it. - Peter Drucke
        </h3>
        <div className="btnList text-center">
          <a
            className="btn btn-facebook btn-lg"
            href=""
            target="_blank"
          >
            <i className="https://cdn-icons-png.flaticon.com/128/9322/9322127.png" />
             <a href="/home1">ADMIN</a>
          </a>
          
          <a
            className="btn btn-twitter btn-lg"
            
            target="_blank"
          >
            <i className="" />
            <a href="/invitation">INVITATION</a>
          </a>
          <a
            className="btn btn-linkedin btn-lg"
            href=""
            target="_blank"
          >
            <i className="" />
            <a href="/event calender">EVENT TYPES</a>
          </a>
          <a
            className="btn btn-github btn-lg"
            href=""
            target="_blank"
          >

            <i className="" />
            <a href="/profile">PROFILE</a>
          </a>
          <a
            className="btn btn-freecodecamp btn-lg"
            href=""
            target="_blank"
          >
            <i className="" />
            <a href="/eventform">EVENT FORM</a>
          </a>
          
          
        </div>
      </div>
    </div>
  </div>
  {/*End Of Home Page*/}
  {/*About Page*/}
  <div id="about">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center text-style">
          <h2>
            <strong>About Me</strong>
          </h2>
          <hr />
        </div>
      </div>
      <div className="row about-style">
        <div className="col-md-12 text-center about-info">
          <p>
          Our team of experts persistently upgrades the theme and chooses to use the most up-to-date decorations to add stars to your event. Our experience is worthy enough to understand your requirements and so we endeavour to present the best, thereby making your dream event come true and be the talk of the town/city.
          </p>
          <br />
          <br />
          <p>
           Our event management company believes that client happiness is the most important element of success. Nothing is small or big for us because we manage every event with the same dedication, integrity and passion. We trust in delivering the finest services within your budget.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/*End Of Home Page*/}
  {/*Portfolio Page*/}
  <div id="portfolio">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center text-style">
          <h2>
            <strong>Our Recent Works</strong>
          </h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 portfolio-item">
          {/*Portfolio 1*/}
          <img
            src="http://hd.wallpaperswide.com/thumbs/california_road-t1.jpg"
            className="img-responsive"
            alt="#"
          />
        </div>
        <div className="col-sm-4 portfolio-item">
          {/* Portfolio 2 */}
          <img
            src="http://hd.wallpaperswide.com/thumbs/empty_road_3-t1.jpg"
            className="img-responsive"
            alt="#"
          />
        </div>
        <div className="col-sm-4 portfolio-item">
          {/*Portfolio 3 */}
          <img
            src="http://hd.wallpaperswide.com/thumbs/android_7-t1.jpg"
            className="img-responsive"
            alt="#"
          />
        </div>
        <div className="col-sm-4 portfolio-item">
          {/*Portfolio 4 */}
          <img
            src="http://hd.wallpaperswide.com/thumbs/anonymous_mask_3-t1.jpg"
            className="img-responsive"
            alt="#"
          />
        </div>
        <div className="col-sm-4 portfolio-item">
          {/*Portfolio 5 */}
          <img
            src="http://hd.wallpaperswide.com/thumbs/offline-t1.jpg"
            className="img-responsive"
            alt="#"
          />
        </div>
        <div className="col-sm-4 portfolio-item">
          {/*Portfolio 6 */}
          <img
            src="http://hd.wallpaperswide.com/thumbs/jiuzhaigou_sichuan_china-t1.jpg"
            className="img-responsive"
            alt="#"
          />
        </div>
      </div>
    </div>
  </div>
  <div id="contacts">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center text-style">
          <h2>
            <strong>SHARE YOU EXPERINECES</strong>
          </h2>
          <hr />
        </div>
      </div>
      <div className="wrapper">
        <form method="post" className="ccform">
          <div className="ccfield-prepend">
            <span className="ccform-addon">
              <i className="fa fa-user fa-2x" />
            </span>
            <input
              className="ccformfield"
              type="text"
              placeholder="Full Name"
              required=""
            />
          </div>
          <div className="ccfield-prepend">
            <span className="ccform-addon">
              <i className="fa fa-envelope fa-2x" />
            </span>
            <input
              className="ccformfield"
              type="text"
              placeholder="Email"
              required=""
            />
          </div>
          
          
          <div className="ccfield-prepend">
            <span className="ccform-addon">
              <i className="fa fa-comment fa-2x" />
            </span>
            <textarea
              className="ccformfield"
              name="comments"
              rows={6}
              placeholder="Message"
              required=""
              defaultValue={""}
            />
          </div>
          <div className="ccfield-prepend submit">
            <input className="ccbtn" type="submit" defaultValue="Submit" />
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Footer */}
  
  <div id="footer">
  <div className="container footer-position">
    <div className="row">
      <div className="col-md-12">
        <span>© 2024 PARTYFY</span>
        <ul className="social-links">
          <li><a href="https://www.linkedin.com/in/yourprofile" target="_blank">
            <svg xmlns="https://www.flaticon.com/free-icon/linkedin_3536569" viewBox="0 0 24 24" width="24" height="24">
              <path d="M5 3h4v14H5zM7 17h2V7H7v10zM11.5 7v10h2v-5.75c0-.69.56-1.25 1.25-1.25h.5V7h-2v2h.5c.14 0 .25.11.25.25V9.5c0 .14-.11.25-.25.25h-.5V12h-1.25c-.69 0-1.25-.56-1.25-1.25V7H11.5zM16 7v1.75c0 .69-.56 1.25-1.25 1.25h-1.5c-.14 0-.25-.11-.25-.25V7h-2v7h2v-4.75c0-.69.56-1.25 1.25-1.25h1.5c.14 0 .25.11.25.25V14h2V7h-2z"/>
            </svg>
          </a></li>
          <li><a href="https://www.instagram.com/yourprofile" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15.5h-9C6.56 17.5 5 15.94 5 14V10c0-1.94 1.56-3.5 3.5-3.5h1.68c-.25.56-.38 1.16-.38 1.75 0 2.8 2.2 5 5 5 .59 0 1.19-.13 1.75-.38V17.5z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
</a></li>

<li><a href="https://github.com/yourusername" target="_blank">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.88 8.17 6.84 9.49.5.09.68-.22.68-.49l-.01-1.72c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.57 2.38 1.12 2.97.86.09-.65.35-1.12.64-1.37-2.24-.25-4.59-1.12-4.59-5.01 0-1.1.39-1.99 1.04-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.65.7 1.04 1.59 1.04 2.69 0 3.89-2.36 4.76-4.6 5.01.36.31.68.92.68 1.86l-.01 2.77c0 .27.18.59.69.49C19.12 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
</a></li>
<li><a href="mailto:youremail@example.com">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59V8.41L12 13 7 8.41v7.18l5-3.25 5 3.25z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
</a></li>

        </ul>
      </div>
    </div>
  </div>
</div>


</>

  );
};

export default Home;
