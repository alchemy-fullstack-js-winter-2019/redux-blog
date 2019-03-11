import React from 'react';
import PropTypes from 'prop-types';

function CreateList(Component, contents, className) {
  const contentsList = contents.map(content => 
    <li key={content.id}>
      <Component {...content} />
    </li>
  );

  return (
    <ul className={className}>
      {contentsList}
    </ul>
  );
}

CreateList.propTypes = {
  contents: PropTypes.array.isRequired
};

export default CreateList;
