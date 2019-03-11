import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllUsers, isLoading } from '../../selectors/user';
import Users from '../../components/user/Users';
import { fetchUsers } from '../../actions/users';
import preloader from '../../../assets/preloader.gif';

class AllUsers extends PureComponent {
  static propTypes = {
    users: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  };

  componentDidMount() { 
    this.props.fetch();
  }

  render() {
    return (
      < >
        { this.props.loading ? 
          <h1 style={{ fontStyle: 'italic', color: 'red' }}>
          Loading...
            <br/>
            <img src={preloader}/>
          </h1> 
          : <Users {...this.props}/>}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  users: getAllUsers(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchUsers());
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllUsers);
