import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import styles from 'styled-components';

export const Detail = styles.div`
@media (min-width: 374px) {
  font-family: 'Roboto', san-serif;
  color: rgb(93, 95, 96);
  margin-top: 2em;
  }
  li {
    list-style: none;
  }
  p {
    font-size: 12px;
  }
  @media (min-width: 600px) {
    font-family: 'Roboto', san-serif;
    color: rgb(93, 95, 96);
    margin-top: 4em;
    }
    li {
      list-style: none;
    }
    p {
      font-size: 30px;
    }
    h4 {
      font-size: 40px;
    }
    h1 {
      font-size: 50px;
    }
`;

const PostDetail = ({ postDetail, comments }) => {

  const postComments = comments.map((comment, i) => {
    return (<li key={i}> {comment.body} </li>);
  });
 
  if(!postDetail) {
    return <Redirect to={ROUTES.HOME.linkTo()} />;
  }
  const { title, body } = postDetail;

  return (
    <>
    <Detail>
      <h1> Post Detail </h1>
      <h4> Title </h4>
      <p> {title} </p>
      <p> {body} </p>
      <h4> Post Comments</h4>
      <p> {postComments} </p>
    </Detail>
    </>
  );
};

PostDetail.propTypes = {
  postDetail: PropTypes.object.isRequired,
  comments: PropTypes.array
};

export default PostDetail;
