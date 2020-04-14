import React, { Component } from "react";
import style from "../Top10/Top10.module.scss";

export default class Top10 extends Component {
  render() {
    return (
      <div className={style.container}>
        <div className={style.main}>
          <img src={this.props.users.image} />
          <h3>{this.props.users.title}</h3>

          <h3>{this.props.users.year}</h3>
          <h4>IMDB RATE{this.props.users.rate}</h4>
          <h4>
            Overview<br></br>
            <br></br>
            {this.props.users.overview}
          </h4>
        </div>
      </div>
    );
  }
}
