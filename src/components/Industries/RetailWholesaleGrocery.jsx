import React from 'react';
import { ChevronRight, Eye, BarChart3, ShoppingBag, Users, Cog, Target, Youtube, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/TechprojectsLogo.png"

const RetailGrocery = () => {
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
          <div className="max-w-4xl">
            <div className="text-red-500 font-semibold mb-4 tracking-wider">
              — WHERE TECHNOLOGY MEETS INDUSTRY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
              Retail & Grocery
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Transforming Grocery Operations with AI and Automation
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

      {/* Challenges We Solve Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Challenges List */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-12">
                Challenges We Solve
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-800 font-semibold text-lg">
                    High spoilage rates and perishable inventory losses
                  </span>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-800 font-semibold text-lg">
                    Complex supplier and distribution networks
                  </span>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-800 font-semibold text-lg">
                    Rising customer expectations for personalization
                  </span>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-800 font-semibold text-lg">
                    Competition from digital-first grocery platforms
                  </span>
                </div>

                <div className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-800 font-semibold text-lg">
                    Limited real-time visibility across stores and warehouses
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - AI Illustration */}
            <div className="flex justify-center">
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
                        <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                          <circle cx="10" cy="10" r="1" fill="#3B82F6" opacity="0.3"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#dots)"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-500 font-semibold mb-4 tracking-wider">—</div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Solutions</h2>
          <p className="text-gray-600 mb-16 max-w-4xl mx-auto text-lg">
            We empower businesses with AI-driven tools and automation that optimize operations, enhance customer experiences, and unlock measurable value across the supply chain:
          </p>

          {/* Solutions Diagram */}
          <div className="relative max-w-5xl mx-auto">
            {/* Central Hub */}
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white rounded-full p-6 border-2 border-blue-200 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
                <div className="bg-white rounded-full p-6 border-2 border-blue-200 shadow-lg">
                  <Target className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
                <div className="bg-white rounded-full p-6 border-2 border-blue-200 shadow-lg">
                  <ShoppingBag className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
                <div className="bg-white rounded-full p-6 border-2 border-blue-200 shadow-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
                <div className="bg-white rounded-full p-6 border-2 border-blue-200 shadow-lg">
                  <Cog className="w-8 h-8 text-blue-600 mx-auto" />
                </div>
              </div>
            </div>

            {/* Solution Cards */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Computer Vision */}
              <div className="text-center">
                <div className="mb-4">
                  <Eye className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Computer Vision</h3>
                <p className="text-gray-600">
                  Shelf monitoring, shrinkage detection, planogram compliance
                </p>
                <div className="flex justify-center mt-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 mx-2"></div>
                </div>
              </div>

              {/* RPA Automation */}
              <div className="text-center">
                <div className="mb-4">
                  <BarChart3 className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">RPA Automation</h3>
                <p className="text-gray-600">
                  Faster invoice matching, vendor claims, and pricing updates
                </p>
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 mr-2"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>

              {/* AI Demand Forecasting */}
              <div className="text-center">
                <div className="mb-4">
                  <Cog className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">AI Demand Forecasting</h3>
                <p className="text-gray-600">
                  Accurate SKU-level predictions for better inventory planning
                </p>
                <div className="flex justify-center mt-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 ml-2"></div>
                </div>
              </div>

              {/* Dynamic Pricing */}
              <div className="text-center">
                <div className="mb-4">
                  <Eye className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Dynamic Pricing & Promotions</h3>
                <p className="text-gray-600">
                  Smarter discounting and elasticity models
                </p>
                <div className="flex justify-center mt-4">
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 mr-2"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Customer Personalization - Bottom Center */}
            <div className="text-center mt-12">
              <div className="mb-4">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Customer Personalization</h3>
              <p className="text-gray-600">
                Intelligent recommendations and shopping lists
              </p>
              <div className="flex justify-center mt-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TechProjects Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-red-500 font-semibold mb-4 tracking-wider">—</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why TechProjects for Grocery?
            </h2>
            <p className="text-gray-600 text-lg">
              Wholesale Grocery Leader – AI Demand Forecasting
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="bg-blue-600 rounded-lg p-3 mr-4 flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Deep domain expertise in wholesale and retail
                </h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 rounded-lg p-3 mr-4 flex-shrink-0">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  GroceryAI™ Framework with reusable AI/ML components
                </h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 rounded-lg p-3 mr-4 flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Proven success with national grocery chains and distributors
                </h3>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-blue-600 rounded-lg p-3 mr-4 flex-shrink-0">
                <Cog className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  U.S.–India hybrid delivery model for 24/7 innovation
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Case Study Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-red-500 font-semibold mb-4 tracking-wider">—</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Impact & Case Study
            </h2>
            <p className="text-gray-600 text-lg">
              Wholesale Grocery Leader – AI Demand Forecasting
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Problem */}
              <div className="text-center">
                <div className="mb-6">
                  <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Problem</h3>
                  <p className="text-gray-600">
                    High spoilage and poor inventory turnover
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 ml-2"></div>
                </div>
              </div>

              {/* Solution */}
              <div className="text-center">
                <div className="mb-6">
                  <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Solution</h3>
                  <p className="text-gray-600">
                    AI/ML forecasting model across 12 distribution centers
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 mr-2"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 ml-2"></div>
                </div>
              </div>

              {/* Result */}
              <div className="text-center">
                <div className="mb-6">
                  <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Result</h3>
                  <p className="text-gray-600">
                    17% reduction in spoilage and 23% improvement in turnover
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-20 h-0.5 bg-blue-300 mt-1.5 mr-2"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to build the future of grocery retail?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            With TechProjects, you can optimize your supply chain, improve margins, and enhance customer loyalty — all powered by AI and intelligent automation.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
            Contact Us Now
          </button>
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

export default RetailGrocery;