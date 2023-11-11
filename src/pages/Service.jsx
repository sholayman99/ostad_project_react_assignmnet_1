import OurServices from "../components/Service/OurServices";
import ServiceBanner from "../components/Service/ServiceBanner";
import Footer from "../components/Shared/Footer";
import Subscribe from "../components/Shared/Subscribe";


const Service = () => {
    return (
        <div>
          <ServiceBanner />
          <OurServices />
          <Subscribe />
          <Footer />
        </div>
    );
};

export default Service;