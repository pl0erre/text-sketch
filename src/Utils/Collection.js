import axios from "../Utils/Axios";
// import Auth from "./Auth";
require('dotenv').config();


export default class Collection  {

  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API;
    // this.session = new Auth();
  }

  getCollection() {
    return axios({
      method: "POST",
      url: "/text/collection",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
  }

  // getCollection() {
  //   const userId = this.service.getUser().id;

  //   return axios({
  //     method: "POST",
  //     url: "/text/collection",
  //     baseURL: this.domain,
  //     data : {id:userId},
  //     headers: { 'content-type': 'application/x-www-form-urlencoded' },

  deleteText(id) {
    return axios({
      method: "POST",
      url: `/text/delete/${id}`,
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
  }

}



