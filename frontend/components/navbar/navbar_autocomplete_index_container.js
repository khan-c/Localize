import { connect } from 'react-redux';
import NavbarAutcompleteIndex from './navbar_autocomplete_index';
import { autocompleteFields } from '../../actions/autocomplete_fields_actions';

const mapStateToProps = state => {
  return {
    results: state.entities.autocomplete
  };
};

const mapDispatchToProps = dispatch => ({
  autocompleteFields: query => dispatch(autocompleteFields(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarAutcompleteIndex);
