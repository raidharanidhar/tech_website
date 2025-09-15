import React from 'react';
import { ChevronRight, ChevronLeft, Shield, Monitor, Users, TrendingUp, CheckCircle, Building, Star, User, Factory, Truck, Wrench, Brain } from 'lucide-react';
//import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/TechprojectsLogo.png"

const InsuranceClient = () => {
    //const [currentTestimonial, setCurrentTestimonial] = useState(0);
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
      <section className="relative bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 py-20 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30"></div>
          <div className="absolute top-32 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-40"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-200 rounded-full opacity-25"></div>
          <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-blue-300 rounded-full opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-1 bg-red-500"></div>
              <span className="text-gray-600 uppercase tracking-wider text-sm font-medium">CASE STUDIES</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Insurance Client-Claims Automation
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Industry Focus | Type of Solution
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center space-x-2 font-medium">
              <span>Contact Us</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative">
                    <Monitor className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                    <Shield className="w-8 h-8 text-orange-500 absolute top-8 left-1/2 transform -translate-x-1/2" />
                  </div>
                  <div className="flex items-center justify-center space-x-4 mt-4">
                    <div className="w-8 h-8 bg-blue-500 rounded"></div>
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The New York City Department of Education (DOE) partnered with 
                TechProjects to modernize cybersecurity across one of the largest 
                education systems in the U.S.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">The Challenge</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Legacy vulnerabilities across 1,800 schools</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Increased ransomware and phishing threats</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Complex compliance requirements (NIST, CIS)</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative mb-6">
                    <Building className="w-16 h-16 text-blue-600 mx-auto" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-4">
                    <Monitor className="w-12 h-12 text-blue-600" />
                    <Shield className="w-8 h-8 text-blue-800" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative mb-6">
                    <Shield className="w-16 h-16 text-blue-600 mx-auto" />
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-6">
                    <div className="text-center">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                      <div className="text-2xl font-bold text-blue-800">%</div>
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Approach / The Solution</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Deployed a 24-member cybersecurity team (on-site + offshore)</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Implemented secure access controls and SIEM monitoring</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Designed Third-Party Risk Management (TPRM) framework</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Impact Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">The Impact / Results</h2>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">40% faster incident response</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Aligned with NIST & CIS standards</span>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-lg">Secured IT environment for 1M+ students and staff</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
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

          {/* Why It Matters */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative mb-6">
                    <Shield className="w-16 h-16 text-blue-600 mx-auto" />
                    <CheckCircle className="w-8 h-8 text-white bg-blue-600 rounded-full absolute -bottom-2 -right-2" />
                  </div>
                  <div className="flex items-center justify-center space-x-6">
                    <Users className="w-10 h-10 text-blue-600" />
                    <TrendingUp className="w-10 h-10 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why It Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                This project not only strengthened DOE's security posture but 
                also set a model for public sector cybersecurity modernization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Related Case Studies</h2>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Case Study 1 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">Government</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">DOE NYC Cybersecurity</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Strengthened IT security for over 1M students and staff with a two-year modernization initiative.
                  </p>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-800 opacity-80"></div>
                  <div className="relative w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">Retail</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Wholesale Grocery Forecasting</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Reduced spoilage and improved inventory turnover with AI-powered demand forecasting.
                  </p>
                </div>
              </div>

              {/* Case Study 3 */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">Financial Services</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Insurance Claims Automation</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Automated 85% of claims processing, cutting SLA breaches and boosting customer satisfaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="text-red-500 hover:text-red-600 flex items-center space-x-2 font-medium mx-auto">
                <span>Read Full Story</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Impact in Your Business?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-medium">
              Start Your Project
            </button>
            <button className="border-2 border-blue-400 text-white px-8 py-3 rounded-lg hover:bg-blue-400 hover:bg-opacity-20 transition-colors font-medium">
              Contact Us
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

export default InsuranceClient;