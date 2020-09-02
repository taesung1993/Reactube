import React from "react";
import { Link } from "react-router-dom";

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

  render() {
    const { keyword } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your keyword"
            name="keyword"
            onChange={this.handleChange}
          />
          <Link
            to={{
              pathname: "/result",
              search: `?keyword=${keyword}`,
            }}
          >
            <button>Search</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Home;
