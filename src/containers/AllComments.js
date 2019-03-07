import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comments from '../components/comments/Comments';
import { getComments } from '../services/blogApi';
import { fetchComments } from '../action/comments';

class AllComments extends PureComponent {
  static propTypes ={
    comments: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <>
      <Comments comments={this.props.comments} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchComments());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComments);
