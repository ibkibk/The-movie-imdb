import React from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import NavBar from "./Component/NavBar/NavBar";
import Routes from "../src/Routes/Routes";
import SearchBar from "./Component/SearchBar/SearchBar";
import MovieCard from "./Component/MovieCard/MovieCard";

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
