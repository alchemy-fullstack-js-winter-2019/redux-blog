import CreateList from '../higher-order/CreateList';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styles from '../styles/Comments.css';

function Comments({ comments }) {
  return CreateList(Comment, comments, styles.Comments);
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
