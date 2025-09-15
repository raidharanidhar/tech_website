import React from 'react';
import { ChevronRight, MapPin, Stethoscope, Truck, CreditCard, Youtube, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/TechprojectsLogo.png"


const IndustriesWeServe = () => {
   const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 text-white left-0 w-full z-50 bg-blue-800 shadow-md px-6 py-4 flex items-center justify-between">
      
      
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-100 via-blue-50 to-purple-100 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-gray-300 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-4 border-gray-300 rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 border-4 border-gray-300 rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 border-4 border-gray-300 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-red-500 font-semibold mb-4 tracking-wider">
              — WHERE TECHNOLOGY MEETS INDUSTRY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From retail to public sector, healthcare to finance, we deliver solutions built around the unique needs of each industry.
            </p>
          </div>
        </div>

        {/* Wave Pattern */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              {/* Decorative Dots */}
              <div className="absolute -left-8 top-8 grid grid-cols-6 gap-2 opacity-30">
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i} className="w-2 h-2 bg-gray-400 rounded-full"></div>
                ))}
              </div>
              
              {/* Main Image Container */}
              <div className="relative bg-red-500 rounded-3xl p-6 transform rotate-3">
                <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                  <img 
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y3ZjdmNyIvPgogIDx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM2NjY2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkNvbGxhYm9yYXRpdmUgVGVhbTwvdGV4dD4KPC9zdmc+"
                    alt="Team collaboration"
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div>
              <div className="text-red-500 font-semibold mb-4 tracking-wider">—</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Industries We Serve
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At TechProjects, we understand that every industry has its own challenges. That's why we combine technology expertise, domain knowledge, and innovation to deliver solutions that fit your business — not the other way around.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We work with enterprises across retail, government, healthcare, logistics, and financial services, helping them modernize, secure, and scale with confidence. Whether it's AI-powered automation, digital transformation, or cybersecurity, our solutions are designed to create measurable impact in every sector we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Industries Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Focus Industries</h2>
          <p className="text-gray-600 mb-12 max-w-4xl">
            We offer comprehensive technology services—from digital transformation and consulting to infrastructure, security, and staffing—designed to support and scale your business efficiently.
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Industry List */}
            <div className="space-y-6">
              <div className="bg-red-500 text-white p-4 rounded-lg flex items-center justify-between hover:bg-red-600 transition-colors cursor-pointer">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white bg-opacity-20 rounded mr-3"></div>
                  <span className="font-semibold">Retail & Grocery</span>
                </div>
                <ChevronRight className="w-5 h-5" />
              </div>

              <div className="bg-white p-4 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer border">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-gray-500 mr-3" />
                  <span className="font-semibold text-gray-800">Government & Public Sector</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer border">
                <div className="flex items-center">
                  <Stethoscope className="w-6 h-6 text-gray-500 mr-3" />
                  <span className="font-semibold text-gray-800">Healthcare & Life Sciences</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer border">
                <div className="flex items-center">
                  <Truck className="w-6 h-6 text-gray-500 mr-3" />
                  <span className="font-semibold text-gray-800">Logistics & Supply Chain</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer border">
                <div className="flex items-center">
                  <CreditCard className="w-6 h-6 text-gray-500 mr-3" />
                  <span className="font-semibold text-gray-800">Financial Services</span>
                </div>
              </div>
            </div>

            {/* Right Side - AI Illustration */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-3xl p-8 mb-6">
                <div className="relative mx-auto w-80 h-64">
                  {/* AI Brain Center */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-blue-600 rounded-full p-4 w-24 h-24 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">AI</span>
                    </div>
                  </div>

                  {/* Supply Chain */}
                  <div className="absolute top-4 left-8">
                    <div className="text-center">
                      <div className="bg-blue-500 w-12 h-8 rounded mb-2"></div>
                      <div className="text-xs text-blue-600 font-semibold">SUPPLY CHAINS</div>
                    </div>
                  </div>

                  {/* Truck */}
                  <div className="absolute top-8 right-8">
                    <div className="bg-blue-500 w-16 h-8 rounded mb-2"></div>
                  </div>

                  {/* Automation */}
                  <div className="absolute bottom-4 right-8">
                    <div className="text-center">
                      <div className="bg-blue-500 w-16 h-8 rounded mb-2"></div>
                      <div className="text-xs text-blue-600 font-semibold">AUTOMATION</div>
                    </div>
                  </div>

                  {/* Personalization */}
                  <div className="absolute top-8 right-4">
                    <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                      <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
                    </div>
                    <div className="text-xs text-blue-600 font-semibold mt-1">PERSONALIZATION</div>
                  </div>

                  {/* Connecting Lines */}
                  <div className="absolute inset-0">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                          <circle cx="10" cy="10" r="1" fill="#3B82F6" opacity="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#dots)"/>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 font-semibold mb-4">
                AI and automation to optimize demand forecasting, reduce waste, and personalize customer experiences.
              </p>
              <button className="text-red-500 font-semibold hover:text-red-600 flex items-center justify-center mx-auto">
                Explore Retail Solutions <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why TechProjects Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-red-500 font-semibold mb-4 tracking-wider">—</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-12">
            Why TechProjects for Industries?
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Same AI Illustration */}
            <div className="bg-blue-100 rounded-3xl p-8">
              <div className="relative mx-auto w-80 h-64">
                {/* AI Brain Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 rounded-full p-4 w-24 h-24 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
                </div>

                {/* Supply Chain */}
                <div className="absolute top-4 left-8">
                  <div className="text-center">
                    <div className="bg-blue-500 w-12 h-8 rounded mb-2"></div>
                    <div className="text-xs text-blue-600 font-semibold">SUPPLY CHAINS</div>
                  </div>
                </div>

                {/* Truck */}
                <div className="absolute top-8 right-8">
                  <div className="bg-blue-500 w-16 h-8 rounded mb-2"></div>
                </div>

                {/* Automation */}
                <div className="absolute bottom-4 right-8">
                  <div className="text-center">
                    <div className="bg-blue-500 w-16 h-8 rounded mb-2"></div>
                    <div className="text-xs text-blue-600 font-semibold">AUTOMATION</div>
                  </div>
                </div>

                {/* Personalization */}
                <div className="absolute top-8 right-4">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center">
                    <div className="bg-yellow-400 w-4 h-4 rounded-full"></div>
                  </div>
                  <div className="text-xs text-blue-600 font-semibold mt-1">PERSONALIZATION</div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="dots2" patternUnits="userSpaceOnUse" width="20" height="20">
                        <circle cx="10" cy="10" r="1" fill="#3B82F6" opacity="0.3"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots2)"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mt-1.5"></div>
                </div>
                <span className="text-gray-800 font-semibold">Deep domain expertise in multiple sectors</span>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mt-1.5"></div>
                </div>
                <span className="text-gray-800 font-semibold">Proven success with Fortune 500 clients and public agencies</span>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mt-1.5"></div>
                </div>
                <span className="text-gray-800 font-semibold">Hybrid U.S.–India model for round-the-clock delivery</span>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex-shrink-0 mt-1 mr-4">
                  <div className="w-3 h-3 bg-white rounded-full mx-auto mt-1.5"></div>
                </div>
                <span className="text-gray-800 font-semibold">Certified partner (MWBE, ISO, Microsoft Gold)</span>
              </div>

              <div className="mt-8">
                <button className="text-red-500 font-semibold hover:text-red-600 flex items-center">
                  View Case Studies <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="text-red-500 text-2xl font-bold mr-2">✂</div>
                <span className="text-xl font-semibold">TechProjects</span>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Industries We Serve</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Success Stories</a></li>
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog / Insights</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-300 hover:text-white">Technology Practices</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">IT Staffing Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Specialized Business Solutions</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              @ @ Copyright 2021 TechProjects. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-300 mb-4 md:mb-0">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Manage Cookies</a>
            </div>
            <div className="flex items-center space-x-4">
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndustriesWeServe;