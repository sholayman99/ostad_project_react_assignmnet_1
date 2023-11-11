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

export  async function counterListRequest() {
 try {
    let res = await axios.get("../Database/counter.json");
    let result = await res.data ;
    if(result['msg'] ==="success"){
        return result['data'];
    }
 } catch (error) {
    console.log(error)
 }
}

export  async function productListRequest() {
 try {
    let res = await axios.get("../Database/product.json");
    let result = await res.data ;
    if(result['msg'] ==="success"){
        return result['data'];
    }
 } catch (error) {
    console.log(error)
 }
}

export async function membersListRequest (){
   try {
      let res = await axios.get("../Database/members.json");
      let result = await res.data ;
    if(result['msg'] ==="success"){
        return result['data'];
    }
   } catch (error) {
      console.log(error)
   }
}