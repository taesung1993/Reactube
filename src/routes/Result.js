import React from "react";
import axios from "axios";
import dotenv from "dotenv";
import { Link } from "react-router-dom";

import Video from "../components/Video";

dotenv.config();

const YOUTBE_API = process.env.REACT_APP_YTB_API_URL;
const YOUTUBE_API_KEY = process.env.REACT_APP_YTB_API_KEY;

class Result extends React.Component {
  constructor(props) {
    super(props);
    const path = this.props.location.search;
    const query = new URLSearchParams(path).get("keyword");
    console.log(path, query);
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
      <div>
        <header>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="enter your keyword"
              onChange={this.handleChange}
            />
            <input type="submit" value="Search" />
          </form>
        </header>
        <main>
          {isLoading
            ? "Loading..."
            : videos.map((video) => {
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
              })}
        </main>
      </div>
    );
  }
}

export default Result;
