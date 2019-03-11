import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';


export default function CommentList({ comments }) {
  const list = comments.map(comment => {
    return <Comment comment={comment.body} key={comment.id}/>;
  });
  return (
      <>
      <h3> Comments</h3>
      <ul> {list} </ul>
      </>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
};

