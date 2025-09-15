import React from 'react';
import { ChevronRight, Building2, ShoppingCart, Heart, Truck, Star, User, Factory, Brain, Wrench } from 'lucide-react';

import { useState } from 'react';
import { Link } from 'react-router-dom';
const MainCaseStudy = () => {
  //const [currentTestimonial, setCurrentTestimonial] = useState(0);
   const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200 rounded-full opacity-25"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-blue-300 rounded-full opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-1 bg-red-500"></div>
              <span className="text-gray-600 uppercase tracking-wider text-sm font-medium">CASE STUDIES</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Real Results, Real Impact
            </h1>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl">
              At TechProjects, we don't just deliver services — we create measurable outcomes. 
              Explore how we've helped clients across industries with AI, cybersecurity, digital 
              transformation, and global delivery models.
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2 font-medium">
              <span>Share Your Project With Us</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-red-500"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Featured Case Studies</h2>
          <p className="text-gray-600 text-lg mb-16 max-w-4xl">
            We empower businesses with AI-driven tools and automation that optimize operations, 
            enhance customer experiences, and unlock measurable value across the supply chain:
          </p>

          {/* Case Study 1 - DOE NYC */}
          <div className="mb-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">DOE NYC — Cybersecurity Modernization</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">24-member expert team deployed on-site and offshore</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Security aligned with NIST and CIS standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Reduced incident response time by 40%</span>
                  </li>
                </ul>
                <button className="text-red-500 hover:text-red-600 flex items-center space-x-2 font-medium">
                  <span>Read Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center relative">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <div className="space-y-2">
                        <Truck className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">SUPPLY CHAINS</div>
                      </div>
                      <div className="space-y-2">
                        <User className="w-8 h-8 text-blue-600" />
                        <Star className="w-4 h-4 text-yellow-500" />
                        <div className="text-xs text-blue-700 font-medium">PERSONALIZATION</div>
                      </div>
                      <div className="space-y-2">
                        <Factory className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <Wrench className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">AUTOMATION</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 - Wholesale Grocery */}
          <div className="mb-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 lg:order-1">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center relative">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <div className="space-y-2">
                        <Truck className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">SUPPLY CHAINS</div>
                      </div>
                      <div className="space-y-2">
                        <User className="w-8 h-8 text-blue-600" />
                        <Star className="w-4 h-4 text-yellow-500" />
                        <div className="text-xs text-blue-700 font-medium">PERSONALIZATION</div>
                      </div>
                      <div className="space-y-2">
                        <Factory className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <Wrench className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">AUTOMATION</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lg:order-2">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Wholesale Grocery Leader — AI Forecasting</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Reduced spoilage losses by 17%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Improved inventory turnover by 23%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Deployed across 12 distribution centers</span>
                  </li>
                </ul>
                <button className="text-red-500 hover:text-red-600 flex items-center space-x-2 font-medium">
                  <span>Read Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Case Study 3 - Insurance Client */}
          <div className="mb-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Insurance Client — Claims Automation</h3>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Automated 85% of claims workload using AI + RPA</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Reduced SLA breaches by 40%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Improved customer satisfaction</span>
                  </li>
                </ul>
                <button className="text-red-500 hover:text-red-600 flex items-center space-x-2 font-medium">
                  <span>Read Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center relative">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <div className="space-y-2">
                        <Truck className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">SUPPLY CHAINS</div>
                      </div>
                      <div className="space-y-2">
                        <User className="w-8 h-8 text-blue-600" />
                        <Star className="w-4 h-4 text-yellow-500" />
                        <div className="text-xs text-blue-700 font-medium">PERSONALIZATION</div>
                      </div>
                      <div className="space-y-2">
                        <Factory className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <Wrench className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">AUTOMATION</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-8 h-1 bg-red-500"></div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">40%</div>
              <div className="text-blue-200 text-sm">Faster Incident Response</div>
              <div className="text-blue-200 text-xs">(Government)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">23%</div>
              <div className="text-blue-200 text-sm">Better Inventory Turnover (Retail)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">85%</div>
              <div className="text-blue-200 text-sm">Automated Claims Processing</div>
              <div className="text-blue-200 text-xs">(Finance)</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">30%</div>
              <div className="text-blue-200 text-sm">cost savings With GCC Setups</div>
              <div className="text-blue-200 text-xs">(Logistics/Enterprise)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies by Industry */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-1 bg-red-500"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Case Studies by Industry</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-4xl">
            At TechProjects, we go beyond technology support — we design solutions that build, automate, 
            and transform businesses.
          </p>

          <div className="mb-8">
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-red-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-red-600 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span>Retail & Grocery</span>
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors">
                <Building2 className="w-5 h-5" />
                <span>Government & Public Sector</span>
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors">
                <Heart className="w-5 h-5" />
                <span>Healthcare & Life Sciences</span>
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-200 transition-colors">
                <Truck className="w-5 h-5" />
                <span>Logistics & Supply Chain</span>
              </button>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">AI-driven demand forecasting to cut waste and optimize inventory</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Dynamic pricing and promotions for smarter sales strategies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Personalized shopping experiences with recommendation engines</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Computer vision for shelf monitoring and shrinkage detection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">RPA automation for invoices, claims, and back-office tasks</span>
                  </li>
                </ul>
                <button className="text-red-500 hover:text-red-600 flex items-center space-x-2 font-medium">
                  <span>Read Full Story</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center relative">
                  <div className="text-center">
                    <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <div className="space-y-2">
                        <Truck className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">SUPPLY CHAINS</div>
                      </div>
                      <div className="space-y-2">
                        <User className="w-8 h-8 text-blue-600" />
                        <Star className="w-4 h-4 text-yellow-500" />
                        <div className="text-xs text-blue-700 font-medium">PERSONALIZATION</div>
                      </div>
                      <div className="space-y-2">
                        <Factory className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="space-y-2">
                        <Wrench className="w-8 h-8 text-blue-600" />
                        <div className="text-xs text-blue-700 font-medium">AUTOMATION</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Your Success Could Be Next</h2>
          <p className="text-blue-200 text-lg mb-8">
            Let's work together to solve your toughest challenges and create measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
              Start Your Project
            </button>
            <button className="border-2 border-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-400 hover:bg-opacity-20 transition-colors font-medium flex items-center space-x-2">
              <span>Contact Us</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-red-500 text-2xl font-bold">★</div>
                <span className="text-white text-xl font-semibold">TechProjects</span>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Industries We Serve</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Careers</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Blog / Insights</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Technology Practices</a></li>
                <li><a href="#" className="hover:text-white">IT Staffing Services</a></li>
                <li><a href="#" className="hover:text-white">Specialized Business Solutions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © © Copyright 2021 TechProjects. All rights reserved.
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 text-sm hover:text-white">Terms of Service</a>
                <a href="#" className="text-gray-400 text-sm hover:text-white">Privacy Policy</a>
                <a href="#" className="text-gray-400 text-sm hover:text-white">Manage Cookies</a>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">📺</a>
                <a href="#" className="text-gray-400 hover:text-white">📘</a>
                <a href="#" className="text-gray-400 hover:text-white">🐦</a>
                <a href="#" className="text-gray-400 hover:text-white">📷</a>
                <a href="#" className="text-gray-400 hover:text-white">💼</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainCaseStudy;