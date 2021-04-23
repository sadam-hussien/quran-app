import React, { useEffect } from "react";

import {connect} from "react-redux";

import {loadReaders} from "./store/actions";

import {BrowserRouter, Route, Switch} from "react-router-dom";

// global
import {Header, Aside} from "./components/layout";

// views
import {Home, Reader} from "./views";

// **** end

function App({loadReaders}) {

  // load readers
  useEffect( () => {

    loadReaders();

  }, [loadReaders]);

  // for arabic language
  useEffect( () => {

      document.documentElement.setAttribute("lang", "ar");

      document.documentElement.setAttribute("dir", "rtl");
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 order-1 order-lg-0">
                <div className="padding-vertical">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/:id" component={Reader} />
                  </Switch>
                </div>
              </div>
              <div className="col-lg-3 order-0 order-lg-1">
                <Aside />
              </div>
            </div>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default connect(null, {loadReaders})(App);
