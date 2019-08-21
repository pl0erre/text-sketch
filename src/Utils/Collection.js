import axios from "../Utils/Axios";
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

  deleteText(id) {
    return axios({
      method: "POST",
      url: `/text/delete/${id}`,
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
  }

}



