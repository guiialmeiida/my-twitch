import React from "react";
import TopBar from "./TopBar";
import { Router, Route } from "react-router-dom";

import history from '../history';

import {
  StreamCreate,
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow
} from "./streams";

const App = () => {
  return (
    <>
      <Router history={history}>
        <TopBar />
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/edit/:id" component={StreamEdit} />
        <Route exact path="/streams/delete/:id" component={StreamDelete} />
        <Route exact path="/streams/show" component={StreamShow} />
      </Router>
    </>
  );
};

export default App;
