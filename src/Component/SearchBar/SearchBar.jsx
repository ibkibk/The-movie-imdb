import React, { Component } from "react";
import style from "./SearchBar.module.scss";

export default class SearchBar extends Component {
  render() {
    return (
      <div className={style.searchbar}>
        <form className={style.textarea} onSubmit={this.props.handleSubmit}>
          <input
            className={style.bar}
            type="text"
            placeholder="search movie"
            onChange={this.props.handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
