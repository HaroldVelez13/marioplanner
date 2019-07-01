import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import 'materialize-css/dist/css/materialize.min.css';


class App extends Component {
  render(){
    return (
      <Router>

          <NavBar />
          <Switch>
            <Route  exact path="/" component={Dashboard} />
            <Route  path="/proyecto/:id" component={ProjectDetail} />
            <Route  path="/ingresar" component={SignIn} />
            <Route  path="/registrase" component={SignUp} />
            <Route  path="/crear" component={CreateProject} />
          </Switch>

      </Router>
    );
  }
}



export default App;
