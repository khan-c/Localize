import { connect } from 'react-redux';
import LandingSearch from './landing_search';
import { clearAutocomplete, getAutoComplete } from '../../actions/search_actions';

const mapStateToProps = state => {
  return {
    results: state.entities.autocomplete
  };
};

const mapDispatchToProps = dispatch => ({
  clearAutocomplete: () => dispatch(clearAutocomplete()),
  getAutoComplete: query => dispatch(getAutoComplete(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingSearch);
