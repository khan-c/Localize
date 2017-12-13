import axios from 'axios'; 

export const getBusiness = businessId => {
  return (
    axios.get('http://localhost:8000/business', {
      params: {
        Id: businessId
      }
    })  
  ); 
};

// const defaultQuery = {
//   term: "plumbing", 
//   latitude: "37.786882",  
//   longitude: "-122.399972", 
//   category: "" 
// }; 

export const search = query => {
  return (
    axios.get('http://localhost:8000/search', {
      params: {
        term: query.term, 
        latitude: query.latitude, 
        longitude: query.longitude, 
        category: query.category
      }
    })  
  ); 
};

export const fetchAutoComplete = query => {
  console.log("fetching autocomplete"); 
  return (
    axios.get('http://localhost:8000/autocomplete', {
      params: {
        text: query.text, 
        latitude: query.latitude, 
        longitude: query.longitude, 
        category: query.category
      }
    })  
  ); 
};

