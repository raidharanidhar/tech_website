import React, { useState } from 'react';
import { ChevronRight, MapPin, Clock, Phone, Mail, MapPinIcon, Calendar, Users, Briefcase, Code, Database, TestTube, Settings, BarChart3, Shield, Cloud, Zap } from 'lucide-react';

import { Link } from 'react-router-dom';

// Career Component
const Careers = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const jobPositions = [
    { title: "Software Developer", location: "U.S", type: "Full-time" },
    { title: "Programmer Analyst", location: "Hyderabad", type: "Remote" },
    { title: "QA Tester", location: "U.S", type: "Hybrid" },
    { title: "DevOps Engineer", location: "Hyderabad", type: "Hybrid" },
    { title: "Project Manager", location: "Hyderabad", type: "Hybrid" },
    { title: "Java Full Stack Developer", location: "Hyderabad", type: "Hybrid" },
    { title: "Business Analyst", location: "U.S", type: "Full-time" },
    { title: "Solution Architect", location: "Hyderabad", type: "Hybrid" },
    { title: "Program Application Developer", location: "Hyderabad", type: "Remote" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <nav className="fixed top-0 text-white left-0 w-full z-50 bg-blue-800 shadow-md px-6 py-4 flex items-center justify-between">
      
      
                <div className="flex items-center">
                  <div className="text-xl font-bold">TechProjects</div>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  {/* <a href="/about" className="hover:text-gray-300">About Us</a> */}
                   <Link to="/home" className="hover:text-gray-300">
        Home
      </Link>
                  <Link to="/about" className="hover:text-gray-300">
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
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 flex items-center"
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
                className="hover:text-gray-300 flex items-center"
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
                className="hover:text-gray-300 flex items-center"
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
                  <Link to="/career" className="hover:text-gray-300">
        Career
      </Link>
      
                 <Link to="/ourclient" className="hover:text-gray-300">
        Blog/News
      </Link>
                 <Link to="/contact" className="hover:text-gray-300">
        Contact
      </Link>
                  
                </div>
              </nav>
      <section className="bg-gradient-to-br from-blue-50 to-purple-100 py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="w-1/2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-red-500"></div>
              <span className="text-gray-600 font-medium tracking-wide">CAREERS</span>
            </div>
            <h1 className="text-5xl font-bold text-blue-900 mb-6 leading-tight">
              Build the Future of<br />
              Technology With Us
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At TechProjects, we're more than just a workplace—we're a community of<br />
              innovators, problem solvers, and change makers.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center space-x-2">
              <span>View Open Positions</span>
              <span>→</span>
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-96 h-80 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-32 bg-white rounded-lg flex items-center justify-center shadow-lg transform -rotate-12">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-full mb-4 mx-auto"></div>
                    <div className="w-20 h-2 bg-yellow-400 rounded mb-2"></div>
                    <div className="w-16 h-1 bg-gray-300 rounded mb-1"></div>
                    <div className="w-12 h-1 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Opportunities</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work with U.S. and India hybrid teams across diverse industries.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Inclusive & Diverse</h3>
                <p className="text-gray-600 leading-relaxed">
                  A women-owned business committed to equality, collaboration, and respect.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation-Driven</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI, ML, automation, and product engineering projects that push boundaries.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Career Growth</h3>
                <p className="text-gray-600 leading-relaxed">
                  Learning programs, mentoring, and leadership opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at TechProjects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Life at TechProjects</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-4xl">
            We celebrate ideas, encourage experimentation, and support our people's personal and professional growth. From flexible work environments to global delivery exposure, your career journey with us is limitless.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-500"></div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-red-500"></div>
            <span className="text-gray-600 font-medium tracking-wide">WE ARE HIRING</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Join our team</h2>
          <p className="text-gray-600 text-lg mb-12">
            Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.
          </p>
          
          <div className="mb-8 flex flex-wrap gap-4">
            <div className="flex-1 min-w-64">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-32">
              <option>Location</option>
              <option>U.S</option>
              <option>Hyderabad</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-32">
              <option>Type</option>
              <option>Full-time</option>
              <option>Hybrid</option>
              <option>Remote</option>
            </select>
          </div>

          <div className="space-y-4">
            {jobPositions.map((job, index) => (
              <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                </div>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{job.type}</span>
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
                    View Job
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <button className="w-8 h-8 bg-gray-200 text-gray-600 rounded flex items-center justify-center">1</button>
              <button className="w-8 h-8 hover:bg-gray-100 text-gray-600 rounded flex items-center justify-center">2</button>
              <span className="text-gray-600">...</span>
              <button className="w-8 h-8 hover:bg-gray-100 text-gray-600 rounded flex items-center justify-center">9</button>
              <button className="w-8 h-8 hover:bg-gray-100 text-gray-600 rounded flex items-center justify-center">10</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-purple-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Your Next Career Starts Here</h2>
          <p className="text-xl mb-8 opacity-90">We're always looking for passionate, talented individuals to join our team.</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Apply Now
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Submit Resume
            </button>
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
export default Careers;