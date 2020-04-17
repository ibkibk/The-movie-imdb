import React, { Component } from "react";
import { Router, Redirect, globalHistory } from "@reach/router";
import MovieCard from "../Component/MovieCard/MovieCard";
import Top from "../Component/Top/Top";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <MovieCard path="home" />
        <Top path="newestreleases" />
      </Router>
    );
  }
}
