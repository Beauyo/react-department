import React, { Fragment } from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from './components/Home';
import NoMatch from "./components/NoMatch";
import Departments from './components/Departments';
import DepartmentsForm from './components/DepartmentsForm'
import DepartmentView from './components/DepartmentView';
import { Container, } from "semantic-ui-react";

const App = () => (
  <Fragment>
   
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)


export default App;