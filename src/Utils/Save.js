import axios from "../Utils/Axios";
import qs from "querystring";
require('dotenv').config();



export default class Save  {

  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API; //! change url when deploy
  }

  saveText({text_processed, languages, labels}) { // !unfinished
    return axios({
      method: "POST",
      url: "/text/save",
      baseURL: this.domain,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data: qs.stringify({text_processed, languages, labels}),
    })
    .then((response)=> {
      this.props.history.push('/collection')
    })

  }
}
