import React, { Component } from "react";
import style from "../Top/Top.module.scss";
import { firestore } from "../../firebase";
import Top10 from "../Top10/Top10";

export default class Top extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    firestore
      .collection("users")
      .get()
      .then((query) => {
        const users = query.docs.map((doc) => doc.data());
        this.setState({
          users: users,
        });
      });
  }
  render() {
    return (
      // <>
      //   <ReleaseCard />
      // </>
      <>
        {this.state.users.map((user, index) => (
          <Top10 users={user} key={index} />
        ))}
      </>
    );
  }
}
