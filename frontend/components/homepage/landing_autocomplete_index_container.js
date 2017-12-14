import { connect } from 'react-redux';
import LandingAutcompleteIndex from './landing_autocomplete_index';

const mapStateToProps = state => {
  return {
    results: state.entities.autocomplete
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingAutcompleteIndex);
