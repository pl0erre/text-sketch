import axios from "../Utils/Axios";
import qs from "querystring";
require('dotenv').config();


export default class Process {
  
  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API; //! change url when deploy
  }

  getResult(text_url, nr_sentences) {
    return axios({
      method: "POST",
      url: "/text/process",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({text_url, nr_sentences}),
    })
    .then((res) => {
      return res;
    })
  }
}