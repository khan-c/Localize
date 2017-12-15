export const RECEIVE_AUTOCOMPLETE_VALUES = 'RECEIVE_AUTOCOMPLETE_VALUES';
export const RECEIVE_NO_AUTOCOMPLETE_VALUES = 'RECEIVE_NO_AUTOCOMPLETE_VALUES';

const receiveAutocomplete = query => ({
  type: RECEIVE_AUTOCOMPLETE_VALUES,
  query
});

const receiveNoAutocompleteValues = () => ({
  type: RECEIVE_NO_AUTOCOMPLETE_VALUES
});

export const autocompleteFields = query => dispatch => (
  dispatch(receiveAutocomplete(query))
);

export const clearAutocompleteFields = () => dispatch => (
  dispatch(receiveNoAutocompleteValues())
);
