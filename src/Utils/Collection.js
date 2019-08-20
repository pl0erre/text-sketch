import axios from "../Utils/Axios";
import qs from "querystring";
require('dotenv').config();



export default class Collection  {

  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API; //! change url when deploy
  }

  getCollection() {
    return axios({
      method: "POST",
      url: "/text/collection",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
  }

  getSingle(id) {
    return axios({
      method: "POST",
      url: "/text/single",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
  }

}
