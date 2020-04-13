import React, { Component } from "react";
import style from "../NewReleases/NewReleases.module.scss";

export default class NewReleases extends Component {
  state = {
    released: [],
    filteredMovies: [],
  };

  recentlySubmitedMovies = (e) => {
    e.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=bd5089d1480da148e597cd682d9970a4&query=${this.state.filteredMovies}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ released: [...data.results] });
      });
  };

  newMovies = () => {
    const filteredMovies = this.state.released.filter((movie) => {
      return movie.release_date == 2019;
    });
  };
  //   recentMovies = (e) => {
  //     this.setState({ recentReleased: e.target.value });
  //   };
  render() {
    return (
      <div className={style.container}>
        <div className={style.main}>
          {this.state.image == null ? (
            <img
              src="https://brandongaille.com/wp-content/uploads/2013/07/Dell-Company-Logo.jpg"
              alt=""
            />
          ) : (
            <img src={`http://image.tmdb.org/t/p/w185${this.state.image}`} />
          )}
          <h3>{this.state.title}</h3>
          {/* <h3>
            {this.state.release
              .split(" - ")
              .map((date) =>
                new Intl.DateTimeFormat("en-GB").format(new Date(date))
              )
              .join(" - ")}
          </h3> */}
          <h3>{this.state.release}</h3>
          <h4>IMDB RATE {this.props.rate}</h4>
          <h4>
            Overview<br></br>
            <br></br>
            {this.state.description}
          </h4>
        </div>
      </div>
    );
  }
}
