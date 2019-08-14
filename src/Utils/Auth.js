import axios from "axios";
import qs from "querystring";

export default class Auth {
  constructor(domain) {
    this.domain = domain || process.env.REACT_APP_API; //! set correct url in .env
    this.login = this.login.bind(this);
  }

  login(username, password) {
    return axios({
        method: "POST",
        url: "/auth/login",
        baseURL: this.domain,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({username, password}),
    })
    .then((response)=> {
      this.setUser(response.data)
    })
  }

  signup({username, email, password, password_repeat}) {
    return axios({
        method: "POST",
        url: "/auth/signup",
        baseURL: this.domain,
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({username, email, password, password_repeat}),
    })
    .then((response)=> {
      this.setUser(response.data);
      this.props.history.push('/login');
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
        url: "/auth/logout"
    })
    .then((res)=> {
        localStorage.removeItem('user');
    })
  }    
}