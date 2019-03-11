import React from 'react';
import PropTypes from 'prop-types';

function Comments({ comments }) {
  const listOfComments = comments.map(comment => {
    return (
      <li key={comment.id}>
        {comment.name}
        {comment.body}
      </li>
    );
  });
  return (
    <ul>
      {listOfComments}
    </ul>
  );
}

Comments.propTypes = {
  comments: PropTypes.array.isRequired
};

export default Comments;
