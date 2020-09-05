import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: null,
    };
  }

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { keyword } = this.state;
    this.props.history.push({
      pathname: "/result",
      search: `?keyword=${keyword}`,
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <Link to="/">
            <span>Reactube</span>
          </Link>
          <span>serch the video you want to see</span>
        </header>
        <main>
          <div className="search-box">
            <h3>Search the the keyword.</h3>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Enter your keyword"
                name="keyword"
                onChange={this.handleChange}
              />
              <button type="submit">Search</button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
