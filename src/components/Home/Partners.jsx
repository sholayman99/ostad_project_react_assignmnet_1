import google from "../../assets/image/google.svg"
import monday from "../../assets/image/monday.svg"
import Notion from "../../assets/image/Notion.png"
import slack from "../../assets/image/slack.png"
import trello from "../../assets/image/trello.png"
 

const Partners = () => {
    return (
        <section className=" p-10 mb-10 bg-base-100 flex items-center justify-between">
          <img src={google} />  
          <img src={trello} />  
          <img src={monday} />  
          <img src={Notion} />  
          <img src={slack} />  
        </section>
    );
};

export default Partners;