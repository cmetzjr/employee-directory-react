import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=75&nat=us";


// get dummy employees
export default {
  getDummyEmp: ()=> axios.get(BASEURL)
};