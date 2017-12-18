import axios from 'axios';

export const fetchLatLng = address => {
  return (
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBbBwhK0_-FYSKssxR8L9-LfsynJezpKRg`)
  );
};



// GoogleMapsKEY = AIzaSyBbBwhK0_-FYSKssxR8L9-LfsynJezpKRg

