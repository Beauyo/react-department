import React, { Fragment } from 'react';
import { Route, Switch, } from "react-router-dom";
import Home from './components/Home';
import NoMatch from "./components/NoMatch";
import Departments from './components/Departments';
import Navbar from "./components/Navbar";
import DepartmentsForm from './components/DepartmentsForm'
import DepartmentView from './components/DepartmentView';
import Items from './components/Items'
import ItemForm from './components/ItemForm'
import { Container, } from "semantic-ui-react";
import styled from 'styled-components';

const App = () => (
  <Fragment>
   <Navbar />
    <AppContainer>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/departments/new" component={DepartmentsForm} />
        <Route exact path="/departments/:department_id/items/:id" component={Items} />
      <Route exact path="/departments/:department_id/items/:id/edit" component={ItemForm} />
        <Route exact path="/departments/:id" component={DepartmentView} />
        <Route component={NoMatch} />
      </Switch>
    </AppContainer>
  </Fragment>
)

const AppContainer = styled.div `
  background: linear-gradient( aliceblue, black);
`




export default App;
