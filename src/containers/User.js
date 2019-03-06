import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { getUser } from '../selectors/users/users';
import { fetchUser } from '../action/users';
import { withRouter } from 'react-router-dom';

class User extends PureComponent {
  static propTypes = {
    user: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    })
  };

  componentDidMount() {
    console.log('Match', this.props.match.params.id);
    this.props.fetch(this.props.match.params.id);
  }

  render() {
    return (
      <>
      <UserDetail user={this.props.user}/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  fetch() {
    console.log('PROPS', props);
    dispatch(fetchUser(props.match.params.id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(User));
