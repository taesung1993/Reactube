import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import Video from "../components/Video";
import { Link } from "react-router-dom";
import "./Result.scss";

dotenv.config();

const YOUTBE_API = process.env.REACT_APP_YTB_API_URL;
const YOUTUBE_API_KEY = process.env.REACT_APP_YTB_API_KEY;

class Result extends React.Component {
  constructor(props) {
    super(props);
    const path = this.props.location.search;
    const query = new URLSearchParams(path).get("keyword");
    this.state = {
      isLoading: true,
      keyword: query,
      videos: [],
    };
  }

  getVideos = async (keyword) => {
    const res = await axios({
      baseURL: `${YOUTBE_API}search`,
      params: {
        q: keyword,
        key: YOUTUBE_API_KEY,
        part: "snippet",
        maxResults: 5,
        type: "video",
      },
    });
    const {
      data: { items },
    } = res;

    this.setState({
      isLoading: false,
      videos: items,
    });
  };

  handleChange = (event) => {
    this.setState({
      keyword: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { keyword } = this.state;

    this.setState({
      isLoading: true,
    });
    this.props.history.push({
      pathname: "/result",
      search: `?keyword=${keyword}`,
    });
    this.getVideos(keyword);
  };

  componentDidMount() {
    const { keyword } = this.state;
    this.getVideos(keyword);
  }

  render() {
    const { isLoading, videos } = this.state;
    return (
      <div className="container">
        <header className="result__header">
          <div className="header__column">
            <Link to="/">
              <span>Reactube</span>
            </Link>
          </div>
          <div className="header__column">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="enter your keyword"
                onChange={this.handleChange}
              />
            </form>
          </div>
          <div className="header__column">
            <span>serch the video you want to see</span>
          </div>
        </header>
        <main>
          {isLoading ? (
            <div className="loading-box">
              <div className="loading"></div>
              <div className="text">Loading</div>
            </div>
          ) : (
            videos.map((video) => {
              const {
                id: { videoId },
                snippet: {
                  channelTitle: creator,
                  publishedAt,
                  title,
                  thumbnails: {
                    medium: { url: thumbnail },
                  },
                },
              } = video;

              return (
                <Video
                  key={videoId}
                  id={videoId}
                  title={title}
                  creator={creator}
                  publishedAt={publishedAt}
                  thumbnail={thumbnail}
                />
              );
            })
          )}
        </main>
      </div>
    );
  }
}

export default Result;
