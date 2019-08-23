// Basic
import React, { Component } from 'react';
import '../Css/Footer.css';

export default class Footer extends Component {
  render() {
    return (
        <footer class="page-footer grey darken-4">
          <div class="container">
            <div class="row">
              <div class="col l2 s12">
                <h5 class="white-text">Hey you!</h5>
                <p class="grey-text text-lighten-4">Thanks for visiting my page. If you find any bugs, you can either keep them or contact me on github. </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">More awesome websites!</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://yetris.netlify.com/">Yetris</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://herbdb.herokuapp.com/">HerbDB</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://clempire.nikl.me/">Clempire</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
             Text-Sketch 2019
            <a class="grey-text text-lighten-4 right" href="https://github.com/pl0erre/text-sketch">GitHub</a>
            </div>
          </div>
        </footer>
  
    )
  }
}
