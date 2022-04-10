import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import ScrollToTop from "./Components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CV from "./Components/CV";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop />
          <div id="nav">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/">Portfolio</Link>
              </li>
              <li>
                <Link to="/cv">Cv</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <Switch>
            <Route exact path="/cv" component={CV} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Portfolio} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
