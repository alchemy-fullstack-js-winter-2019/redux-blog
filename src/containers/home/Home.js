import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLongestPosts } from '../../selectors/posts';
import LongestPosts from '../../components/posts/LongestPosts';
import { fetchPosts } from '../../actions/posts';

class Home extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() { 
    this.props.fetch();
  }

  render() {
    return (
      <LongestPosts {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: getLongestPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
