import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
//import { useState } from 'react';
import { Link } from 'react-router-dom';
const GlobalCapabilityCenter = () => {
  const [activeTab, setActiveTab] = useState('Why GCCs with TechProjects?');
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-blue-800 shadow-md px-6 py-4 flex items-center justify-between">
      
      
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
      <section className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-red-500 text-sm font-semibold mb-4 flex items-center">
            <div className="w-8 h-0.5 bg-red-500 mr-2"></div>
            OUR SERVICES
          </div>
          <h1 className="text-5xl font-bold text-blue-600 mb-8 leading-tight">
            Global Capability<br />
            Centers (GCCs)
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center text-gray-600 mb-8">
            <span>TechProject</span>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Services</span>
            <svg className="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Global Capability Centers (GCCs)</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* GCC Description Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-red-500 text-sm font-semibold mb-4 flex items-center justify-center">
            <div className="w-8 h-0.5 bg-red-500 mr-2"></div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Global Capability Centers (GCCs)
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto">
            At TechProjects, our Global Capability Centers (GCCs) are designed to be more than offshore delivery hubs — they are strategic innovation centers that drive growth, agility, and cost efficiency for global enterprises.
          </p>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex">
            {/* Left Sidebar */}
            <div className="w-1/3 pr-8">
              <div className="space-y-4">
                {[
                  'Why GCCs with TechProjects?',
                  'What We Deliver',
                  'Business Impact',
                  'Case Example'
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full text-left px-6 py-4 rounded-lg font-semibold transition-colors ${
                      activeTab === tab
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content */}
            <div className="w-2/3 bg-white rounded-lg p-8">
              {activeTab === 'Why GCCs with TechProjects?' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why GCCs with TechProjects?
                  </h3>
                  
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">SUPPLY CHAINS</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center">
                              <div className="text-xs font-bold text-blue-800">AI</div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">AUTOMATION</div>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div className="text-sm font-semibold text-blue-700">PERSONALIZATION</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Custom-built Centers</h4>
                        <p className="text-gray-600">Tailored for industries like retail, logistics, and government.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">End-to-End Operations</h4>
                        <p className="text-gray-600">Covering IT, engineering, analytics, and business support.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Hybrid Talent Strategy</h4>
                        <p className="text-gray-600">U.S. client proximity combined with India's skilled workforce.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Agile & Scalable</h4>
                        <p className="text-gray-600">Flexible models that adapt to project size and complexity.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Innovation-as-a-Service</h4>
                        <p className="text-gray-600">GCCs act as incubation hubs for R&D and digital innovation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'What We Deliver' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What We Deliver
                  </h3>
                  
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">SUPPLY CHAINS</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center">
                              <div className="text-xs font-bold text-blue-800">AI</div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">AUTOMATION</div>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div className="text-sm font-semibold text-blue-700">PERSONALIZATION</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">24/7 Global Delivery with follow-the-sun model</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">Knowledge Transition & Talent Strategy Planning</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">Cloud, Data, and AI Centers of Excellence within GCCs</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">Compliance-ready operations for regulated industries</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">Cost efficiency without compromising quality</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Business Impact' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Business Impact
                  </h3>
                  
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">SUPPLY CHAINS</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center">
                              <div className="text-xs font-bold text-blue-800">AI</div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">AUTOMATION</div>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div className="text-sm font-semibold text-blue-700">PERSONALIZATION</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="text-red-500 text-xl mr-4 mt-1">✓</div>
                      <p className="text-gray-600">Lower operational costs by up to 40%</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-red-500 text-xl mr-4 mt-1">✓</div>
                      <p className="text-gray-600">Faster time-to-market with agile delivery</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-red-500 text-xl mr-4 mt-1">✓</div>
                      <p className="text-gray-600">Access to niche skills & innovation culture</p>
                    </div>
                    <div className="flex items-start">
                      <div className="text-red-500 text-xl mr-4 mt-1">✓</div>
                      <p className="text-gray-600">Long-term scalability for global programs</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Case Example' && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Case Example
                  </h3>
                  
                  <div className="mb-8">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
                      <div className="grid grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                            </svg>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">SUPPLY CHAINS</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <div className="w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center">
                              <div className="text-xs font-bold text-blue-800">AI</div>
                            </div>
                          </div>
                          <div className="text-sm font-semibold text-blue-700">AUTOMATION</div>
                        </div>
                        <div className="col-span-2 text-center">
                          <div className="w-16 h-16 bg-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <div className="text-sm font-semibold text-blue-700">PERSONALIZATION</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">30% cost savings on IT operations</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">A dedicated AI/ML lab for retail forecasting</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-600">Seamless 24/7 support for U.S. and APAC operations</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-600 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-600 rounded-full opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Your Team Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Have questions or want to learn more about TechProjects? We're here to help. Whether you're a job seeker, client, or partner, our team is ready to assist you.
          </p>
          <button className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
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

export default GlobalCapabilityCenter;