import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostDetails extends PureComponent {
  static propTypes = {
    match: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetch(this.props.match.params.userId);
  }
  render() {
    const { name, email, website } = this.props.user;
    return (
    <>
      <p>
        {name}
        {email}
        {website}
      </p>
  
    </>
    );
  }
}


