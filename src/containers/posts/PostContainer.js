import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PostDetail from '../../components/posts/PostDetail';
import { getPostById } from '../../selectors/posts';
import { fetchPost } from '../../actions/posts';
import { resetState } from '../../actions/common';
import PropTypes from 'prop-types';
import { getAllComments } from '../../selectors/comments';
import { fetchPostComments } from '../../actions/comments';

class PostContainer extends PureComponent {
  static propTypes = {
    postDetail: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    resetStateFunc: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch();
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.props.fetch();
    }
  }

  componentWillUnmount() {
    this.props.resetStateFunc();
  }

  render() {
    return (
      <PostDetail {...this.props} />
    );
  }
}


const mapStateToProps = (state) => ({
  postDetail: getPostById(state),
  comments: getAllComments(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchPost(props.match.params.id));
    dispatch(fetchPostComments(props.match.params.id));
  },
  resetStateFunc() {
    dispatch(resetState());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
