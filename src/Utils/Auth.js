import axios from "../Utils/Axios";
import qs from "querystring";
require('dotenv').config();


export default class Auth {

  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API;
    // this.domain = domain || "http://localhost:3001";

    this.login = this.login.bind(this);
  }

  login(username, password) {
    debugger
    return axios({
        method: "POST",
        url: "/auth/login",
        baseURL: this.domain,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({username, password}),
    })
    .then((response)=> {
      this.setUser(response.data);
    })
  }

  signup({username, email, password, id}) {
    return axios({
        method: "POST",
        url: "/auth/signup",
        baseURL: this.domain,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({username, email, password, id}),
    })
    .then((response)=> {
      this.setUser(response.data);
    })
  }

  loggedIn(){
    const user = this.getUser()
    return !!user; 
  }

  setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  logout(){
    return axios({
        baseURL: this.domain,
        url: "/auth/logout",
    })
    .then(()=> {
        localStorage.removeItem('user');
    })
  }    
}