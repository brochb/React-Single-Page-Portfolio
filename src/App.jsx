import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Portfolio'
import NavTabs from './components/NavTabs';
import AboutMe from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

export default function App() {
  return (
    <Router>
    <div className="portfolio-app">
      <NavTabs />
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
      </Switch>
    </div>
    </Router>
  );
}
