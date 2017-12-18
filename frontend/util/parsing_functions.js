export const stateToUrl = (localState) => {
  let text = localState.text ? `term=${localState.text.replace(' ', '%20')}` : '';
  let location = localState.location ? `location=${localState.location.replace(' ', '%20')}` : '';
  let searchValues = [text, location];
  searchValues = searchValues.filter(term => !!term);
  return `${searchValues.join('&')}`;
};

export const iconToUrl = (localState) => {
  let text = localState.text ? `term=${localState.text.replace(' ', '%20')}` : '';
  let location = localState.location ? `location=${localState.location.replace(' ', '%20')}` : '';
  let searchValues = [text, location];
  searchValues = searchValues.filter(term => !!term);
  return `query?${searchValues.join('&')}`;
};


export const urlToQuery = searchString => {
  let rawSearchString = searchString.slice(1);
  let key_value_pairs = rawSearchString.split("&");
  let query = {};
  key_value_pairs.forEach( kv => {
    let tempArr = kv.split("=");
    query[tempArr[0]] = tempArr[1];
  });
  return query;
};

export const locationFromPath = path => {
  return path.split('location=')[1];
};
