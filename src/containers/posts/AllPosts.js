import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getFilteredPosts } from '../../selectors/posts';
import { fetchPosts, updatePostSearchTerm } from '../../actions/posts';
import Posts from '../../components/posts/Posts';

class AllPosts extends PureComponent {
  static propTypes = {
    posts: PropTypes.array,
    fetch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string
  };

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { posts, searchTerm, onChange } = this.props;
    return (
      <>
        <label>Search Posts
          <input onChange={onChange} type="text" name="searchTerm" value={searchTerm}></input>
        </label>
        {posts && <Posts posts={posts}/>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  posts: getFilteredPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchPosts());
  },
  onChange({ target }) {
    dispatch(updatePostSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
