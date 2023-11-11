import Footer from "../components/Shared/Footer";
import Subscribe from "../components/Shared/Subscribe";
import Members from "../components/Team/Members";
import TeamBanner from "../components/Team/TeamBanner";


const Team = () => {
  return (
    <div>
      <TeamBanner />
      <Members />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Team;
