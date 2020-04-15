import React, { Component } from "react";
import style from "./MovieCard.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";

export default class MovieCard extends Component {
  state = {
    movies: [],
    searchMovie: "",
  };
  // const apikey = bd5089d1480da148e597cd682d9970a4;
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.searchMovie) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=bd5089d1480da148e597cd682d9970a4&query=${this.state.searchMovie}`
      )
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          this.setState({ movies: [...data.results] });
        });
    } else return;
  };
  handleChange = (e) => {
    this.setState({ searchMovie: e.target.value });
  };

  render() {
    return (
      <>
        <SearchBar
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <div className={style.main}>
          <MovieCardList movies={this.state.movies} />
        </div>
      </>
    );
  }
}
