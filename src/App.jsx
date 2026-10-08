import { useState } from "react";
import "./App.css";

function App() {
  const [selectedDesign, setSelectedDesign] = useState(null);

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          R K Web Studio
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#designs">Designs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

      </nav>


      {/* Hero */}
      <section id="home" className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="/images/hero-video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-small">
            WELCOME TO
          </p>

          <h1>
            R K Web Studio
          </h1>

          <p className="hero-text">
            Modern Websites for Your Business & Events
          </p>

          <a href="#designs">
            <button>
              View My Designs
            </button>
          </a>

        </div>

      </section>


      {/* Designs */}
      <section
        id="designs"
        className="designs-section"
      >

        <div className="section-heading">

          <p>MY WORK</p>

          <h2>
            Website Designs
          </h2>

          <span>
            Creative websites designed for different occasions and businesses.
          </span>

        </div>


        <div className="designs-grid">

          {/* Marriage */}
          <div className="design-card">

            <img
              src="/images/marriage-1.jpg"
              alt="Marriage Website"
            />

            <div className="card-content">

              <h3>
                Marriage Invitation
              </h3>

              <p>
                Elegant digital wedding websites.
              </p>

              <button
                onClick={() =>
                  setSelectedDesign("marriage")
                }
              >
                View Design
              </button>

            </div>

          </div>


          {/* Birthday */}
          <div className="design-card">

            <img
              src="/images/birthday-1.jpg"
              alt="Birthday Website"
            />

            <div className="card-content">

              <h3>
                Birthday Invitation
              </h3>

              <p>
                Beautiful birthday websites.
              </p>

              <button
                onClick={() =>
                  setSelectedDesign("birthday")
                }
              >
                View Design
              </button>

            </div>

          </div>


          {/* Shop */}
          <div className="design-card">

            <img
              src="/images/shop-1.jpg"
              alt="Shop Opening Website"
            />

            <div className="card-content">

              <h3>
                Shop Opening
              </h3>

              <p>
                Modern business opening websites.
              </p>

              <button
                onClick={() =>
                  setSelectedDesign("shop")
                }
              >
                View Design
              </button>

            </div>

          </div>


          {/* Function */}
          <div className="design-card">

            <img
              src="/images/function-1.jpg"
              alt="Function Website"
            />

            <div className="card-content">

              <h3>
                Function & Events
              </h3>

              <p>
                Professional event websites.
              </p>

              <button
                onClick={() =>
                  setSelectedDesign("function")
                }
              >
                View Design
              </button>

            </div>

          </div>


          {/* Institute */}
          <div className="design-card">

            <img
              src="/images/institute.jpg"
              alt="Institute Website"
            />

            <div className="card-content">

              <h3>
                Institute Website
              </h3>

              <p>
                Modern institute websites.
              </p>

              <button
                onClick={() =>
                  setSelectedDesign("institute")
                }
              >
                View Design
              </button>

            </div>

          </div>


          {/* Restaurant */}
          <div className="design-card">

            <img
              src="/images/restaurant.jpg"
              alt="Restaurant Website"
            />

            <div className="card-content">

              <h3>
                Restaurant Website
              </h3>

              <p>
                Attractive restaurant websites.
              </p>

              <button
                onClick={() =>
                  setSelectedDesign("restaurant")
                }
              >
                View Design
              </button>

            </div>

          </div>


          {/* Black Ninja Shawarma */}
          <div className="design-card">

            <img
              src="/images/black-ninja.jpg"
              alt="Black Ninja Shawarma Website"
            />

            <div className="card-content">

              <h3>
                Black Ninja Shawarma
              </h3>

              <p>
                Full-stack food ordering website with online
                ordering and order tracking.
              </p>
              
              <br /><br />

                   <a
                    href="https://black-ninja-fullstack-production.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                     >
                    <button>
                          Visit Website
                    </button>
                      </a>
              <button onClick={() => setSelectedDesign("black-ninja")}>
               View Design
               </button>

            </div>

          </div>

        </div>

      </section>


      {/* About */}
      <section
        id="about"
        className="about-section"
      >

        <div className="about-content">

          <div className="about-text">

            <p className="about-small">
              ABOUT ME
            </p>

            <h2>
              I Create Websites That
              <span>
                Make Your Ideas Stand Out.
              </span>
            </h2>

            <p>
              Hi, I'm Ragavi, the creator of R K Web Studio.
              I design modern, responsive and attractive websites
              for businesses, events and special occasions.
            </p>

            <p>
              My goal is to create websites that look beautiful,
              work smoothly and help people showcase their brand,
              business or event online.
            </p>

            <a href="#contact">
              <button>
                Let's Work Together
              </button>
            </a>

          </div>


          <div className="about-box">

            <div>
              <h3>
                Creative
              </h3>

              <p>
                Modern & unique designs
              </p>
            </div>

            <div>
              <h3>
                Responsive
              </h3>

              <p>
                Mobile & laptop friendly
              </p>
            </div>

            <div>
              <h3>
                Professional
              </h3>

              <p>
                Clean & user-friendly websites
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Marriage Preview */}
      {selectedDesign === "marriage" && (
        <div className="preview-overlay">

          <div className="preview-box">

            <button
              className="preview-close"
              onClick={() => setSelectedDesign(null)}
            >
              ×
            </button>

            <img
              src="/images/marriage-1.jpg"
              alt="Marriage Design Preview"
            />

            <div className="preview-content">

              <p>
                WEBSITE DESIGN
              </p>

              <h2>
                Marriage Invitation
              </h2>

              <span>
                Elegant and beautiful digital wedding invitation
                website designed for a memorable celebration.
              </span>

            </div>

          </div>

        </div>
      )}


      {/* Birthday Preview */}
      {selectedDesign === "birthday" && (
        <div className="preview-overlay">

          <div className="preview-box">

            <button
              className="preview-close"
              onClick={() => setSelectedDesign(null)}
            >
              ×
            </button>

            <img
              src="/images/birthday-1.jpg"
              alt="Birthday Design Preview"
            />

            <div className="preview-content">

              <p>
                WEBSITE DESIGN
              </p>

              <h2>
                Birthday Invitation
              </h2>

              <span>
                Beautiful and creative digital birthday invitation
                website designed for a memorable celebration.
              </span>

            </div>

          </div>

        </div>
      )}


      {/* Shop Preview */}
      {selectedDesign === "shop" && (
        <div className="preview-overlay">

          <div className="preview-box">

            <button
              className="preview-close"
              onClick={() => setSelectedDesign(null)}
            >
              ×
            </button>

            <img
              src="/images/shop-1.jpg"
              alt="Shop Opening Design Preview"
            />

            <div className="preview-content">

              <p>
                WEBSITE DESIGN
              </p>

              <h2>
                Shop Opening
              </h2>

              <span>
                Modern and professional website designed
                for your shop opening and business.
              </span>

            </div>

          </div>

        </div>
      )}


      {/* Function Preview */}
      {selectedDesign === "function" && (
        <div className="preview-overlay">

          <div className="preview-box">

            <button
              className="preview-close"
              onClick={() => setSelectedDesign(null)}
            >
              ×
            </button>

            <img
              src="/images/function-1.jpg"
              alt="Function Design Preview"
            />

            <div className="preview-content">

              <p>
                WEBSITE DESIGN
              </p>

              <h2>
                Function & Events
              </h2>

              <span>
                Professional and attractive website designed
                for functions, events and special occasions.
              </span>

            </div>

          </div>

        </div>
      )}
         {/* Black Ninja Preview */}
{selectedDesign === "black-ninja" && (
  <div className="preview-overlay">

    <div className="preview-box">

      <button
        className="preview-close"
        onClick={() => setSelectedDesign(null)}
      >
        ×
      </button>

      <img
        src="/images/black-ninja.jpg"
        alt="Black Ninja Shawarma Website Preview"
      />

      <div className="preview-content">

        <p>
          FULL STACK WEBSITE
        </p>

        <h2>
          Black Ninja Shawarma
        </h2>

        <span>
          Full-stack food ordering website with online
          ordering and order tracking features.
        </span>

        <br /><br />

        <a
          href="https://black-ninja-fullstack-production.up.railway.app/"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            Visit Website
          </button>
        </a>

      </div>

    </div>

  </div>
)}

      {/* Institute Preview */}
      {selectedDesign === "institute" && (
        <div className="preview-overlay">

          <div className="preview-box">

            <button
              className="preview-close"
              onClick={() => setSelectedDesign(null)}
            >
              ×
            </button>

            <img
              src="/images/institute.jpg"
              alt="Institute Design Preview"
            />

            <div className="preview-content">

              <p>
                WEBSITE DESIGN
              </p>

              <h2>
                Institute Website
              </h2>

              <span>
                Modern and professional website designed
                for educational institutes and training centers.
              </span>

            </div>

          </div>

        </div>
      )}


      {/* Restaurant Preview */}
      {selectedDesign === "restaurant" && (
        <div className="preview-overlay">

          <div className="preview-box">

            <button
              className="preview-close"
              onClick={() => setSelectedDesign(null)}
            >
              ×
            </button>

            <img
              src="/images/restaurant.jpg"
              alt="Restaurant Design Preview"
            />

            <div className="preview-content">

              <p>
                WEBSITE DESIGN
              </p>

              <h2>
                Restaurant Website
              </h2>

              <span>
                Modern and attractive website designed
                for restaurants, cafes and food businesses.
              </span>

            </div>

          </div>

        </div>
      )}


      {/* Contact */}
      <section
        id="contact"
        className="contact-section"
      >

        <div className="contact-content">

          <div className="contact-text">

            <p className="contact-small">
              GET IN TOUCH
            </p>

            <h2>
              Let's Create Something
              <span>
                Beautiful Together.
              </span>
            </h2>

            <p>
              Have a website idea in mind?
              Let's turn your idea into a modern and professional website.
            </p>

            <a
              href="https://wa.me/918508202872"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Chat on WhatsApp
            </a>

          </div>


          <div className="contact-details">

            <div className="contact-item">

              <span>
                ✉
              </span>

              <div>

                <h3>
                  Email
                </h3>

                <p>
                  rragavikathiresan@gmail.com
                </p>

              </div>

            </div>


            <div className="contact-item">

              <span>
                ◉
              </span>

              <div>

                <h3>
                  Gudalur, Theni
                </h3>

                <p>
                  Tamil Nadu, India
                </p>

              </div>

            </div>


            <div className="contact-item">

              <span>
                ↗
              </span>

              <div>

                <h3>
                  Available For
                </h3>

                <p>
                  Websites & Digital Projects
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default App;