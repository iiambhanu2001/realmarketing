import "./StylesSheets/Smm.css";

const SMM = () => {
  return (
    <>
      <div class="hero">
        <h1>Elevate Your Brand with Social Media Marketing</h1>
        <p>
          Engage your audience and boost your online presence with proven
          strategies.
        </p>
        <a href="https://outreachxpert.in/contact-us/" class="btn-primary">
          Get Started
        </a>
      </div>

      <section class="about-section">
        <h2>About Social Media Marketing</h2>
        <p>
          Social media marketing is all about creating engaging content,
          building relationships, and driving conversions through platforms like
          Facebook, Instagram, LinkedIn, and Twitter. Our expert team crafts
          tailored campaigns that help your brand connect with its audience and
          achieve measurable results.
        </p>
      </section>

      <section class="services-section">
        <h2>Our Services</h2>
        <div class="services-container">
          <div class="service-card">
            <h3>Facebook Advertising</h3>
            <p>Reach millions with targeted ad campaigns on Facebook.</p>
          </div>
          <div class="service-card">
            <h3>Instagram Marketing</h3>
            <p>Boost engagement and grow your following organically.</p>
          </div>
          <div class="service-card">
            <h3>LinkedIn Lead Generation</h3>
            <p>Connect with professionals and drive B2B conversions.</p>
          </div>
        </div>
      </section>

      <section class="tips-section">
        <h2>
          TOP
          <a
            href="https://outreachxpert.in/Marketing/smm/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#ff006a",
              color: "white",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            {" "}
            Social Media Marketing
          </a>
          Topics
        </h2>
        <div class="tips-container"></div>
      </section>

      <section class="topics-section">
        <h2>Social Media Tips & Strategies</h2>
        <div class="topics-container">
          <div class="topic-card">
            <img
              src="https://outreachxpert.in/wp-content/uploads/2025/03/optimised_image_300_200.png"
              width="200"
              height="200"
              alt="Optimize Profile"
            />
            <h3>Optimize Your Profile</h3>
            <p>
              Ensure your social media bio and images reflect your brand
              identity clearly and professionally.
            </p>
          </div>
          <div class="topic-card">
            <img
              src="https://outreachxpert.in/wp-content/uploads/2025/03/calender_text_200_200-removebg-preview.png"
              width="200"
              height="200"
              alt="Content Calendar"
            />
            <h3>Plan a Content Calendar</h3>
            <p>
              Create a consistent schedule for posting quality content that
              resonates with your audience.
            </p>
          </div>
          <div class="topic-card">
            <img
              src="https://outreachxpert.in/wp-content/uploads/2025/03/visual-removebg-preview-1.png"
              alt="Engaging Visuals"
              width="200"
              height="200"
            />
            <h3>Engaging Visuals</h3>
            <p>
              Use eye-catching graphics and videos to capture attention and
              drive engagement.
            </p>
          </div>
          <div class="topic-card">
            <img
              src="https://outreachxpert.in/wp-content/uploads/2025/03/data-analytics-removebg-preview.png"
              alt="Analyze Data"
              width="200"
              height="200"
            />
            <h3>Analyze Your Data</h3>
            <p>
              Utilize analytics to track performance and adjust strategies for
              optimal results.
            </p>
          </div>
          <div class="topic-card">
            <img
              src="https://outreachxpert.in/wp-content/uploads/2025/03/collaboration-removebg-preview-1_200_200.png"
              alt="Influencer Collaborations"
              width="200"
              height="200"
            />
            <h3>Influencer Collaborations</h3>
            <p>
              Partner with influencers to expand your reach and build trust with
              your target audience.
            </p>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <h2>Ready to Transform Your Social Media Presence?</h2>
        <h2>Contac us to improve your social media game!Free Call.</h2>
        <a href="https://outreachxpert.in/contact-us/" class="btn-primary">
          Contact Us Today
        </a>
        <a href="tel:+91 8527279527" class="btn-primary">
          Give A Free Call
        </a>
      </section>
    </>
  );
};

export default SMM;
