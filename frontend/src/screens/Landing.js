// src/screens/landing.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './Landing.css'; // Import your custom CSS file

const Landing = () => {
  useEffect(() => {
    // Add the 'no-gradient' class to the body when the component mounts
    document.body.classList.add('no-gradient');

    // Remove the 'no-gradient' class when the component unmounts
    return () => {
      document.body.classList.remove('no-gradient');
    };
  }, []);
  return (
    <div>
      {/* Video Background Section */}
      <section className="video-bg">
        <video autoPlay muted loop id="video-bg">
          {/* Use the relative path to your video from the public folder */}
          <source src="/blue_-_22908_Original.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay"></div>

        <div className="content-container">
          <h1 className="display-4 mb-4 text-white"> Gamer On </h1>
          <h1 className="display-4 mb-4 text-white">Your Review Space</h1>
          <p className="lead text-white">
            Navigate the Gaming Sphere with ease like never before.
          </p>
          {/* Change the class to btn-light for the white background */}
          <Link to="/homescreen" className="btn btn-light btn-lg mt-3">
            Explore Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features text-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fas fa-certificate fa-3x mb-3"></i>
                <h5>Quality Games</h5>
                <p className="lead">
                  Explore a wide range of high-quality products from top brands.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fas fa-lock fa-3x mb-3"></i>
                <h5>Seamless Discovery</h5>
                <p className="lead">
                  Discover amazing games and find reliable reviews.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fas fa-headset fa-3x mb-3"></i>
                <h5>24/7 Customer Support</h5>
                <p className="lead">
                  Our dedicated support team is ready to assist you at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta text-center py-5">
        <div className="container">
          <h5>Ready to get started?</h5>
          <Link
            style={{ marginTop: '7px' }}
            to="/signup"
            className="btn btn-primary btn-lg"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
