import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comments from '../components/comments/Comments';
import { reset } from '../action/common/reset';
import { getComments } from '../selectors/comments/comments';
import { fetchComments } from '../action/comments';
import { withRouter } from 'react-router-dom';
class AllComments extends PureComponent {
  static propTypes ={
    comments: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  };
  
  componentDidMount() {
    this.props.fetch();
  }

  componentWillUnmount() {
    this.props.reset();
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

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    dispatch(fetchComments(props.match.params.id));
  },
  reset() {
    dispatch(reset());
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComments));
