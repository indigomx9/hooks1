import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../components/Home";
import { About } from "../components/About";
import "./App.css";

const App = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);

export default App;

