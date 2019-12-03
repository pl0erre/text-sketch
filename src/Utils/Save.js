import axios from "../Utils/Axios";
import qs from "querystring";
require('dotenv').config();


export default class Save  {

  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API;
  }

  saveText(text_processed, languages, labels, text_name) {
    let text = JSON.stringify({text_processed, languages, labels, text_name});
    return axios({
      method: "POST",
      url: "/text/save",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({text}),
    })
    .then((response)=> {
      // response.status(200)
    })
  }

  
}
