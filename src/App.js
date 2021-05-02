import React from "react";

import {connect} from "react-redux";

import {BrowserRouter, Route, Switch} from "react-router-dom";

// global
import {Header, Aside} from "./components/layout";

import {Player} from "./components/global";

// views
import {Home, Hadith, Hadiths, Reader, Favourites} from "./views";

// **** end

function App({media}) {

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
                    <Route path="/favourites" component={Favourites} />
                    <Route path="/hadith/:id" component={Hadiths} />
                    <Route path="/hadith" component={Hadith} />
                    <Route path="/:id" component={Reader} />
                  </Switch>
                </div>
              </div>

              <div className="col-lg-3 order-0 order-lg-1">
                <Aside />
              </div>

            </div>

          </div>

          {/* start audio-player  */}
          {
            media.length > 0 && (<Player />)
          }
          

      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    media: state.media
  }
}

export default connect(mapStateToProps)(App);