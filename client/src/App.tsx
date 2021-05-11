// React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import LandingPage from './components/LandingPage';
import LinkListClone from './components/LinkListClone';
import PersonalDesign from './components/PersonalDesign';
// Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LinkListClone} />
          <Route path="/home-1" component={LandingPage} />
          <Route path="/home-2" component={PersonalDesign} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
