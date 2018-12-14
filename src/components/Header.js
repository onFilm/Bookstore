import React from 'react';
import '../index.css';


export default class Header extends React.Component {
  render() {
    return (


              <nav class="navbar navbar-dark bg-dark rounded-bottom">
                    <a class="navbar-brand" href="#">BookStore APP</a> 
                    <ul class="nav nav-tabs justify-content-start">
                      <li class="nav-item">
                        <a class="nav-link" href="#">Active</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Disabled</a>
                      </li>
                    </ul>
               </nav>

    );
  }
}