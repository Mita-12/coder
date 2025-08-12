import React from "react";
import OfferPage from "../Home/OfferPage";

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
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-[url('assets/affiliate4.jpg')] bg-cover bg-center bg-no-repeat"
        ></div>
      </div>

      {/* How It Works */}
      <div className=" py-12 px-4 sm:px-6 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl  font-extrabold text-center mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-800 text-transparent bg-clip-text">
              How It Works
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg p-8 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-blue-50 overflow-hidden"
              >
                {/* Decorative element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

                {/* Step number with gradient circle */}
                <div className="relative z-10 mb-6">
                  <div className="w-6 h-6 mx-auto bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg">
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
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900 pt-6">
            <span className="relative">
              How to Succeed as a
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Coder Affiliate</span>
          </h2>

        </div>

        {/* Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: "💻",
              title: "Dev Community Sharing",
              desc: "Post about Coder in forums like Dev.to, Reddit, or Stack Overflow.",
              color: "from-emerald-400 to-emerald-600"
            },
            {
              icon: "✉️",
              title: "Email Marketing",
              desc: "Include Coder in your newsletter campaigns and product updates.",
              color: "from-purple-400 to-purple-600"
            },
            {
              icon: "📝",
              title: "Technical Blogging",
              desc: "Create tutorials or comparisons featuring Coder on your blog.",
              color: "from-slate-400 to-slate-600"
            },
            {
              icon: "📧",
              title: "Bulk Email Marketing",
              desc: "Promote your Coder content through targeted email campaigns.",
              color: "from-fuchsia-400 to-fuchsia-600"
            },
            {
              icon: "🔍",
              title: "Google Ads Campaign",
              desc: "Run targeted search ads for developers looking for coding tools.",
              color: "from-blue-400 to-blue-600"
            },
            {
              icon: "📱",
              title: "Social Media Ads",
              desc: "Boost posts about Coder on Meta platforms (Facebook/Instagram).",
              color: "from-cyan-400 to-cyan-600"
            },
            {
              icon: "🔗",
              title: "Strategic Link Sharing",
              desc: "Share Coder links in relevant online communities and groups.",
              color: "from-violet-400 to-violet-600"
            },
            {
              icon: "🗣️",
              title: "Word-of-Mouth Marketing",
              desc: "Recommend Coder in conversations at meetups and conferences.",
              color: "from-amber-400 to-amber-600"
            },
            {
              icon: "🎥",
              title: "YouTube Content",
              desc: "Create video tutorials and share across social platforms.",
              color: "from-rose-500 to-rose-700"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.color}`}></div>

              <div className="flex items-start gap-5">
                {/* 3D effect icon container */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white text-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Floating action indicator */}
              {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div> */}

              {/* Subtle hover glow */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-br ${item.color} transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className=" p-6 mt-6">
        {/* Floating decorative elements */}
        <div className="absolute left-0 right-0 -top-20 h-40 w-full bg-blue-100/30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">

          {/* Section Header */}
          <div className="text-center mb-16 ">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">Why Join</span>
              <br />
              <span className="relative inline-block">
                The Coder Affiliate Program?
              </span>
            </h2>
            <p className="text-sm text-gray-600 max-w-3xl mx-auto mt-6">
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

              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Start Referring Developers</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>


            </button>
          </div>
        </div>
      </div>
      <OfferPage />
      {/* Removed decorative blobs */}
    </section >
  );
};

export default HeroSection;