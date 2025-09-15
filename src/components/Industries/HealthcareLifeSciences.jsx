import React from 'react';
import { ChevronRight, Settings, Shield, Brain, Monitor, Cog, Truck, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const HealthcareLifeSciences = () => {
   const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <div className="min-h-screen bg-gray-50">
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
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl">
            <div className="text-red-500 font-semibold mb-4 flex items-center">
              <div className="w-8 h-1 bg-red-500 mr-3"></div>
              HEALTHCARE & LIFE SCIENCES
            </div>
            <h1 className="text-5xl font-bold text-indigo-900 mb-6 leading-tight">
              Safer, and Connected Healthcare Solutions
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              TechProjects partners with healthcare providers, pharma companies, and life sciences organizations to improve patient care, secure data, and accelerate innovation with digital technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Challenges Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Industry Challenges</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Challenges List */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Legacy systems slowing down care delivery</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Growing cyber risks to sensitive patient data</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Complex compliance requirements (HIPAA, GDPR)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Rising demand for telehealth and connected experiences</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Pressure to reduce costs while improving outcomes</span>
                </div>
              </div>
            </div>

            {/* Illustration */}
            <div className="lg:w-1/2">
              <div className="bg-blue-100 rounded-2xl p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500 p-4 rounded-lg flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-blue-400 p-4 rounded-lg flex items-center justify-center relative">
                    <Brain className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded font-semibold">AI</span>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-blue-500 p-4 rounded-lg flex items-center justify-center relative">
                    <User className="w-8 h-8 text-white" />
                    <Star className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  PERSONALIZATION
                </div>
                <div className="absolute bottom-4 left-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  SUPPLY CHAINS
                </div>
                <div className="absolute bottom-4 right-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  AUTOMATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Digital Health Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-red-500 font-semibold mb-4 flex items-center justify-center">
              <div className="w-8 h-1 bg-red-500 mr-3"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Health Solutions</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We empower businesses with AI-driven tools and automation that optimize operations, enhance customer experiences, and unlock measurable value across the supply chain:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Cloud Migration</h3>
              <p className="text-gray-600">Secure, scalable infrastructure for hospitals & providers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity & Compliance</h3>
              <p className="text-gray-600">End-to-end protection with HIPAA-ready frameworks</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI & Data Analytics</h3>
              <p className="text-gray-600">Smarter decisions for patient care & drug discovery</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Telehealth & Remote Monitoring</h3>
              <p className="text-gray-600">Digital-first patient engagement models</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-gray-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Workflow Automation</h3>
              <p className="text-gray-600">Streamlined hospital operations & faster clinical processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why TechProjects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why TechProjects for Healthcare?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Deep expertise in healthcare compliance & data security</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Experience serving providers, insurers, and pharma firms</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Hybrid U.S.–India teams for 24/7 delivery & support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                  <span className="text-lg text-gray-800 font-medium">Innovation labs driving AI, automation, and digital health solutions</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-blue-100 rounded-2xl p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500 p-4 rounded-lg flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-blue-400 p-4 rounded-lg flex items-center justify-center relative">
                    <Brain className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded font-semibold">AI</span>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-blue-500 p-4 rounded-lg flex items-center justify-center relative">
                    <User className="w-8 h-8 text-white" />
                    <Star className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  PERSONALIZATION
                </div>
                <div className="absolute bottom-4 left-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  SUPPLY CHAINS
                </div>
                <div className="absolute bottom-4 right-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  AUTOMATION
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-red-500 font-semibold mb-4 flex items-center justify-center">
              <div className="w-8 h-1 bg-red-500 mr-3"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact & Case Studies</h2>
            <p className="text-gray-600 text-lg max-w-4xl mx-auto">
              We deliver measurable outcomes that drive efficiency, reduce costs, and create real business value. Here are a few examples of how TechProjects has helped clients transform with digital solutions.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-blue-100 rounded-2xl p-8 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-500 p-4 rounded-lg flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div className="bg-blue-400 p-4 rounded-lg flex items-center justify-center relative">
                    <Brain className="w-8 h-8 text-white" />
                    <span className="absolute -top-2 -right-2 text-xs bg-yellow-400 text-black px-2 py-1 rounded font-semibold">AI</span>
                  </div>
                  <div className="bg-blue-600 p-4 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                      <div className="w-6 h-6 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                  <div className="bg-blue-500 p-4 rounded-lg flex items-center justify-center relative">
                    <User className="w-8 h-8 text-white" />
                    <Star className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  PERSONALIZATION
                </div>
                <div className="absolute bottom-4 left-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  SUPPLY CHAINS
                </div>
                <div className="absolute bottom-4 right-4 text-xs bg-white px-2 py-1 rounded font-semibold">
                  AUTOMATION
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                    <div>
                      <span className="text-lg text-gray-800 font-semibold">Healthcare Provider</span>
                      <div className="text-sm text-gray-600 mt-1 ml-6">
                        <div>• 30% lower IT costs</div>
                        <div>• Migrated to a secure cloud environment, improving scalability and reliability.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                    <div>
                      <span className="text-lg text-gray-800 font-semibold">Pharma Company</span>
                      <div className="text-sm text-gray-600 mt-1 ml-6">
                        <div>• Faster drug trial insights</div>
                        <div>• Migrated to a secure cloud environment, improving scalability and reliability.</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-3"></div>
                    <div>
                      <span className="text-lg text-gray-800 font-semibold">Insurance Firm</span>
                      <div className="text-sm text-gray-600 mt-1 ml-6">
                        <div>• 40% faster claims processing</div>
                        <div>• Automated claims workflows, reducing manual effort and improving turnaround time.</div>
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
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transform healthcare with secure, digital-first solutions.
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
            With TechProjects, you can optimize your supply chain, improve margins, and enhance customer loyalty – all powered by AI and intelligent automation.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
            Contact Us Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-white text-xl font-bold mb-4">TechProjects</div>
            </div>
            <div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white">About Us</a>
                <a href="#" className="block text-gray-300 hover:text-white">Industries We Serve</a>
                <a href="#" className="block text-gray-300 hover:text-white">Success Stories</a>
              </div>
            </div>
            <div>
              <div className="space-y-3">
                <a href="#" className="block text-gray-300 hover:text-white">Careers</a>
                <a href="#" className="block text-gray-300 hover:text-white">Blog / Insights</a>
                <a href="#" className="block text-gray-300 hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Services</div>
              <div className="space-y-2 text-sm">
                <div className="text-gray-300">Technology Practices</div>
                <div className="text-gray-300">IT Staffing Services</div>
                <div className="text-gray-300">Specialized Business Solutions</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © @ Copyright 2021 TechProjects. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-white">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white">Manage Cookies</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <div className="w-6 h-6 bg-gray-600 rounded"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HealthcareLifeSciences;