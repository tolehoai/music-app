import React from "react";
import PropTypes from "prop-types";
import ReactLoading from "react-loading";

Loading.propTypes = {};

function Loading(props) {
  return (
    <div>
      <ReactLoading
        type="spinningBubbles"
        color="#FF1493"
        height={200}
        width={100}
      />
      Loading...
    </div>
  );
}

export default Loading;
