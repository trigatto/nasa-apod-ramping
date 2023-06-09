import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Description from "./pages/Description";
import Photos from "./pages/Photos";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Photos} />
        <Route path="/description/:id" component={Description} />
      </Switch>
    </div>
  );
}

export default App;
