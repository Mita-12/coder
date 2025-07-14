import React from "react";
import OfferPage from "../pages/OfferPage";

const HeroSection = () => {
  const steps = [
    {
      number: "1",
      title: "Join the program",
      description: "Any developer can become an affiliate. Join by creating your unique referral link.",
    },
    {
      number: "2",
      title: "Promote Coder",
      description: "Share your referral link in your content, tutorials, or with your network.",
    },
    {
      number: "3",
      title: "Earn rewards",
      description: "Earn 25% commission for every paid subscription you refer.",
    },
  ];

  return (
    <section className="w-full overflow-hidden text-white">
      <div className="w-full bg-indigo-700  mb-20 rounded-xl shadow-2xl overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center px-6 py-12 lg:py-8">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
              Boost Your Income with{" "}
              <span className="bg-gradient-to-r from-blue-300 to-blue-500 text-transparent bg-clip-text">
                Developer Affiliate Program
              </span>
            </h1>
            <p className="text-lg md:text-xl text-indigo-100 mb-8 leading-relaxed">
              Promote <span className="font-bold text-white">Coder</span>, earn recurring commissions, and support the developer community. Join now and get a{" "}
              <span className="font-bold text-blue-300">25% lifetime commission</span> on every referral—no limits, no expiration.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-400 hover:bg-blue-300 text-indigo-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105">
                Join Now
              </button>
              <button className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-indigo-900 font-semibold py-3 px-6 rounded-full transition-all">
                Learn More
              </button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img className="w-10 h-10 rounded-full border-2 border-indigo-800" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Affiliate" />
                <img className="w-10 h-10 rounded-full border-2 border-indigo-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Affiliate" />
                <img className="w-10 h-10 rounded-full border-2 border-indigo-800" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Affiliate" />
              </div>
              <p className="ml-4 text-indigo-200">
                <span className="font-semibold text-white">1,000+</span> developers already earning
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform">
              <img
                src="https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
                alt="Developer working on laptop"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-blue-400 text-indigo-900 font-bold px-5 py-2 rounded-lg shadow-lg z-20">
              Earn Passive Income
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className=" py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white rounded-xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-800 text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-50 overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

                {/* Step number with gradient circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {step.description}
                </p>

                {/* Decorative icon (optional) */}
                <div className="text-blue-400 opacity-20 group-hover:opacity-30 transition-opacity absolute -bottom-4 -right-4">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-gradient-to-b from-blue-50 to-white  rounded-t-3xl ">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 pt-6">
              <span className="relative">
                How to Succeed as a
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Coder Affiliate</span>
            </h2>

          </div>

          {/* Strategy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Share in Dev Communities",
                desc: "Post about Coder in forums like Dev.to, Reddit, or Stack Overflow.",
                color: "from-emerald-400 to-emerald-600"
              },
              {
                icon: "📝",
                title: "Write Technical Articles",
                desc: "Create tutorials or comparisons featuring Coder on your blog.",
                color: "from-slate-400 to-slate-600"
              },
              {
                icon: "📱",
                title: "Social Media Posts",
                desc: "Tweet about your Coder experiences or share on LinkedIn.",
                color: "from-cyan-400 to-cyan-600"
              },
              {
                icon: "🎥",
                title: "Create Video Content",
                desc: "Make YouTube tutorials or live coding sessions using Coder.",
                color: "from-rose-500 to-rose-700"
              },
              {
                icon: "👨‍💻",
                title: "Recommend to Colleagues",
                desc: "Share with your workplace or coding bootcamp students.",
                color: "from-amber-400 to-amber-600"
              },
              {
                icon: "📊",
                title: "Add to Resource Lists",
                desc: "Include Coder in your curated lists of developer tools.",
                color: "from-indigo-400 to-indigo-600"
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color}`}></div>

                <div className="flex items-start gap-6">
                  {/* Gradient icon circle */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} text-white text-2xl flex items-center justify-center shadow-md`}>
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white p-6 rounded-t-3xl mt-6">
        {/* Floating decorative elements */}
        <div className="absolute left-0 right-0 -top-20 h-40 w-full bg-blue-100/30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">

          {/* Section Header */}
          <div className="text-center mb-16 ">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Why Join</span>
              <br />
              <span className="relative inline-block">
                The Coder Affiliate Program?
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Join thousands of developers earning recurring commissions by sharing the tools they love
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                emoji: "⚡",
                title: "Top Developer Platform",
                desc: "Promote the most trusted cloud development environment used by Fortune 500 companies",
                color: "from-purple-500 to-indigo-500"
              },
              {
                emoji: "💰",
                title: "High Commissions",
                desc: "Earn 25% recurring commission from every subscription you refer",
                color: "from-amber-400 to-amber-500"
              },
              {
                emoji: "🛠️",
                title: "Premium Resources",
                desc: "Get code samples, demo projects, and marketing assets designed for developers",
                color: "from-blue-400 to-blue-500"
              },
              {
                emoji: "📊",
                title: "Real-Time Analytics",
                desc: "Track clicks, conversions, and earnings in your personalized dashboard",
                color: "from-emerald-400 to-emerald-500"
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Gradient top accent */}
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${card.color}`}></div>

                {/* Emoji with gradient background */}
                <div className={`w-16 h-16 ${card.color} bg-gradient-to-br text-white text-3xl flex items-center justify-center rounded-xl mb-6 mx-auto shadow-md`}>
                  {card.emoji}
                </div>

                <h3 className="text-xl font-bold text-center text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {card.desc}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          {/* <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">25%</div>
                <div className="text-blue-100">Commission Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">$5K+</div>
                <div className="text-blue-100">Top Monthly Earners</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">90d</div>
                <div className="text-blue-100">Cookie Duration</div>
              </div>
              <div>
                <div className="text-3xl md:text-5xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div> */}
          <div className="text-center mt-10">
            <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Start Referring Developers</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              {/* Pulsing animation */}
              <span className="absolute -inset-2 rounded-full bg-blue-400/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </button>
          </div>
        </div>
      </div>
      <OfferPage />
      {/* Removed decorative blobs */}
    </section>
  );
};

export default HeroSection;