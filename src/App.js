import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import NavBar from "./Component/NavBar/NavBar";
import Routes from "../src/Routes/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      {/* <MovieCard /> */}
      <Routes />
    </div>
  );
}

export default App;
