import Banner from "../components/Home/Banner";
import Counter from "../components/Home/Counter";
import Partners from "../components/Home/Partners";
import WorkList from "../components/Home/WorkList"
import Footer from "../components/Shared/Footer";
import Subscribe from "../components/Shared/Subscribe";


const Home = () => {
    return (
        <>
        <Banner />
        <Partners />
        <WorkList />
        <Counter />
        <Subscribe />
        <Footer />
        </>
    );
};

export default Home;