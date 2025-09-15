// App.jsx
import { Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import AboutUs from "./components/AboutUs.jsx";
import OurServices from "./components/services/Ourservices.jsx";
import GlobalCapabilityCenter from "./components/services/GlobalCapabilityCenter.jsx";
import PlatformEngineeringProductDevelopment from "./components/services/PlatformEngineeringProductDevelopment";
import DigitalStrategyTransformation from "./components/services/DigitalStrategyTransformation";
import CybersecurityCompliance from "./components/services/CybersecurityCompliance";
import AiIntelligentAutomation from "./components/services/AiIntelligentAutomation";
import GovernmentPublicSector from "./components/Industries/GovernmentPublicSector.jsx";
import HealthcareLifeSciences from "./components/Industries/HealthcareLifeSciences";
import IndustriesWeServe from "./components/Industries/IndustriesWeServe";
import LogisticsSupplyChain from "./components/Industries/LogisticsSupplyChain.jsx";
import RetailGrocery from "./components/Industries/RetailWholesaleGrocery";
import FinancialServices from "./components/Industries/FinancialServices.jsx";
import Contact from "./components/Contact.jsx";
import Careers from "./components/Careers.jsx";
import OurClients from "./components/OurClients.jsx";
import InsuranceClient from "./components/casestudies/InsuranceClient.jsx";
import MainCaseStudy from "./components/casestudies/MainCaseStudy.jsx";
import DeoNycCybersecurity from "./components/casestudies/DeoNycCybersecurity.jsx";
import WholesaleGroceryLeader from './components/casestudies/WholesaleGroceryLeader.jsx'
function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/ourclient" element={<OurClients />} />
        {/* //Case Studies */}

        <Route path="/deonyccybersecurity" element={<DeoNycCybersecurity />} />
        <Route path="/insuranceclient" element={<InsuranceClient />} />
        <Route path="/maincasestudy" element={<MainCaseStudy />} />
        <Route path="/wholesalegrocery" element={<WholesaleGroceryLeader />} />


        {/* <Route path="/contact" element={<Contact />} /> */}

        {/* //services */}
        <Route path="/ourservices" element={<OurServices />} />
        <Route path="/globalcapabilitycenter" element={<GlobalCapabilityCenter />} />
        <Route path="/platformengineeringproductdevelopment" element={<PlatformEngineeringProductDevelopment />} />
        <Route path="/digitalstrategytransformation" element={<DigitalStrategyTransformation />} />
        <Route path="/cybersecuritycompliance" element={<CybersecurityCompliance />} />
        <Route path="/aiintelligentautomation" element={<AiIntelligentAutomation />} />

        {/* Industries */}
        <Route path="/governmentpublicsector" element={<GovernmentPublicSector />} />
        <Route path="/healthcarelifesciences" element={<HealthcareLifeSciences />} />
        <Route path="/industriesweserve" element={<IndustriesWeServe />} />
        <Route path="/logisticssupplychain" element={<LogisticsSupplyChain />} />
        <Route path="/retailgrocery" element={<RetailGrocery />} />
        <Route path="/financialservices" element={<FinancialServices />} />


        <Route path="*" element={<h1>404 Page Not Found</h1>} />

      </Routes>
     
    </div>
  );
}

export default App;
