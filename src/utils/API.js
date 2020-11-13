import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10&nat=us";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=75";

// get dummy employees
export default {
  getDummyEmp: ()=> axios.get(BASEURL)
};