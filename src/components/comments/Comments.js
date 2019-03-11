import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styles1 from '../app/App.css';

export default function Comments({ comments }) {
  const listOfComments = comments.map((comment, i) => {
    return (
      <li key={i}>
        <Comment comment={comment}/>
      </li>
    );
  });

  return (
    <>
      <ul className={styles1.body}>
        {listOfComments}
      </ul>
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array
};
