import "./StylesSheets/Seo.css";
import Smm from "../Images/SMM1.webp"
import Smm2 from "../Images/smm2.jpg"
import Smm3 from "../Images/smm3.webp"
const SEO = () => {
  return (
  
  <>
     <header className="hero-seo">

        <h1>Boost Your Rankings with <span className="gradient-text">SEO</span></h1>
        <p>Increase visibility, drive traffic, and grow your business with our expert SEO strategies.</p>
        <a href="https://outreachxpert.in/contact-us/" className="btn-primary">Get a Free SEO Audit</a>
    </header>


    <section className="seo-info">
        <div className="seo-text">
            <h2>What is <span className="gradient-text">SEO?</span></h2>
            <p>Search Engine Optimization (SEO) is the process of improving your website's visibility in search
                engines like Google. The better your ranking, the more organic traffic you receive.</p>
        </div>
        <img className="seo_concept_image" src="https://outreachxpert.in/wp-content/uploads/2025/02/SEO_IMP.webp"
            alt="SEO Concept" width="800" height="344"/>
    
    </section>

    <section className="seo_solution">
        <h1>Out SEO Service</h1>
        <div className="solution_box">
            <div className="solution_box-1">
                <h2 className="color:black;">On-Page SEO </h2>
                <p>Optimizing individual web pages to improve their search engine rankings and attract more traffic.
                </p>
            </div>
            <div className="solution_box-1">
                <h2>Technical SEO</h2>
                <p>Optimizing the technical aspects of a website to improve its crawling and indexing by search engines.

                </p>
            </div>
            <div className="solution_box-1">
                <h2>Local SEO</h2>
                <p>Targeting local customers by optimizing a website for local search results.</p>
            </div>
            <div className="solution_box-1">
                <h2>E-Commerce SEO</h2>
                <p>Optimizing online stores to improve visibility and drive sales.
                </p>
            </div>
            <div className="solution_box-1">
                <h2>Social SEO</h2>
                <p>Optimizing social media profiles and content to improve visibility and rankings in search engines.
               </p>
            </div>
        </div>
    </section>

    <section className="seo-steps">
        <h1 style={{textAlign: "center"}}>How We Do <span className="gradient-text">SEO</span></h1>

        <div className="step">
            <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 1"/>
            <div className="step-text">
                <h3>Step 1: Website Analysis</h3>
                <p>We analyze your website's structure, speed, and content to identify areas for improvement.</p>
            </div>
        </div>

        <div className="step">
            <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 2"/>
            <div className="step-text">
                <h3>Step 2: Keyword Research</h3>
                <p>We find the best keywords for your niche to help rank your website higher.</p>
            </div>
        </div>

        <div className="step">
            <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 3"/>
            <div className="step-text">
                <h3>Step 3: On-Page Optimization</h3>
                <p>We optimize your site's content, meta tags, and images to improve SEO performance.</p>
            </div>
        </div>

        <div className="step">
            <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 4/"/>
            <div className="step-text">
                <h3>Step 4: Off-Page & Link Building</h3>
                <p>We build high-quality backlinks and improve your site's authority.</p>
            </div>
        </div>

        <div className="step">
            <img src="https://cdn-icons-png.flaticon.com/512/3500/3500833.png" alt="Step 5"/>
            <div className="step-text">
                <h3>Step 5: Performance Monitoring</h3>
                <p>We track and analyze performance to ensure continuous growth.</p>
            </div>
        </div>
    </section>

    {/* <!-- SEO-LATEST-POST --> */}
    {/* <h1 className="seo_1234_heading" style={{color:"rgb(0, 0, 0", textAlign: "center", marginTop: "10px",fontSize: "2rem"}}>
        Trending SEO Topics
    </h1>
    <section>

        <div className="seo_123">
            <ul className="seo_1233">
                 <div class="card_smm">
              <img class="card__img" src={Smm} alt="" />
              <div class="card__info">
                <h2
                  class="card__heading"
                  style={{
                    color: "black",
                    marginTop: "2px",
                    marginBottom: "0",
                    marginLeft: "2px;",
                  }}
                >
                 social media
                    platforms are an undeniably powerful medium 
                </h2>
                <div class="card__description">
                  <h5>
                    With over five billion users around the world, social media
                    platforms are an undeniably powerful medium for reaching a
                    wide audience and achieving your business growth goals.
                  </h5>
                </div>
                <a class="xplorebtn" href="" target="_blank">
                  Read More
                </a>
              </div>
            </div>
            </ul>
        </div>

    </section>  */}
    {/* <!-- SEO-LATEST-POST ^^^--> */}
    <br/>

    <section className="seo_faq">
        <h2>FAQ related to SEO</h2>

        <div className="faq-item">
            <div className="faq-item1">
                <h3>What are the 4 stages of SEO?</h3>

                <p>(Search Engine Optimization) is the process of improving a website so that it appears higher in
                    search engine results like Google</p>
            </div>
            <div className="faq-item1">
                <h3>Does My Business Need SEO?</h3>

                <p>Every businesses need SEO to thrive. Because many purchasing journeys involve search.</p>
            </div>
            <div className="faq-item1">
                <h3>How many types of on-page SEO are there?
                </h3>

                <p> On-page SEO can be broadly divided into three categories: content, HTML, and website architecture.
                </p>
            </div>
            <div className="faq-item1">
                <h3>What are the 4 stages of SEO?</h3>

                <p>(Search Engine Optimization) is the process of improving a website so that it appears higher in
                    search engine results like Google</p>
            </div>
        </div>

    </section>

    <section className="final-cta">
        <h1>Start Ranking Higher Today!</h1>
        <h2>Improve your website SEO ...</h2>

        <a href="tel:8527279527" className="btn-primary">Give a free Call</a>
        <a href="https://outreachxpert.in/connect-with-us/" className="btn-primary">Get a Free SEO Audit</a>

    </section>
      
  
  
  </>
  )
};

export default SEO;
