import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllPosts } from '../../selectors/posts';
import Posts from '../../components/posts/Posts';
import { fetchPosts } from '../../actions/posts';


class AllPosts extends PureComponent {
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
  posts: getAllPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
