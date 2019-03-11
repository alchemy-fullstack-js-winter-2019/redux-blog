import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Comments from '../../components/comments/Comments';
import { fetchComments } from '../../actions/comments';
import { getAllComments, isLoading } from '../../selectors/comments';
import preloader from '../../../assets/preloader.gif';

class AllComments extends PureComponent {
  static propTypes = {
    comments: PropTypes.array.isRequired,
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
        : <Comments {...this.props}/> }
    </>
    );
  }
}
const mapStateToProps = (state) => ({
  comments: getAllComments(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchComments());
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComments);

