import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>
          Rajasekar T - Front End Developer and Hybrid Mobile Application
          Developer Chennai, India
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="resume-header">
          <div className="row">
            <div className="col-12 col-sm-3 text-center">
              <img
                src="/rajasekar-thangavel.png"
                className="img-fluid profile-image"
                alt="Rajasekar Thangavel"
              />
            </div>
            <div className="col-12 col-sm-9">
              <h1>RAJASEKAR THANGAVEL</h1>
              <p className="tag-line">Front End Developer</p>
              <p className="resume-description">
                Front End Developer &amp; Hybrid Mobile Application developer
                with 8+ years of professional experience, with innovation,
                design, coding standards on the web application and cross
                platform mobile application. Expertise in shopify ecommerce
                theme development.
              </p>{" "}
              <p>
                <strong>Specialties</strong> : HTML5, CSS3, VueJS, ReactJS,
                NodeJS, Angular 2 , EmberJS, Phonegap(Cordova), jQuery, jQuery
                Mobile, Bootstrap Responsive Framework, Single page application
                development, LESS, SASS, Javascript, Responsive design,
                Wordpress Template design, Woocommerce Customization from PSD,
                Shopify Customization, Semantic code structure, Adobe Photoshop
                &amp; Illustraor Layout and wireframe creation and Minimalist
                design, Shopify Theme development
              </p>
            </div>
          </div>
        </section>
        <section className="profile-details-section">
          <div className="row">
            <div className="col-12 col-sm-6 bordered-line">
              <h2 className="pd-section-heading technical-skill-icon font-awesome-icon">
                TECHNICAL SKILLS
              </h2>
              <ul className="ordered-list">
                <li>Javascript</li>
                <li>HTML5 &amp; CSS3</li>
                <li>JS Frameworks : ReactJS, VueJS &amp; Angular</li>
                <li>Mobile Framework: Ionic, Cordova</li>
                <li>Cloud : AWS, DigitalOcean</li>
                <li>Backend : NodeJS, Express, Python (Avid Learner)</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <h2 className="pd-section-heading education-icon font-awesome-icon">
                EDUCATION
              </h2>
              <div className="edu-section">
                <h3>2004 - 2007</h3>
                <p className="college">Thaigarajar Polytechnic Colleges </p>
                <p>Diplomo in Computer Science Engineering</p>
              </div>
              <div className="edu-section">
                <h3>2007 - 2010</h3>
                <p className="college">
                  Vel Tech MultiTech - Anna University Affiliated
                </p>
                <p>Bachelor of Computer Science Engineering</p>
              </div>
            </div>
          </div>
        </section>
        <div className="bottom-bordered"></div>
        <section>
          <h2 className="pd-section-heading work-experince-icon font-awesome-icon">
            WORK EXPERIENCE
          </h2>
          <div className="work-exp-sec">
            <h2>HCL Technologies, Chennai - Current Company</h2>
            <h3>Technical Lead</h3>
            <h4>Roles and Responsibility</h4>
            <ul className="ordered-list">
              <li>Developing cabin management system</li>
              <li>
                Scratch development using Vue.js(VUEJS), Hybrid mobile
                development, ES6, Websocket communication
              </li>
              <li>Service layer using NodeJS and MongoDB</li>
              <li>SAFe methodology for daily activities</li>
            </ul>
          </div>
          <div className="work-exp-sec">
            <h2>Virtusa Consulting Services [Mar 2016 - Dec 2018] </h2>
            <h3>Consultant</h3>
            <h4>Roles and Responsibility</h4>
            <ul className="ordered-list">
              <li>
                Worked in UI Development and Hybrid Mobile app development using
                Cordova
              </li>
              <li>
                Using ReactJS as front end layer and NodeJS as a service layer
              </li>
              <li>
                Key Accounts : PayPal, Standard Chartered Bank SG, British
                Telecom
              </li>
            </ul>
          </div>
          <div className="work-exp-sec">
            <h2>Capgemini Consulting [Dec 2014 - Mar 2016] </h2>
            <h3>Consultant</h3>
            <h4>Roles and Responsibility</h4>
            <ul className="ordered-list">
              <li>
                Developing enterprise mobile application using HTML5, CSS3,
                Javascript, Apache Cordova, jQuery Mobile, Bootstrap and
                Angularjs to supports major mobile platforms iPhone and Android.
              </li>
              <li>Key Accounts : Aegon Life Insurance, P&amp;G Research</li>
            </ul>
          </div>
          <div className="work-exp-sec">
            <h2>Tenovia E-Commerce [Jan 2014 - Nov 2014] </h2>
            <h3>Software Engineer</h3>
            <h4>Roles and Responsibility</h4>
            <ul className="ordered-list">
              <li>
                Integrating visual design into major eCommerce platform like
                Magento, Bigcommerce, Shopify and Woocommerce
              </li>
              <li> Functionality development using jQuery and Javascript</li>
              <li>
                Convert visuals to HTML layer using Bootstrap framework followed
                by semantically code structure and SEO guidelines
              </li>
              <li>
                Responsive web design followed to support mobile, tablet and
                desktops
              </li>
            </ul>
          </div>
          <div class="bottom-bordered"></div>
        </section>
      </main>

      <footer>
        <div class="row">
          <div className="col">
            <p>Rajasekar Thangavel &copy; 2021</p>
          </div>
          <div className="col credits-logo text-right">
            <a href="https://nextjs.org/" target="_blank">
              <img src="/nextjs-logo.svg" title="credits" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
