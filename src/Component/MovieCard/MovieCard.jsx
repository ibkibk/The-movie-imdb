import React, { Component } from "react";
import style from "./MovieCard.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import MovieCardList from "../MovieCardList/MovieCardList";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export default class MovieCard extends Component {
  state = {
    movies: [],
    searchMovie: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const API_KEY = "REACT_APP_API_KEY";
    if (this.state.searchMovie) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${this.state.searchMovie}`
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
