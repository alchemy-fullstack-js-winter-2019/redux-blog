import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostDetail from '../components/posts/PostDetail';
import { getPost } from '../selectors/posts/posts';
import { fetchPost } from '../action/posts';
import { withRouter } from 'react-router-dom';
import AllComments from './AllComments';
class Post extends PureComponent {
  static propTypes = {
    post: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    this.props.fetch(this.props.match.params.id);
  }

  render() {
    return (
      <>
        <PostDetail post={this.props.post}/>
        <h2>Comments:</h2>
        <AllComments />
      </>
    );
  }
}

const mapStateToProps = state => ({
  post: getPost(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchPost(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Post));
