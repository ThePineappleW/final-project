import './App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './dashboard.js';



const About = () => (
  <div>
    <h1>About</h1>
  </div>
);

const Login = () => (
  <div>
    <h1>Log In</h1>
  </div>
);

const DashboardContainer = () => (
  <div id="dashboard-container">
    <Dashboard />
  </div>
);

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
      <div id="navbar-container">
        <Router>
          <div>
            <aside id="navbar">
              <Link class="navButton" to="/">Dashboard</Link>
              <Link class="navButton" to="/about">About</Link>
              <Link class="navButton" to="/login">Log In</Link>
            </aside>

            <main id="content-container">
              <Route exact path="/" component={DashboardContainer} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
            </main>
          </div>
        </Router>
      </div>
      <div id="footer-container">
        <ul id="footer">
          <li class="footer-link">
            © 2021 LAS Externs
          </li>
          <li class="footer-link">
            Privacy Policy
          </li>
          <li class="footer-link">
            Contact Us
          </li>
        </ul>
      </div>  
    </div>
    );
  };
}

export default App;
