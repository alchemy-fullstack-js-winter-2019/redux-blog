import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CommentList from '../comments/CommentList';

export default class PostDetails extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    comments: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    fetchPost: PropTypes.func.isRequired,
    fetchComments: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch(this.props.match.params.userId);
    this.props.fetchPost(this.props.match.params.id);
    this.props.fetchComments(this.props.match.params.id);
  }
  render() {
    const { name, email, website } = this.props.user;
    const { title, body } = this.props.post;
    const { comments } = this.props;

    return (
    <>
      <p> author details: 
        {name}
        {email}
        {website}
      </p>
      <h2> title: {title}</h2>
      <p>body: {body}</p>
      <CommentList comments={comments}/>
    </>
    );
  }
}


