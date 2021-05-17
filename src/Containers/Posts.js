import React, { useState } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { useEffect } from "react";
import * as actions from "../Actions/Posts";
import MainPost from "../Components/MainPost";
import PostDescription from "../Components/PostDescription";
import Pagination from "../Components/Pagination";
import Dismiss from "../Components/Dismiss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Posts = ({ actions, posts, currentPosts, paginate }) => {
  const [currentPostSelected, setCurrentPostSelecte] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    actions.getFetchPosts();

    setLoading(false);
  }, [actions]);

  const currentPostSelect = (postData) => {
    console.log("post selected: ", postData);
    setCurrentPostSelecte(postData);
    actions.updateUnreadStatusOnPost(postData);
  };

  const onDismissPost = (postData) => {
    actions.dismissAPost(postData);
  };

  const onDismissAllPosts = () => {
    actions.dismissAllPosts();
  };

  const onNewPage = (newPageIndex) => {
    actions.updatePageIndex(newPageIndex);
  };

  const renderPaginationComponent = () => {
    return (
      <Pagination
        currentPage={paginate.page}
        pageSize={paginate.pageSize}
        posts={posts.length}
        updateNewPage={onNewPage}
      ></Pagination>
    );
  };
  return (
    //  <div> soy container</div>
    <div className="container">
      {/* {loading && <div>I am loading data</div>} */}
      <div className="main-posts">
        <span className="posts-list-title margin-left">Reddit Posts List</span>
        <div className="posts-list-scrollable">
          {renderPaginationComponent()}
          {currentPosts.map((post) => (
              <MainPost
                key={post.id}
                data={post}
                onPostClicked={currentPostSelect}
                onDismissPost={onDismissPost}
              ></MainPost>
          ))}
          {renderPaginationComponent()}
        </div>
        <div>
          <Dismiss onDismissAllPosts={onDismissAllPosts}></Dismiss>{" "}
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
  currentPosts: PropTypes.array.isRequired,
  paginate: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.postsReducer.topPosts,
    currentPosts: state.postsReducer.currentPosts,
    paginate: state.postsReducer.paginate,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
