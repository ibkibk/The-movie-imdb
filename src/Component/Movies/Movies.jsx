import React, { Component } from "react";
import style from "../Movies/Movies.module.scss";

export default class Movies extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.main}>
          {this.props.image == null ? (
            <img
              src="https://brandongaille.com/wp-content/uploads/2013/07/Dell-Company-Logo.jpg"
              alt=""
            />
          ) : (
            <img src={`http://image.tmdb.org/t/p/w185${this.props.image}`} />
          )}
          <h3>{this.props.title}</h3>
          <h3>{this.props.release}</h3>
          <h4>IMDB RATE {this.props.rate}</h4>
          <h4>{this.props.description}</h4>
        </div>
      </div>
    );
  }
}
