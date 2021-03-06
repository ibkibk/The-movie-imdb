import React, { Component } from "react";
import style from "./MovieCardList.module.scss";
import Movies from "../Movies/Movies";

export default class MovieCardList extends Component {
  render() {
    return (
      <div className={style.main}>
        {this.props.movies.map((movie, index) => {
          return (
            <Movies
              key={index}
              image={movie.poster_path}
              title={movie.title}
              release={movie.release_date}
              rate={movie.vote_average}
              description={movie.overview}
            />
          );
        })}
      </div>
    );
  }
}
