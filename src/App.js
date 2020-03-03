import React, { Component } from "react";
import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Nav/Navbar";
import TourList from "./components/TourList/TourList";
import { tourData } from "./tourData";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <TourList />
      </>
    );
  }
}

export default App;
