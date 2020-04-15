import React, { Component } from "react";
import style from "../NavBar/NavBar.module.scss";
import NavItems from "../NavBar/NavItems/NavItems";

export default class NavBar extends Component {
  render() {
    return (
      <div className={style.top}>
        <NavItems route="home" name="Search Movie" />
        <NavItems route="newestreleases" name="IMDB TOP 10" />
      </div>
    );
  }
}
