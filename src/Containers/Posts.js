import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as actions from "../Actions/Posts";

const Posts = ({ actions, posts }) => {
  useEffect(() => {
    actions.getFetchPosts();
  }, [actions]);
  return (
    //  <div> soy container</div>
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.id}</div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.topPosts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
