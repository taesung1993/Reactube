import React from "react";
import PropTypes from "prop-types";

const VIDEO_LINK = "https://www.youtube.com/watch?v=";

const Video = ({ id, title, creator, publishedAt, thumbnail }) => {
  return (
    <section id={id}>
      <a href={`${VIDEO_LINK}${id}`}>
        <img src={thumbnail} alt="thumbnail" />
        <div className="info">
          <h3 className="title">{title}</h3>
          <span className="creator">{creator}</span>
          <span className="publishedAt">{publishedAt}</span>
        </div>
      </a>
    </section>
  );
};

Video.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  creator: PropTypes.string,
  publishedAt: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Video;
