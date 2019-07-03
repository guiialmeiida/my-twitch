import React from "react";
import TopBar from "./TopBar";
import { BrowserRouter, Route } from "react-router-dom";

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
      <BrowserRouter>
        <TopBar />
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/edit" component={StreamEdit} />
        <Route exact path="/streams/delete" component={StreamDelete} />
        <Route exact path="/streams/show" component={StreamShow} />
      </BrowserRouter>
    </>
  );
};

export default App;
