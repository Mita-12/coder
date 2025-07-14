import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaGithub,
    FaTwitter,
    FaDiscord,
    FaLinkedin,
    FaEnvelope,
    FaCode,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-indigo-600 text-white pt-16 pb-8 px-4 sm:px-6 relative overflow-hidden mt-10">
            {/* Decorative blobs - more subtle and modern */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
            <div className="absolute -bottom-40 left-0 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Info - More vibrant accent colors */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
                            <div className="flex items-center">
                                <FaCode className="h-8 w-8 text-cyan-400 mr-2" />
                                <h2 className="text-3xl font-bold text-white">                                Codder Affiliate

                                </h2>
                            </div>
                        </Link>
                        <p className="">
                            Empowering developers with cutting-edge coding tools and collaborative solutions to build the future.
                        </p>
                        <div className="flex space-x-5">
                            {[
                                { icon: <FaGithub />, color: "hover:text-gray-300", href: "https://github.com" },
                                { icon: <FaTwitter />, color: "hover:text-cyan-400", href: "https://twitter.com" },
                                { icon: <FaDiscord />, color: "hover:text-indigo-400", href: "https://discord.com" },
                                { icon: <FaLinkedin />, color: "hover:text-blue-400", href: "https://linkedin.com" },
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={` ${social.color} transition duration-300 transform hover:-translate-y-1 hover:scale-110`}
                                >
                                    {React.cloneElement(social.icon, { size: 20 })}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links - Improved hover states */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-cyan-500/30 pb-2 inline-flex items-center group">
                            Quick Links
                            <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                        </h3>
                        <ul className="space-y-3.5">
                            {[
                                { path: "/", label: "Home" },
                                { path: "/features", label: "Features" },
                                { path: "/documentation", label: "Docs" },
                                { path: "/pricing", label: "Pricing" },
                                { path: "/community", label: "Community" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className=" hover:text-white flex items-center group transition-all duration-200"
                                    >
                                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources - Consistent styling */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-cyan-500/30 pb-2 inline-flex items-center group">
                            Resources
                            <FiArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                        </h3>
                        <ul className="space-y-3.5">
                            {[
                                { path: "/blog", label: "Blog" },
                                { path: "/tutorials", label: "Tutorials" },
                                { path: "/api", label: "API" },
                                { path: "/status", label: "Status" },
                                { path: "/roadmap", label: "Roadmap" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className=" hover:text-white flex items-center group transition-all duration-200"
                                    >
                                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        <span className="group-hover:translate-x-1 transition-transform duration-200">
                                            {link.label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact - Better contrast */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-cyan-500/30 pb-2">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start group">
                                <div className="mt-1 mr-4 text-cyan-400 group-hover:text-white transition-colors">
                                    <FaMapMarkerAlt />
                                </div>
                                <span className="group-hover:text-white transition-colors">
                                    San Francisco, CA<br />United States
                                </span>
                            </li>
                            <li className="flex items-center group">
                                <div className="mr-4 text-cyan-400 group-hover:text-white transition-colors">
                                    <FaEnvelope />
                                </div>
                                <a href="mailto:hello@coder.dev" className="group-hover:text-white transition-colors">
                                    hello@coder.dev
                                </a>
                            </li>
                            <li className="flex items-center group">
                                <div className="mr-4 text-cyan-400 group-hover:text-white transition-colors">
                                    <FaCode />
                                </div>
                                <a href="https://github.com/coder/issues" target="_blank" rel="noopener noreferrer" className="group-hover:text-white transition-colors">
                                    GitHub Issues
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar - Cleaner styling */}
                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm order-2 md:order-1">
                        © {new Date().getFullYear()} Coder. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 order-1 md:order-2">
                        <Link to="/terms" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link to="/privacy" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/security" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                            Security
                        </Link>
                        <Link to="/cookies" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
                            Cookies
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;