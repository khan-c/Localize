import React from 'react'; 


class Map extends React.Component {
  componentDidMount() {
   
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431291
      }, // San Francisco coords
      zoom: 13
    };

    const map = this.refs.map; 
    //creates new map 
    let gmap = new google.maps.Map(map, mapOptions);    
    let infoWindow = new google.maps.InfoWindow;
    
    var latLng = new google.maps.LatLng("37.803970", "-122.413146");
    var marker = new google.maps.Marker({
      position: latLng,
      map: gmap
    });
    
    var latLng2 = new google.maps.LatLng("37.788693", "-122.417545");
    var marker2 = new google.maps.Marker({
      position: latLng2,
      map: gmap
    });

    gmap["markers"] = [marker, marker2]; 
    debugger 
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos); 
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  

    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
                            'Error: The Geolocation service failed.' :
                            'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
    }
    
  }


  render() {
    return (
      <div className="map" ref="map">
        Map

      </div>
    ); 
  }
}

export default Map; 