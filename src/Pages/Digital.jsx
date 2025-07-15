import "./StylesSheets/Digital.css"

const Digital = () => {
  return (
   <>
   
    <header className="hero">
        <h1>Grow Your Business with <span className="gradient-text">Digital Marketing</span></h1>
        <p style={{color: "#ffffff"}}>We drive traffic, boost conversions, and increase brand awareness with cutting-edge
            strategies.</p>
        <a href="https://outreachxpert.in/contact-us/" className="btn-primary">Get a Free Consultation</a>
    </header>

    <section className="info">
        <div className="info-text">
            <h2>What is <span className="gradient-text">Digital Marketing?</span></h2>
            <p>Digital Marketing is the process of promoting businesses online using various digital channels like
                search engines, social media, email marketing, and paid ads.</p>
        </div>
        <img src="https://outreachxpert.in/wp-content/uploads/2025/02/digital_marketing_img_00-1-1024x576-1.jpg"
            alt="Digital Marketing" width="800" height="354"/>
    </section>


    <section className="services">
        <h2 style={{textAlign: "center"}}>Our Digital Marketing Services</h2>
        <div className="service-boxes">
            <div className="service-card">
                <h2 style={{color: "#000000"}}>SEO Optimization</h2>
                <p className="service-card-paragraph"> SEO targets unpaid search traffic rather than direct traffic,
                    referral traffic, social media traffic, or paid traffic.</p>
            </div>
            <div className="service-card">
                <h2 style={{color:"#000000"}}>Social Media Marketing</h2>
                <p className="service-card-paragraph">Social media marketing is the use of social media platforms and
                    websites to promote a product or service. </p>

            </div>
            <div className="service-card">
                <h2 style={{color:"#000000"}}>PPC Advertising</h2>
                <p className="service-card-paragraph">Pay-per-click is an internet advertising model used to drive traffic
                    to websites, in which an advertiser pays a publisher when the ad is clicked. </p>
            </div>
            <div className="service-card">
                <h2 style={{color: "#000000;"}}>Content Marketing</h2>
                <p className="service-card-paragraph">Content marketing is a form of marketing focused on creating,
                    publishing, and distributing content for a targeted audience online.
                </p>
            </div>
            <div className="service-card">
                <h2 style={{color:"#000000;"}}>Email Marketing</h2>
                <p className="service-card-paragraph">Email marketing is the act of sending a commercial message, typically
                    to a group of people, using email.</p>
            </div>
        </div>
    </section>

    <section className="steps">
        <h1>How We <span className="gradient-text">Work??</span></h1>

        <div className="steps12">
            <div className="step">
                <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 1"/>
                <div className="step-text">
                    <h3>Step 1: Market Research</h3>
                    <p>We analyze industry trends and audience behavior to develop a data-driven marketing plan.</p>
                </div>
            </div>

            <div>

            </div>

            <div className="step">
                <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 3"/>
                <div className="step-text">
                    <h3>Step 3: Campaign Execution</h3>
                    <p>We implement targeted campaigns across various digital channels.</p>
                </div>
            </div>
            <div className="arrow-step">
                <img src="https://outreachxpert.in/wp-content/uploads/2025/02/arrow-left-e1739269393356.png" alt=""/>
            </div>
            <div className="step">
                <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 2"/>
                <div className="step-text">
                    <h3>Step 2: Strategy Development</h3>
                    <p>We create a customized marketing strategy tailored to your business goals.</p>
                </div>
            </div>
            <div className="arrow-step">
                <img src="https://outreachxpert.in/wp-content/uploads/2025/02/arrow-left-1-e1739270094105.png" alt=""/>
            </div>
        </div>
        <div className="steps-scroll"></div>
    </section>
    <br/>
    <div className="grid">
        <h1 className="grid-dig-h1">Top Digital Marketing Topics</h1>
      <br/>
        <div className="two">


        </div>


    </div>
   <br/>
    <section className="faq">

        <h2>Frequently Asked Questions</h2>
        <div className="faq-items-que">
            <div className="faq-item">
                <h3>How long does it take to see results?</h3>
                <p>It depends on the strategy, but most campaigns see improvement within 3-6 months.</p>
            </div>
            <div className="faq-item">
                <h3>How long does it take to see results?</h3>
                <p>It depends on the strategy, but most campaigns see improvement within 3-6 months.</p>
            </div>
            <div className="faq-item">
                <h3>How long does it take to see results?</h3>
                <p>It depends on the strategy, but most campaigns see improvement within 3-6 months.</p>
            </div>
            <div className="faq-item">
                <h3>How long does it take to see results?</h3>
                <p>It depends on the strategy, but most campaigns see improvement within 3-6 months.</p>
            </div>
        </div>
    </section>
    <section className="final-cta">
        <h2>Grow your Business by 10x</h2>
        <h2>Start Growing Your Business Today!</h2>
        <a href="https://outreachxpert.in/contact-us/" className="btn-primary">Get a Free Consultation</a>
    </section>
   <br/>
   </>
  
  );
};

export default Digital;
