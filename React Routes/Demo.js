import React, { Component } from "react";
import {
    Route,
    Link,
    HashRouter, BrowserRouter as Router,Routes
} from "react-router-dom";
import AboutUs from "./AboutUs";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Sign from "./Sign";
class Demo extends Component {
    render() {
        return (
            <Router>
                <div className="ert">
                <h1>Simple SPA</h1>
                </div>
                <div className="qwer">
                   
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Stuff">Stuff</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Sign">SignUp</Link></li>
                    </ul>
                    <div>
                    <Routes>
                        <Route exact path="/" element={<AboutUs/>} />
                        <Route path="/Stuff" element={<Stuff/>} />
                        <Route path="/Contact" element={<Contact/>} />
                        <Route path="/Sign" element={<Sign/>} />
                    </Routes>    
                    </div>
                </div>
            </Router>
        );
    }
}
export default Demo;