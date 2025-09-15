import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, ArrowRight, Youtube, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Home= () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
   const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  const testimonials = [
    {
      quote: "The TechProjects team has been amazing over the past two years—always responsive, solution-driven, and ready to help. They've exceeded my expectations, never said 'no,' and provided top-notch service with a positive attitude. I look forward to many more years of partnership!",
      name: "Ana Delgadillo Buhezo",
      title: "President of BeeSmart LLC",
      image: "/api/placeholder/80/80"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-purple-900 text-white">
       <nav className="fixed top-0 left-0  w-full z-50 bg-blue-800 shadow-md px-6 py-4 flex items-center justify-between">
       
       
                 <div className="flex items-center">
                   <div className="text-xl font-bold">TechProjects</div>
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
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-400 text-sm font-semibold mb-4">SMART IT SOLUTIONS</p>
              <h1 className="text-5xl font-bold mb-6">For Business</h1>
              <p className="text-lg mb-8 text-gray-200">
                TechProjects delivers tailored IT solutions that drive innovation, 
                efficiency, and business growth. From digital transformation to 
                infrastructure and cybersecurity, we empower organizations to 
                scale with confidence.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                  Reach Us
                </button>
                <button className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-blue-900">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <img src="/api/placeholder/600/400" alt="Business woman working" className="rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-blue-900 py-8">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <div>
              <p className="text-red-400 text-sm font-semibold mb-2">——————</p>
              <h2 className="text-2xl font-bold">Looking for Scalable IT & Talent Solutions<br />That Deliver Results?</h2>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 flex items-center">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="/api/placeholder/500/400" alt="Team collaboration" className="rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 hover:bg-opacity-30">
                  <Play className="w-8 h-8 text-gray-800" />
                </button>
              </div>
            </div>
            <div>
              <p className="text-red-500 text-sm font-semibold mb-4">——————— ABOUT TECHPROJECTS</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Who We Are</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At TechProjects, we go beyond traditional IT services — 
                we're a strategic technology partner focused on innovation, 
                impact, and scalability. With over 20 years of experience, we 
                deliver AI-driven solutions, global capability centers, and 
                enterprise transformation across industries.
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 flex items-center">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold mb-4">——————</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              More Than 20+ Years of Innovation<br />in IT & Talent Solutions
            </h2>
            <p className="text-gray-600 max-w-4xl mx-auto">
              At TechProjects, we've spent over two decades delivering intelligent, agile, and scalable technology solutions to global enterprises. From AI-powered automation to GCC operations, our commitment is to innovation with impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img src="/api/placeholder/500/300" alt="Tech team meeting" className="rounded-lg" />
            <img src="/api/placeholder/500/300" alt="Office collaboration" className="rounded-lg" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Delivered 120+ Projects Across U.S.<br />and India</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Awarded "Best Digital Partner" for<br />Government & Retail Clients</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <img src="/api/placeholder/120/60" alt="NYC DOE" className="h-12" />
            <img src="/api/placeholder/120/60" alt="NYC" className="h-12" />
            <img src="/api/placeholder/120/60" alt="Petco" className="h-12" />
            <img src="/api/placeholder/120/60" alt="Client logo" className="h-12" />
            <img src="/api/placeholder/120/60" alt="NYC" className="h-12" />
            <img src="/api/placeholder/120/60" alt="Proska" className="h-12" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold mb-4">——————— INNOVATE. SECURE. SCALE.</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">What We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At TechProjects, we help businesses grow, stay secure, and succeed. We build capability centers, improve digital systems, and provide the right talent—quickly and reliably.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Global Capability Centers (GCC)</h3>
              <p className="text-gray-600 mb-6">
                We design, build, and manage high-performance Global Capability Centers that drive innovation, accelerate time-to-market...
              </p>
              <ArrowRight className="w-5 h-5 text-blue-500 mx-auto" />
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Digital Transformation Solutions</h3>
              <p className="text-gray-600 mb-6">
                From application development to AI-driven automation, cloud migration, and cybersecurity, we deliver end-to-end digital...
              </p>
              <ArrowRight className="w-5 h-5 text-blue-500 mx-auto" />
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Strategic Staffing &<br />Workforce Solutions</h3>
              <p className="text-gray-600 mb-6">
                We provide skilled IT professionals through flexible staffing models—contract, full-time, or project-based—e...
              </p>
              <ArrowRight className="w-5 h-5 text-blue-500 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">More Than 500+ Clients<br />Trust TechProjects for Innovation</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm text-gray-300">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-sm text-gray-300">Years Of Clients Success</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-sm text-gray-300">Regional Distribution Center</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">23%</div>
              <div className="text-sm text-gray-300">Inventory Turnover</div>
            </div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <img src="/api/placeholder/800/400" alt="Team working" className="rounded-lg w-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-6 hover:bg-opacity-30">
                <Play className="w-10 h-10 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cybersecurity Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-red-500 text-sm font-semibold mb-4">——————</p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Strengthen Your Cybersecurity<br />with TechProjects' 24/7 SOC
              </h2>
              <p className="text-gray-600 mb-8">
                Stay ahead of threats with real-time monitoring, advanced threat detection, 
                and rapid incident response from our dedicated Security Operations Center 
                (SOC). We protect your business from ransomware, phishing, and data 
                breaches — so you can focus on growth with confidence.
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 flex items-center">
                Test Your Security With Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <div className="w-64 h-64 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Recognized & Trusted:</h2>
            <div className="flex justify-center items-center space-x-12">
              <img src="/api/placeholder/80/80" alt="MWBE Certified" className="h-16" />
              <img src="/api/placeholder/80/80" alt="ISO Certified" className="h-16" />
              <img src="/api/placeholder/200/80" alt="Microsoft Gold Partner" className="h-16" />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-red-500 text-sm font-semibold mb-4">——————</p>
            <h2 className="text-4xl font-bold text-gray-800">Case Study / Project Impact</h2>
          </div>

          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img src="/api/placeholder/500/300" alt="DOE NYC team" className="rounded-lg" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">DOE NYC – Cybersecurity Modernization</h3>
                <p className="text-gray-600 mb-6">
                  We led a two-year, multi-million-dollar project to secure one of the largest public education systems in the U.S.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 24-member expert team deployed on-site and offshore</li>
                  <li>• Aligned security with NIST and CIS standards</li>
                  <li>• Reduced incident response time by 40%</li>
                  <li>• Established a third-party risk management program still running today</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Result: A secure, compliant, and future-ready IT environment for over 1 million students and staff.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Wholesale Grocery Leader – AI Demand<br />Forecasting & Inventory Optimization
                </h3>
                <p className="text-gray-600 mb-6">
                  We deployed AI/ML models to forecast demand at the SKU-location-day level, optimizing stock levels and reducing waste.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Reduced perishable spoilage losses by 17%</li>
                  <li>• Improved inventory turnover by 23%</li>
                  <li>• Integrated seamlessly with ERP and warehouse systems</li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Result: Higher efficiency, lower costs, and better on-shelf availability for thousands of grocery items across 12 regional distribution centers.
                </p>
              </div>
              <img src="/api/placeholder/500/300" alt="Grocery team" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div>
            <p className="text-red-400 text-sm font-semibold mb-2">——————</p>
            <h2 className="text-2xl font-bold">Looking for Scalable IT & Talent Solutions<br />That Deliver Results?</h2>
          </div>
          <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 flex items-center">
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">What Our Clients Say About us</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-12 text-center relative">
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <h3 className="text-2xl font-bold text-gray-800 mb-8">Exceptional Support & Service</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="text-left">
                  <div className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600 text-sm">{testimonials[currentTestimonial].title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-6">TechProjects</div>
              <div className="flex space-x-4">
                <Youtube className="w-5 h-5" />
                <Facebook className="w-5 h-5" />
                <Twitter className="w-5 h-5" />
                <Instagram className="w-5 h-5" />
                <Linkedin className="w-5 h-5" />
              </div>
            </div>

            <div>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Success Stories</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
                <li><a href="#" className="hover:text-gray-300">Blog / Insights</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300">Global Capability Centers (GCCs)</a></li>
                <li><a href="#" className="hover:text-gray-300">Digital Strategy & Transformation</a></li>
                <li><a href="#" className="hover:text-gray-300">Cybersecurity & Compliance</a></li>
                <li><a href="#" className="hover:text-gray-300">Platform Engineering & Product Development</a></li>
                <li><a href="#" className="hover:text-gray-300">Staffing & Workforce Solutions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Industries We Serve</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300">Retail & Wholesale Grocery</a></li>
                <li><a href="#" className="hover:text-gray-300">Government & Public Sector</a></li>
                <li><a href="#" className="hover:text-gray-300">Healthcare & Life Sciences</a></li>
                <li><a href="#" className="hover:text-gray-300">Logistics & Supply Chain</a></li>
                <li><a href="#" className="hover:text-gray-300">Financial Services</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex justify-between items-center">
            <div className="text-sm text-gray-400">
              © Copyright 2021 TechProjects. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Manage Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;