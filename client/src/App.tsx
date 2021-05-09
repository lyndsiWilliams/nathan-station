// React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import OtherHome from './components/OtherHome';
// Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home-1" component={Home} />
          <Route path="/home-2" component={OtherHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
