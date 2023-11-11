import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";


const App = () => {
  return (
    <div className="max-w-[1440px]" style={{
      background: "linear-gradient(180deg, #D7F5DC 0%, #D7F5DC 100%)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      height: "auto",
    }} >
  
     <BrowserRouter>
     <Navbar />
     <Routes>

     <Route path="/" element={<Home />}  />
     <Route path="/team" element={<Team />}  />
     <Route path="/service" element={<Service />}  />
     <Route path="/projects" element={<Projects />}  />
     <Route path="/testimonials" element={<Testimonials />}  />
     <Route path="*" element={<NotFound />}  />

     </Routes>
     <Footer />
     </BrowserRouter> 
    </div>
  );
};

export default App;