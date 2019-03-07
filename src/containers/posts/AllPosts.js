// import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AllPosts from '../../components/posts/AllPosts';
import { getPostsAction } from '../../actions/posts';
import { getPosts } from '../../selectors/posts';


const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(getPostsAction());
  }
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
