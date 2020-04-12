import React, { Component } from "react";
import style from "./Header.module.scss";

export default class Header extends Component {
  render() {
    return <h1 className={style.header}>IMDB MOVIE DATABASE</h1>;
  }
}
