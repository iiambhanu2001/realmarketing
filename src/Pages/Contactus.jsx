import "./StylesSheets/Contactus.css";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Contactus = () => {
  return (
    <>
      <section className="hero">
        <h1 className="hero-text">Who We Are</h1>
        <p className="hero-subtext">
          We are committed to delivering top-notch services and ensuring the
          best for our customers. Let's connect and grow together.
        </p>
        <div className="smoke-container"></div>
      </section>

      <div className="contact-container">
        <div
          className="contact-form-location"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            flex: "1",
          }}
        >
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="tel" placeholder="Your Phone Number" />
              <input type="text" placeholder="What service do you want?" />
              <textarea rows="4" placeholder="Your Enquiry"></textarea>
              <label for="cars">Choose service : </label>
              <select
                name="What service Do you want?"
                aria-placeholder="Choose service"
              >
                <option value="SEO">SEO</option>
                <option value="SEO">Social Media Marketing</option>
                <option value="SEO">Digital Marketing</option>
              </select>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="info-box1">
            <h2>
              Location{" "}
              <i className="fas fa-map-marker-alt" style={{ color: "red" }}></i>
            </h2>
            <p>
              <a
                href="https://maps.app.goo.gl/yfNwA8YeJAr1ySma8"
                target="_blank"
              ></a>
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=250&amp;hl=en&amp;q=A: 208 2nd Floor NorthEx Mall Sector 9 Rohini&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="https://sprunkin.com/">Sprunki Game</a>
                </div>
              </div>
            </p>
          </div>
        </div>

        <div className="contact-info">
          <div className="info-box">
            <h2>Who We Are</h2>
            <p>
              We are a leading digital agency helping businesses grow through
              innovative marketing strategies.
            </p>
          </div>
          <div className="info-box">
            <h2>Why Choose Us?</h2>
            <p>
              We offer top-notch marketing solutions tailored to your needs.
            </p>
          </div>

          <div className="info-box">
            <h2>Phone</h2>
            <p>
              <i className="fas fa-phone"></i>{" "}
              <a href="tel:+1234567890" style={{ textDecoration: "none" }}>
                +91 8527279527
              </a>
            </p>
          </div>
          <div className="info-box">
            <h2>Email</h2>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:info@company.com">admin@outreachxpert.in</a>
            </p>
          </div>
          <div className="info-box">
            <h2>⏰ Working Hours</h2>
            <p>Monday – Friday: 9 AM – 6 PM</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Why Work With Us?</h2>
        <div className="cta-icons">
          <div>
            <i className="fas fa-chart-line"></i> Growth-Focused
          </div>
          <div>
            <i className="fas fa-users"></i> Expert Team
          </div>
          <div>
            <i className="fas fa-bullhorn"></i> Strategic Marketing
          </div>
        </div>
      </div>

      <div className="social-section">
        <h2>Connect with Us</h2>
        <div className="social-icons">
          <a href="#">
           <img width={40} height={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/250px-Facebook_f_logo_%282019%29.svg.png" alt="" />
          </a>
          <a href="#">
            <img width={40} height={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/960px-X_logo.jpg" alt="" />
          </a>
          <a href="#">
           <img width={40} height={35} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/250px-Instagram_logo_2022.svg.png" alt="insta" />
          </a>
                
        </div>
      </div>
    </>
  );
};

export default Contactus;
