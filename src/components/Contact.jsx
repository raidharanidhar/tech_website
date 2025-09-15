import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from "lucide-react"; 
import { Phone } from 'lucide-react';
import { MapPinIcon } from 'lucide-react';
import logo from "../assets/TechprojectsLogo.png"


const Contact = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
       <nav className="fixed top-0 left-0 text-white w-full z-50 bg-blue-800 shadow-md px-6 py-4 flex items-center justify-between">
       
       
                 <div className="flex">
                  <div className="text-xl">
                    <img src={logo}alt="TechProjects Logo" className="h-12 w-35" />
                  </div>
                 </div>
                 <div className="hidden md:flex items-center space-x-8">
                   {/* <a href="/about" className="hover:text-gray-300">About Us</a> */}
                    <Link to="/home" className="px-4 py-2 rounded hover:bg-red-600 flex items-center">
         Home
       </Link>
                   <Link to="/about" className="px-4 py-2 rounded hover:bg-red-600 flex items-center">
         About Us
       </Link>
                   {/* <div className="relative group">
                     <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 flex items-center">
                       Services
                       <ChevronRight className="ml-1 w-4 h-4" />
                     </button>
                   </div>
                   <div className="relative group">
                     <button className="hover:text-gray-300 flex items-center">
                       Industries
                       <ChevronRight className="ml-1 w-4 h-4" />
                     </button>
                   </div> */}
                   <div className="relative group">
               <button
                 onClick={() => toggleDropdown("services")}
                 className="px-4 py-2 rounded hover:bg-red-600 flex items-center"
               >
                 Services
                 <ChevronRight className="ml-1 w-4 h-4" />
               </button>
               <div
                 className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg ${
                   openDropdown === "services" ? "block" : "hidden"
                 }`}
               >
                 <ul className="py-2 text-gray-700">
                   <li>
                     <Link to="/ourservices" className="block px-4 py-2 hover:bg-gray-100">
                       Our Services
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/globalcapabilitycenter"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Global Capability Center
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/platformengineeringproductdevelopment"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Platform Engineering & Product Development
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/digitalstrategytransformation"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Digital Strategy Transformation
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/cybersecuritycompliance"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Cybersecurity Compliance
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/aiintelligentautomation"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       AI & Intelligent Automation
                     </Link>
                   </li>
                 </ul>
               </div>
             </div>
       
             {/* Industries Dropdown */}
             <div className="relative group">
               <button
                 onClick={() => toggleDropdown("industries")}
                 className="px-4 py-2 rounded hover:bg-red-600 flex items-center"
               >
                 Industries
                 <ChevronRight className="ml-1 w-4 h-4" />
               </button>
               <div
                 className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg ${
                   openDropdown === "industries" ? "block" : "hidden"
                 }`}
               >
                 <ul className="py-2 text-gray-700">
                   <li>
                     <Link
                       to="/governmentpublicsector"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Government & Public Sector
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/healthcarelifesciences"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Healthcare & Life Sciences
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/industriesweserve"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Industries We Serve
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/logisticssupplychain"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Logistics & Supply Chain
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/retailgrocery"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Retail & Grocery
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/financialservices"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       Financial Services
                     </Link>
                   </li>
                 </ul>
               </div>
             </div>
                   {/* ======================================================== */}
                   <div className="relative group">
               <button
                 onClick={() => toggleDropdown("casestudies")}
                 className="px-4 py-2 rounded hover:bg-red-600 flex items-center"
               >
                 Case Studies
                 <ChevronRight className="ml-1 w-4 h-4" />
               </button>
               <div
                 className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg ${
                   openDropdown === "casestudies" ? "block" : "hidden"
                 }`}
               >
                 <ul className="py-2 text-gray-700">
                   <li>
                     <Link
                       to="/deonyccybersecurity"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       DeoNyc-Cybersecurity 
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/insuranceclient"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                      InsuranceClient
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/maincasestudy"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       MainCaseStudy
                     </Link>
                   </li>
                   <li>
                     <Link
                       to="/wholesalegrocery"
                       className="block px-4 py-2 hover:bg-gray-100"
                     >
                       WholesaleGroceryLeader
                     </Link>
                   </li>
                   
                  
                 </ul>
               </div>
             </div>
                   {/* ======================================================== */}
                   <Link to="/career" className="px-4 py-2 rounded hover:bg-red-600 flex items-center">
         Career
       </Link>
       
                  <Link to="/ourclient" className="px-4 py-2 rounded hover:bg-red-600 flex items-center">
         Blog/News
       </Link>
                  <Link to="/contact" className="px-4 py-2 rounded hover:bg-red-600 flex items-center">
         Contact
       </Link>
                   
                 </div>
               </nav>
      <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="w-1/2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-red-500"></div>
              <span className="text-gray-600 font-medium tracking-wide">CASE STUDIES</span>
            </div>
            <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Let's Build the<br />
              Future Together
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              We're here to answer your questions, explore opportunities, and help<br />
              your business grow with scalable IT and talent solutions.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center space-x-2">
              <span>Contact Us</span>
              <span>→</span>
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="w-96 h-80 bg-gradient-to-br from-orange-100 to-blue-200 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{
                backgroundImage: "url('/api/placeholder/400/320')"
              }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-800 to-purple-900 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-8">Get in touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm mb-1">EMAIL US</p>
                    <p className="text-lg">info@techprojects.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm mb-1">PHONE NUMBER</p>
                    <p className="text-lg">+1-202-555-0138</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg">TechProjects (Dice IT Solutions, LLC)</p>
                    <p className="text-gray-300">5 Jill Court, Suite 10, Hillsborough, NJ</p>
                    <p className="text-gray-300">08844 U.S. Headquarters</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="w-full h-px bg-gray-600 mb-6"></div>
                <p className="text-gray-300 mb-4">Connect with us:</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center hover:bg-opacity-30 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-400 rounded flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">t</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">@</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-600 rounded flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">◉</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Subjects</label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  placeholder="Brand/Company/Product Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Message</label>
                <textarea
                  rows="6"
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                ></textarea>
              </div>
              
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-96 bg-green-100 relative">
              {/* Placeholder for map */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Hillsborough, NJ Area</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Connect</h3>
              <div className="flex space-x-6">
                <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-700 transition-colors">
                  in
                </div>
                <div className="w-12 h-12 bg-red-600 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:bg-red-700 transition-colors">
                  yt
                </div>
                <div className="w-12 h-12 bg-blue-400 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-500 transition-colors">
                  tw
                </div>
                <div className="w-12 h-12 bg-blue-800 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:bg-blue-900 transition-colors">
                  fb
                </div>
                <div className="w-12 h-12 bg-pink-600 rounded flex items-center justify-center text-white font-bold cursor-pointer hover:bg-pink-700 transition-colors">
                  ig
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">Looking for a partner to accelerate your business transformation?</h2>
          </div>
          <div className="ml-8">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Schedule a Call
            </button>
          </div>
          <div className="ml-8">
            <div className="w-48 h-32 bg-white bg-opacity-20 rounded-lg"></div>
          </div>
        </div>
      </section>
      <footer className="bg-slate-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-6 flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                TechProjects
              </div>
            </div>
            <div>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Industries We Serve</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-gray-300">
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog / Insights</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-4 font-semibold">Services</div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><a href="#" className="hover:text-white">Technology Practices</a></li>
                <li><a href="#" className="hover:text-white">IT Staffing Services</a></li>
                <li><a href="#" className="hover:text-white">Specialized Business Solutions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-12 pt-8 flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              @ @ Copyright 2021 TechProjects. All rights reserved. | Terms of Service | Privacy Policy | Manage Cookies
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.16-1.507-.7-2.448-2.78-2.448-4.958 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-12.014C24.007 5.36 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;