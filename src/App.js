import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddProject from "./components/AddProject";
import EditProject from "./components/EditProject";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/add" component={() => <AddProject />} />
          <Route exact path="/edit/:id" component={() => <EditProject />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
