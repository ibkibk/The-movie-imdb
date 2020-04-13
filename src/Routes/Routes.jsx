import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import NewReleases from "../Component/NewReleases/NewReleases";
import MovieCard from "../Component/MovieCard/MovieCard";
import SearchBar from "../Component/SearchBar/SearchBar";
import MovieCardList from "../Component/MovieCardList/MovieCardList";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <MovieCard path="home" />
        <NewReleases path="newestreleases" />
      </Router>
    );
  }
}
