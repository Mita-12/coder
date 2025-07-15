import React from "react";

const OfferPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="text-center py-10">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 ">
          Developer Growth Solutions
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto">
          Accelerate your development workflow with our curated tools and monetization opportunities
        </p>
      </div>

      {/* Four Offer Sections */}

      {/* Offer 1: Code Scripts/UIUX Tools - Image Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Code editor with React components"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Development Tools
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Premium Code & UI/UX Assets</h2>
            <p className="text-lg text-blue-600 mb-6">Boost your productivity with our handcrafted development resources.</p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700">Production-ready React, Vue, and Angular components</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700">Custom UI kits with full documentation</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700">Optimized JavaScript and CSS snippets for performance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-blue-700">Complete Figma and Sketch design systems</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                Browse Assets
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
                Learn More
              </button>
            </div>

            <div className="mt-6 text-sm text-blue-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Earn 25% commission promoting these products
            </div>
          </div>
        </div>
      </div>

      {/* Offer 2: Subscription Tools - Image Right */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Services
              </div>
              <h2 className="text-3xl font-bold text-purple-900 mb-4">Essential Developer Subscriptions</h2>
              <p className="text-lg text-purple-600 mb-6">Professional-grade services that help you build, deploy, and scale applications.</p>

              <div className="mb-6 p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
                <h3 className="font-bold text-purple-800 mb-1">Developer Favorite</h3>
                <p className="text-purple-700">API services, cloud hosting, and monitoring tools</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700">Premium cloud hosting and serverless platforms</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700">Automated CI/CD pipelines with zero config</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700">Managed database and storage solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-purple-700">Real-time performance monitoring and analytics</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                  View Subscriptions
                </button>
                <button className="bg-white border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
                  Pricing Details
                </button>
              </div>

              <div className="mt-6 text-sm text-purple-500 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Earn recurring commissions up to 30%
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Cloud services dashboard"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Offer 3: Advertising Solutions - Image Left */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Advertising analytics dashboard"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <div className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
              Monetization
            </div>
            <h2 className="text-3xl font-bold text-amber-900 mb-4">Developer Advertising Network</h2>
            <p className="text-lg text-amber-600 mb-6">Maximize revenue from your tech audience with our premium ad solutions.</p>

            <div className="flex items-start mb-6 bg-white p-4 rounded-lg border border-amber-200 shadow-sm">
              <div className="bg-amber-100 text-amber-800 p-3 rounded-lg mr-4 flex-shrink-0">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-amber-800">Premium CPM Rates</h3>
                <p className="text-amber-700">Developer-focused ads convert better and pay more</p>
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-amber-700">Contextual tech ads that match your content</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-amber-700">Native content integrations that don't disrupt UX</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-amber-700">Newsletter and email sponsorships</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-amber-700">Podcast and video advertising solutions</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                Monetize Your Traffic
              </button>
              <button className="bg-white border border-amber-600 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
                See Case Studies
              </button>
            </div>

            <div className="mt-6 text-sm text-amber-500 flex items-center">
              <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Average $8-12 RPM for quality tech content
            </div>
          </div>
        </div>
      </div>

      {/* Offer 4: Domain Offer - Image Right */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                Web Presence
              </div>
              <h2 className="text-3xl font-bold text-green-900 mb-4">Premium Developer Domains</h2>
              <p className="text-lg text-green-600 mb-6">Secure the perfect domain for your developer brand or project.</p>

              <div className="mb-6 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                <h3 className="font-bold text-green-800 mb-1">Exclusive Developer Domains</h3>
                <p className="text-green-700">Handpicked domains perfect for tech startups and developer tools</p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700">Short, memorable .com and .dev domains</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700">Tech-related keyword domains (api, dev, cloud, etc.)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700">Complete domain + hosting packages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-700">Domain management and transfer assistance</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                  Browse Domains
                </button>
                <button className="bg-white border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md">
                  Domain Search
                </button>
              </div>

              <div className="mt-6 text-sm text-green-500 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Limited inventory - premium domains available
              </div>
            </div>
            <div className="order-1 md:order-2 rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
                alt="Domain registration interface"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Unified CTA Section */}
      <div className="bg-blue-700 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Developer Business?</h2>
          <p className="text-xl text-blue-200 mb-8 max-w-3xl mx-auto">
            Join thousands of developers who are building better products and monetizing their expertise with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white hover:bg-blue-100 text-blue-800 px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
              Get Started Now
            </button>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;