import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilteredPosts } from '../../selectors/posts';
import Posts from '../../components/posts/Posts';
import { fetchPosts } from '../../actions/posts';

class FilteredPosts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() { 
    this.props.fetch();
  }

  render() {
    return (
      <Posts {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: getFilteredPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredPosts);
