import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import "materialize-css/dist/css/materialize.min.css";
import './App.css';


const App = () => {      
    return (
      <Router>
          <NavBar />  
            <Route  path="/" component={Dashboard} />
            <Route  path="/proyecto/:id" component={ProjectDetail} />
            <Route  path="/ingresar" component={SignIn} />
            <Route  path="/registrase" component={SignUp} />
            <Route  path="/crear" component={CreateProject} />                  
      </Router>
    );
}



export default App;
