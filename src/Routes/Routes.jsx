import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import MovieCard from "../Component/MovieCard/MovieCard";
import Top from "../Component/Top/Top";
import SearchBar from "../Component/SearchBar/SearchBar";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <SearchBar path="home" />
        {/* <MovieCard path="home" /> */}
        <Top path="top10" />
      </Router>
    );
  }
}
