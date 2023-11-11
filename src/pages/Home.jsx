import Banner from "../components/Home/Banner";
import Counter from "../components/Home/Counter";
import Partners from "../components/Home/Partners";
import WorkList from "../components/Home/WorkList";
import Subscribe from "../components/Shared/Subscribe";


const Home = () => {
    return (
        <>
        <Banner />
        <Partners />
        <WorkList />
        <Counter />
        <Subscribe />
        </>
    );
};

export default Home;