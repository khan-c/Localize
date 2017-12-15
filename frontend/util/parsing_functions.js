export const stringifyToUrl = (localState) => {
  let text = localState.text ? `term=${localState.text.replace(' ', '%20')}` : '';
  let location = localState.location ? `location=${localState.location.replace(' ', '%20')}` : '';
  let searchValues = [text, location];
  searchValues = searchValues.filter(term => !!term);
  return `query?${searchValues.join('&')}`;
};
