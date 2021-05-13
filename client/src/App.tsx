// React
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import NathanStation from './components/NathanStation';
import DadPage from './components/DadPage';
import KeithPage from './components/KeithPage';
// Styling
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={NathanStation} />
          <Route path="/dad" component={DadPage} />
          <Route path="/keith" component={KeithPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
