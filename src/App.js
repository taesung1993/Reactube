import React from "react";
import axios from "axios";
import Video from "./Video";

// Potato 컴포넌트에 fav라는 이름에 chip이라는 value로 준 것.
// fav="chip"과 같은 것을 props라고 부른다.
// Props는 읽기전용, State는 Props와 비슷하지만
// 비공개이고 컴포넌트에 의해 제어됨.
//  동적 데이터와 함께 작업할 때 만들어짐. 변하지 않고
// 존재하지 않는 데이터

// class에서 reder 메서드는 업데이트가 발생할 때 마다 호출
// Props를 생성자에서 super 메서드를 이용해서 항상 호출 할 것.
// react는 자동적으로 class component의 render 메서드를 자동으로 실행한다.
// 매순간 내가 set State를 호출할 때마다
// react는 새로운 state와 함께 render 메서드를 호출한다.

// unmounting: state를 사용해서 컴포넌트를 바꾸거나 페에지를 바꿀 때 발생
// componentDidMount: "이봐, 이 컴포넌트가 처음 랜더됐어!"

const API_KEY = "API_KEY_HIDE";
const API_URL = `https://www.googleapis.com/youtube/v3`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      videos: [],
    };
  }

  getYoutubeQuery = async () => {
    const res = await axios({
      baseURL: `${API_URL}/search`,
      method: "get",
      params: {
        part: "snippet",
        q: "케인",
        key: API_KEY,
        type: "video",
        maxResults: 10,
      },
    });

    const {
      data: { items },
    } = res;
    this.setState({
      isLoading: false,
      videos: items,
    });
    console.log(this.state.videos);
  };

  componentDidMount() {
    this.getYoutubeQuery();
  }
  render() {
    const { isLoading, videos } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : videos.map((video) => {
              console.log(video);
              return (
                <Video key={video.id.videoId} title={video.snippet.title} />
              );
            })}
      </div>
    );
  }
}

export default App;
