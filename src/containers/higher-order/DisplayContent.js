import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const withDisplayContent = ({ contents, fetches, Component }) => {
  class DisplayContent extends PureComponent {
    static propTypes = {
      custProps: PropTypes.object.isRequired,
      fetch: PropTypes.func.isRequired
    }
  
    componentDidMount() {
      this.props.fetch();
    }
  
    render() {
      const { custProps } = this.props;
      return (
        <Component {...custProps} />
      );
    }
  }
  
  const mapStateToProps = state => {
    const custProps = {};
    contents.every(content => custProps[content.name] = content.getContent(state));

    return { custProps };
  };

  const mapDispatchToProps = dispatch => ({
    fetch() {
      fetches.map(fetch => dispatch(fetch()));
    }
  });

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(DisplayContent);
};
