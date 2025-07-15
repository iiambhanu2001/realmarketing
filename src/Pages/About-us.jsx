import "./StylesSheets/About-us.css"



const AboutUs = () => {
  return (
<>

    <div className="hero-about">
        <div className="hero-content">
            <h1>Who We Are & <span className="gradient-text">What We Do</span></h1>
            <p>Empowering businesses with expert SEO, SMM, and Digital Marketing strategies.</p>
            <div className="hero-buttons">
                <a href="https://outreachxpert.in/connect-with-us/" target="_blank" rel="noopener noreferrer"
                    className="btn-primary">Explore Our Services</a>
                <a href="tel:8527279527" className="btn-secondary">Get In Touch</a>

            </div>
        </div>
    </div>

    <section className="our-story">
        <div className="story-content">
            <h2>Our Story</h2>
            <p>We are a passionate team of digital marketers, helping businesses grow through strategic SEO, social
                media marketing, and online branding. We are passionate about innovation, creativity, and delivering
                results. Our mission is to transform ideas into reality.

                We are passionate about innovation, creativity, and delivering results. Our mission is to transform
                ideas into reality.

            </p>
        </div>
    </section>


    <section className="our-expertise">
        <h2>What We Offer</h2>
        <div className="expertise-cards">
            <div className="card-aboutus">
                <h3>SEO Optimization</h3>
                <p>Boost your search rankings and gain more organic traffic.</p>
            </div>
            <div className="card-aboutus">
                <h3>Social Media Marketing</h3>
                <p>Engage with your audience through targeted social media campaigns.</p>
            </div>
            <div className="card-aboutus">
                <h3>Complete Digital Strategy</h3>
                <p>Plan and execute a full digital marketing roadmap.</p>
            </div>
        </div>
    </section>


    <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-cards">
            <div className="testimonial-card">
                <p>"Their SEO strategies helped our business rank #1 on Google!"</p>
                <h4>- Happy Client</h4>
            </div>
            <div className="testimonial-card">
                <p>"Their SMM strategies helped our business rank #1 on Google!"</p>
                <h4>- Gooday Client</h4>
            </div>
            <div className="testimonial-card">
                <p>"Their DM strategies helped our business rank #1 on Google!"</p>
                <h4>- KingKong Client</h4>
            </div>
        </div>
    </section>


    <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
            <div className="team-member">
                <img src="https://outreachxpert.in/wp-content/uploads/2024/11/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.webp"
                    alt="Team Member"/>
                <h4>Bhanu Pratap</h4>
                <p>Web Developer/Web Developer</p>
            </div>
            <div className="team-member">
                <img src="https://outreachxpert.in/wp-content/uploads/2024/11/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.webp"
                    alt="Team Member"/>
                <h4>John Cena</h4>
                <p>Product Manager and CEO </p>

            </div>
            <div className="team-member">
                <img src="https://outreachxpert.in/wp-content/uploads/2024/11/created-random-people-using-chatgpt-midjourney-do-you-know-v0-q1aa450i5dqb1.webp"
                    alt="Team Member"/>
                <h4>King Kong</h4>
                <p>Web Designer Web Designer</p>

            </div>
        </div>
    </section>

    <section className="final-cta">
        <h2>Let’s Grow Your Business Together!</h2>
        <a href="#" className="btn-primary">Start a Project</a>
    </section>

</>


  );
};

export default AboutUs;
