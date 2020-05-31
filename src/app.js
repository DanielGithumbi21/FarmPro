import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import './App.scss';

class App extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Route path="/" exact component={Login} />
                <Route path="/register" exact component={Register} />
            </Router>
        );
    }
}

export default App;