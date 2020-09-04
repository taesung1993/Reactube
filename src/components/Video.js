import React from "react";
import PropTypes from "prop-types";

const Video = ({ id, title, creator, publishedAt, thumbnail }) => {
  return (
    <section>
      <img src={thumbnail} alt="thumbnail" />
      <h3>{title}</h3>
      <span>{creator}</span>
      <span>{publishedAt}</span>
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
