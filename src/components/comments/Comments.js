import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';


function Comments({ comments }) {
  const listOfComments = comments.map(comment => {
    return (
      <Comment key={comment.id} comment={comment} />
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
