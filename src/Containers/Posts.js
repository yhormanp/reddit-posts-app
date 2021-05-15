import React, { useState } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as actions from "../Actions/Posts";
import MainPost from "../Components/MainPost";
import PostDescription from "../Components/PostDescription";

const Posts = ({ actions, posts }) => {
  const [currentPostSelected, setCurrentPostSelecte] = useState(null);

  useEffect(() => {
    actions.getFetchPosts();
  }, [actions]);

  const currentPostSelect = (postData) => {
    console.log(postData);
    setCurrentPostSelecte(postData);
  };
  return (
    //  <div> soy container</div>
    <div className="container">
      <div className="main-posts">
        <span className="posts-list-title margin-left">Reddit Posts List</span>
        <div className="posts-list-scrollable">
          {posts.map((post) => (
            //   <div key={post.id}>{post.id}</div>
            <MainPost
              key={post.id}
              data={post}
              onPostClicked={currentPostSelect}
            ></MainPost>
          ))}
        </div>
      </div>
      <div className="post-description">
        <PostDescription data={currentPostSelected}></PostDescription>
      </div>
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
