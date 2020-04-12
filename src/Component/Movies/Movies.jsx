import React, { Component } from "react";
import style from "../Movies/Movies.module.scss";

export default class Movies extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.main}>
          {this.props.image == null ? (
            <img
              src={
                "https://bitsofco.de/handling-broken-images-with-service-worker/"
              }
              alt=""
            />
          ) : (
            <img src={`http://image.tmdb.org/t/p/w185${this.props.image}`} />
          )}
          <p>
            <a href="">View Details</a>
          </p>
        </div>
      </div>
    );
  }
}
