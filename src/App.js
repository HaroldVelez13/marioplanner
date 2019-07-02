import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import "materialize-css/dist/css/materialize.min.css";
//import Modal from './components/modal/Modal';
import './App.css';
import { CSSTransition } from 'react-transition-group'

const routes = [
  { path: '/', name: 'Dashboard', Component: Dashboard },
  { path: '/proyecto/:id', name: 'ProjectDetail', Component: ProjectDetail },
  { path: '/ingresar', name: 'SignIn', Component: SignIn },
  { path: '/registrase', name: 'SignUp', Component: SignUp },
  { path: '/crear', name: 'CreateProject', Component: CreateProject },
]

const App = () => {      
    return (
      <Router>
          <NavBar />  
            <div className="container">
                {routes.map(({ path, Component }) => (
                    <Route key={path} exact path={path}>
                      {({ match }) => (
                        <CSSTransition
                          in={match != null}
                          timeout={600}
                          classNames="page"
                          unmountOnExit
                        >
                          <div className="page">
                            <Component />
                          </div>
                        </CSSTransition>
                      )}
                    </Route>
                  ))}
              </div>         
      </Router>
    );
}



export default App;
