import axios from "axios" ;


export  async function workListRequest() {
 try {
    let res = await axios.get("../public/Database/WorkList.json");
    let result = await res.data ;
    if(result['msg'] ==="success"){
        return result['data'];
    }
    
    
 } catch (error) {
    console.log(error)
 }
}