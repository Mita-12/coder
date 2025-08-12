import React from "react";

const OfferPage = () => {
  // CSS variables for consistent styling
  const styles = {
    heading: "text-4xl  font-bold mb-6 leading-tight",
    subheading: "text-sm  mb-8 max-w-3xl mx-auto leading-relaxed",
    paragraph: "text-lg  mb-6 leading-relaxed",
    listItem: "flex items-start mb-4",
    listIcon: "h-6 w-6 mr-3 mt-0.5 flex-shrink-0",
    card: "p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300",
    buttonPrimary: "px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-md hover:shadow-lg",
    buttonSecondary: "px-8 py-3 rounded-lg font-medium text-lg border-2 transition-colors shadow-sm hover:shadow-md",
    image: "w-full h-auto object-cover rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300"
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="text-center py-8 md:py-10">
        <h1 className={`${styles.heading} text-blue-900`}>
          Developer Growth Solutions
        </h1>
        <p className={`${styles.subheading} text-blue-600`}>
          Accelerate your development workflow with our curated tools and monetization opportunities
        </p>
      </div>

      {/* Four Offer Sections */}

      {/* Offer 1: Code Scripts/UIUX Tools - Image Left */}
      <div className="max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Code editor with React components"
              className={`${styles.image} aspect-video`}
              loading="lazy"
            />
          </div>
          <div>
            <h2 className={`${styles.heading} text-blue-900`}>Premium Code & UI/UX Assets</h2>
            <p className={`${styles.paragraph} text-blue-600`}>Boost your productivity with our handcrafted development resources that save you hundreds of hours.</p>

            <ul className="">
              <li className={styles.listItem}>
                <svg className={`${styles.listIcon} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700 text-sm">Production-ready React, Vue, and Angular components with TypeScript support</span>
              </li>
              <li className={styles.listItem}>
                <svg className={`${styles.listIcon} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700 text-sm">Custom UI kits with comprehensive documentation and design tokens</span>
              </li>
              <li className={styles.listItem}>
                <svg className={`${styles.listIcon} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700 text-sm">Optimized JavaScript and CSS snippets for maximum performance</span>
              </li>
              <li className={styles.listItem}>
                <svg className={`${styles.listIcon} text-blue-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700 text-sm">Complete Figma and Sketch design systems with auto-layout components</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4 mb-6">
              <button className={`${styles.buttonPrimary} bg-blue-600 hover:bg-blue-700 text-white`}>
                Browse Assets
              </button>
              <button className={`${styles.buttonSecondary} border-blue-600 text-blue-600 hover:bg-blue-50`}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Offer 2: Subscription Tools - Image Right */}
      <div className="bg-blue-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="md:order-1">
             
              <h2 className={`${styles.heading} text-purple-900`}>Essential Developer Subscriptions</h2>
              <p className={`${styles.paragraph} text-purple-600`}>Professional-grade services that help you build, deploy, and scale applications efficiently.</p>


              <ul className="">
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-purple-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700 text-lg">Premium cloud hosting and serverless platforms with auto-scaling</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-purple-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700 text-lg">Automated CI/CD pipelines with zero configuration required</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-purple-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700 text-lg">Managed database and storage solutions with daily backups</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-purple-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700 text-lg">Real-time performance monitoring and analytics dashboards</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4 mb-6">
                <button className={`${styles.buttonPrimary} bg-purple-600 hover:bg-purple-700 text-white`}>
                  View Subscriptions
                </button>
                <button className={`${styles.buttonSecondary} border-purple-600 text-purple-600 hover:bg-purple-50`}>
                  Pricing Details
                </button>
              </div>
            </div>
            <div className="md:order-2">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Cloud services dashboard"
                className={`${styles.image} aspect-video`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Offer 3: Domain Offer - Image Left */}
      <div className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Domain registration"
                className={`${styles.image} aspect-video`}
                loading="lazy"
              />
            </div>
            <div>
              
              <h2 className={`${styles.heading} text-green-900`}>Premium Developer Domains</h2>
              <p className={`${styles.paragraph} text-green-600`}>Secure the perfect domain for your developer brand or project with our curated selection.</p>

              <ul className="">
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-green-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700 text-lg">Short, memorable .com and .dev domains with tech relevance</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-green-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700 text-lg">Tech-related keyword domains (api, dev, cloud, etc.)</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-green-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700 text-lg">Complete domain + hosting packages with SSL included</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-green-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700 text-lg">Domain management and transfer assistance with 24/7 support</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <button className={`${styles.buttonPrimary} bg-green-600 hover:bg-green-700 text-white`}>
                  Browse Domains
                </button>
                <button className={`${styles.buttonSecondary} border-green-600 text-green-600 hover:bg-green-50`}>
                  Domain Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offer 4: Advertising Solutions - Image Right */}
      <div className="bg-blue-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="md:order-1">
             
              <h2 className={`${styles.heading} text-amber-900`}>Developer Advertising Network</h2>
              <p className={`${styles.paragraph} text-amber-600`}>Maximize revenue from your tech audience with our premium ad solutions tailored for developers.</p>

              <ul className="">
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-amber-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-amber-700 text-lg">Contextual tech ads that match your content and audience</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-amber-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-amber-700 text-lg">Native content integrations that don't disrupt user experience</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-amber-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-amber-700 text-lg">Newsletter and email sponsorships with premium advertisers</span>
                </li>
                <li className={styles.listItem}>
                  <svg className={`${styles.listIcon} text-amber-500`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-amber-700 text-lg">Podcast and video advertising solutions with dedicated account managers</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <button className={`${styles.buttonPrimary} bg-amber-600 hover:bg-amber-700 text-white`}>
                  Monetize Your Traffic
                </button>
                <button className={`${styles.buttonSecondary} border-amber-600 text-amber-600 hover:bg-amber-50`}>
                  See Case Studies
                </button>
              </div>
            </div>
            <div className="md:order-2">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Advertising analytics dashboard"
                className={`${styles.image} aspect-video`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Unified CTA Section */}
      {/* <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={`${styles.heading} mb-8`}>Ready to Grow Your Developer Business?</h2>
          <p className={`${styles.subheading} text-blue-100`}>
            Join thousands of developers who are building better products and monetizing their expertise with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <button className={`${styles.buttonPrimary} bg-white hover:bg-blue-100 text-blue-800 px-10 py-4`}>
              Get Started Now
            </button>
            <button className={`${styles.buttonSecondary} border-white text-white hover:bg-blue-700 px-10 py-4`}>
              Contact Sales
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OfferPage;