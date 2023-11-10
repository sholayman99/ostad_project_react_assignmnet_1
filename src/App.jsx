import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Shared/Navbar";


const App = () => {
  return (
    <div className="max-w-[1440px]">
  
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

     </BrowserRouter> 
    </div>
  );
};

export default App;