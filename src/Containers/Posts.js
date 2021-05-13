import React from 'react'
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Posts = () => {
    return (
        <div>
            list of posts
            
        </div>
    )
}

Posts.propTypes ={
    actions: PropTpes.object.isRequired,
    posts: PropTypes.object.isRequired
}

function mapStateToProps(state){
    return {
        posts: state.redditPosts
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
