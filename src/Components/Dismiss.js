import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Dismiss = ({ onDismissAllPosts, posts }) => {
  return (
    <div className="dismiss-all margin-left">
      <div className="post-action-pack" onClick={() => onDismissAllPosts()}>
        <HighlightOffIcon color="error" fontSize="large"></HighlightOffIcon>

        <span className="dismiss-all-text">Dismiss All Posts</span>
      </div>
    </div>
  );
};

export default Dismiss;
