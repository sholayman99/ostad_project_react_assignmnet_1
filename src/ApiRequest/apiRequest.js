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

export  async function serviceListRequest() {
 try {
    let res = await axios.get("../Database/services.json");
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

export async function projectsListRequest (){
   try {
      let res = await axios.get("../Database/projects.json");
      let result = await res.data ;
    if(result['msg'] ==="success"){
        return result['data'];
    }
   } catch (error) {
      console.log(error)
   }
}

export async function testimonialsListRequest (){
   try {
      let res = await axios.get("../Database/testimonials.json");
      let result = await res.data ;
    if(result['msg'] ==="success"){
        return result['data'];
    }
   } catch (error) {
      console.log(error)
   }
}