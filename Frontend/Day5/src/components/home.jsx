import React, { useEffect, useState } from 'react';
import "../assets/home.css";

const Home = () => {
  const [navVisible, setNavVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle navigation
  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  // Smooth scrolling
  const smoothScroll = (anchor) => {
    if (anchor) {
      let anchorTarget = document.getElementById(anchor.substring(1));
      if (anchorTarget) {
        let offsetPosition = anchorTarget.offsetTop - (document.querySelector("nav").offsetHeight);
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  // Sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      let viewHeight = window.innerHeight;
      setIsSticky(window.scrollY > (viewHeight - 175));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Center splash
  useEffect(() => {
    const centerSplash = () => {
      let navHeight = document.querySelector("nav").offsetHeight;
      let splashContainer = document.querySelector(".splash .container");
      if (splashContainer) {
        let splashHeight = splashContainer.offsetHeight;
        let remainingHeight = window.innerHeight - splashHeight - navHeight;
        splashContainer.style.paddingTop = `${remainingHeight / 2}px`;
        splashContainer.style.paddingBottom = `${remainingHeight / 2}px`;
      }
    };

    centerSplash();
    window.addEventListener('resize', centerSplash);

    return () => {
      window.removeEventListener('resize', centerSplash);
    };
  }, []);

  return (
    <>
    <div className="wrapper">
  <div className="sidebar">
    
    <ul>
      <li>
        <a href="#">
          <i className="fas fa-home" />
          Home
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-user" />
          Profile
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-address-card" />
          About
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-project-diagram" />
          portfolio
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-blog" />
          Blogs
        </a>
      </li>
      <li>
        <a href="/contact">
          <i className="fas fa-address-book" />
         Contact
        </a>
      </li>
      <li>
        <a href="#">
          <i className="fas fa-map-pin" />
          Map
        </a>
      </li>
    </ul>
    <div className="social_media">
      <a href="#">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#">
        <i className="fab fa-twitter" />
      </a>
      <a href="#">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
 
    </div>
  


      <nav className={`container-fluid nav ${isSticky ? 'sticky' : ''}`}>
        <div className="container cf">
          <div className="brand">
            <a href="#splash" onClick={() => smoothScroll("#splash")}>Event Managment</a>
          </div>
          <i className="fa fa-bars nav-toggle" onClick={toggleNav} />
          <ul style={{ display: navVisible ? 'block' : 'none' }}>
            <li>
              <a href="#about" onClick={() => smoothScroll("#about")}>About Me</a>
            </li>
            <li>
              <a href="#skills" onClick={() => smoothScroll("#skills")}>Skills & Experience</a>
            </li>
            <li>
            <a href="/contact" onClick={() => smoothScroll("/contact")}>Contact </a>
            </li>
            <li>
              <a href="/login" onClick={() => smoothScroll("/login")}>Login</a>
            </li>
            <li>
              <a href="#contact" onClick={() => smoothScroll("#contact")}>Logout</a>
            </li>
            <li>
              <a href="/feedback" onClick={() => smoothScroll("/feedback")}>Feedback</a>
            </li>
          </ul>
        </div>
      </nav>
      {<>
  
  <div className="container-fluid splash" id="splash">
    <div className="container">
      <img
        src="https://s10.postimg.org/jvo3z5kux/QTr_B8o_S.jpg"
        alt="Portrait of Mr. Roboto"
        className="profile-image"
      />
      <h1>Mr. Roboto</h1>
      <span className="lead">Android Life Form</span>
      <span className="continue">
        <a href="#about">
          <i className="fa fa-angle-down" />
        </a>
      </span>
    </div>
  </div>
  <div className="container-fluid intro" id="about">
    <div className="container">
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
        ratione impedit soluta amet quas saepe temporibus{" "}
        <a href="#">eum reprehenderit</a> voluptas! A nihil adipisci itaque quos
        quo dolorum consequuntur iusto facere quaerat, excepturi quod,
        necessitatibus aliquid quae est qui, aut in assumenda animi tempora
        debitis. Beatae, veritatis, delectus. Repellat dolore, molestias nam.
      </p>
    </div>
  </div>
  <div className="container-fluid features" id="skills">
    <div className="container cf">
      <h2>Skills &amp; Experience</h2>
      <div className="col-3">
        <img src="https://s22.postimg.org/oi5es3fkx/icon_cloud.png" alt="" />
        <h3>Cloud Computing</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          modi maiores eum commodi soluta, blanditiis voluptates ea eos, cim!
          Neque.
        </p>
      </div>
      <div className="col-3">
        <img src="https://s22.postimg.org/jxj8d5vvl/icon_coding.png" alt="" />
        <h3>Expert Coding</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          modi maiores eum commodi soluta, blanditiis voluptates ea eos, cim!
          Neque.
        </p>
      </div>
      <div className="col-3">
        <img src="https://s22.postimg.org/citwksa01/icon_graph.png" alt="" />
        <h3>Data Analysis</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          modi maiores eum commodi soluta, blanditiis voluptates ea eos, cim!
          Neque.
        </p>
      </div>
    </div>
  </div>
  <div className="container-fluid portfolio" id="portfolio">
    <div className="container cf">
      <h2>Portfolio</h2>
      <div className="gallery">
        <div className="gallery-image">
          <img src="https://unsplash.it/800/450?image=250" alt="" />
        </div>
        <div className="gallery-image">
          <img src="https://unsplash.it/800/450?image=249" alt="" />
        </div>
        <div className="gallery-image">
          <img src="https://unsplash.it/800/450?image=248" alt="" />
        </div>
        <div className="gallery-image">
          <img src="https://unsplash.it/800/450?image=247" alt="" />
        </div>
        <div className="gallery-image">
          <img src="https://unsplash.it/800/450?image=239" alt="" />
        </div>
        <div className="gallery-image">
          <img src="https://unsplash.it/800/450?image=238" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid contact" id="contact">
    <div className="container">
      <form>
        <h2>Contact Me</h2>
        <input
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          className="full-half"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          className="full-half"
        />
        <input type="text" placeholder="Subject" id="subject" name="subject" />
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          defaultValue={""}
        />
        <input type="submit" defaultValue="Send" />
      </form>
    </div>
  </div>
  <footer className="container-fluid footer">
    <div className="container">
      <a href="#" target="_blank">
        <i className="fa fa-facebook" />
      </a>
      <a href="#" target="_blank">
        <i className="fa fa-twitter" />
      </a>
      <a href="#" target="_blank">
        <i className="fa fa-github" />
      </a>
      <a href="#" target="_blank">
        <i className="fa fa-dribbble" />
      </a>
      <a href="#" target="_blank">
        <i className="fa fa-codepen" />
      </a>
    </div>
  </footer>
</>
}
    </>
  );
};

export default Home;