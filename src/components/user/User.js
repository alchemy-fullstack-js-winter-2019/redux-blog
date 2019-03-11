import React from 'react';
import PropTypes from 'prop-types';
const User = ({ user }) => {  
  return (
    <>
    <li>
      {user.name}
    </li>
    </>
  );
};

User.propTypes =  {
  user: PropTypes.object.isRequired
};
export default User;  
