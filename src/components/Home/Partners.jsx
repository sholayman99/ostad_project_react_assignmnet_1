import google from "../../assets/image/google.svg"
import monday from "../../assets/image/monday.svg"
import Notion from "../../assets/image/Notion.png"
import slack from "../../assets/image/slack.png"
import trello from "../../assets/image/trello.png"
 

const Partners = () => {
    return (
        <section className="px-6 lg:px-16 py-12 gap-16 lg:gap-5 my-10 bg-base-100 grid grid-cols-1 lg:grid-cols-5">
          <img src={google} />  
          <img src={trello} />  
          <img src={monday} />  
          <img src={Notion} />  
          <img src={slack} />  
        </section>
    );
};

export default Partners;