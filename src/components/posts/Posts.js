import CreateList from '../higher-order/CreateList';
import PropTypes from 'prop-types';
import Post from './Post';
import styles from '../styles/Posts.css';

function Posts({ posts }) {
  return CreateList(Post, posts, styles.Posts);
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
