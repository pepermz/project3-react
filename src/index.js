import React from "react";
import ReactDOM from "react-dom/client";
import Home from './Home.js'
import App from "./App.js";
import Nav from "./components/Nav.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
      <Nav />
      <Routes >
        <Route path="/" element={<App />} >
          <Route index element={<Home />} />
          {/* <Route path="currencies/" element={<Currencies />} />
          <Route path="price/" element={<Price />} >
            <Route path=":symbol" element={<Price />} />
          </Route> */}
        </Route>
      </Routes>
    </Router>
)