import React, { Component } from "react";
import style from "../NavBar/NavBar.module.scss";
import NavItems from "../NavBar/NavItems/NavItems";

export default class NavBar extends Component {
  render() {
    return (
      <div className={style.top}>
        <NavItems route="/watchlist" name="WatchList" />
        <NavItems route="/top100" name="IMBD TOP 100" />
        <NavItems route="/newestreleases" name="NEWEST RELEASES" />
      </div>
    );
  }
}
