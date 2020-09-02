import React from "react";
import { Redirect } from "react-router-dom";

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      keyword: this.props.location.search.replace(/[?keyword=]/g, ""),
    };
  }

  componentDidMount() {
    const { keyword } = this.state;
    console.log(keyword);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are Ready"}</div>;
  }
}

export default Result;
