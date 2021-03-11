import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import logo from './images/logo.png'

function App() {
  return (
    <div className="App">
      <Router>
      <div className="nav-bar">
        <Link to='/' style={{ textDecoration: 'none' }}><img className="logo" src={logo} alt="" srcset=""/> <span className="main-title">English Premier League</span></Link>
        </div>
        
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/team/:teamId">
            <TeamDetails></TeamDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
