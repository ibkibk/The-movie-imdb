import React, { Component } from "react";
import style from "./Header.module.scss";
import image from "../../image/IMDBlogo.svg";

export default class Header extends Component {
  render() {
    return (
      <>
        <div className={style.header}>
          <img className={style.image} src={image} />
        </div>
      </>
    );
  }
}
