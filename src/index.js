import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/*import * as serviceWorker from "./serviceWorker";*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Signin,
  Search,
  Result,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/search" element={<Search />} />
      <Route path="/result" element={<Result />} />
       
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

/*serviceWorker.unregister();*/
