import React from 'react'; 
import MarkerManager from '../../util/marker_manager'; 

class Map extends React.Component {
  componentDidMount() {
   
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431291
      }, // San Francisco coords
      zoom: 14
    };
    debugger 
    if (this.props.region){
      mapOptions.center["lat"] = this.props.region.center.latitude; 
      mapOptions.center["lng"] = this.props.region.center.longitude; 
    }

  debugger 
    const map = this.refs.map; 
    //creates new map 
    var gmap = new google.maps.Map(map, mapOptions);    
    let infoWindow = new google.maps.InfoWindow;
    gmap["markers"] = []; 
    if (this.props.businesses) {
      this.props.businesses.forEach( (business,idx) => {
        debugger 
        var latLng = new google.maps.LatLng(business.coordinates.latitude, business.coordinates.longitude);
        var marker = new google.maps.Marker({
          position: latLng,
          map: gmap
        });
      gmap["markers"].push(marker);   
      }); 
    }
    // this.MarkerManager = new MarkerManager(this.gmap, this.handleMarkerClick.bind(this));
    // this.MarkerManager.updateMarkers(this.props.businesses);k
    
    // componentWillReceiveProps(){
      
    // }

    // var latLng = new google.maps.LatLng("37.803970", "-122.413146");
    // var marker = new google.maps.Marker({
    //   position: latLng,
    //   map: gmap
    // });
    
    // var latLng2 = new google.maps.LatLng("37.788693", "-122.417545");
    // var marker2 = new google.maps.Marker({
    //   position: latLng2,
    //   map: gmap
    // });

    // gmap["markers"] = [marker, marker2]; s
    // Try HTML5 geolocation.
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     var pos = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };
    //     console.log(pos); 
    //     infoWindow.setPosition(pos);
    //     infoWindow.setContent('Location found.');
    //     infoWindow.open(map);
    //     map.setCenter(pos);
    //   }, function() {
    //     handleLocationError(true, infoWindow, map.getCenter());
    //   });
    // } else {
    //   // Browser doesn't support Geolocation
    //   handleLocationError(false, infoWindow, map.getCenter());
    // }
  

    // function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    //   infoWindow.setPosition(pos);
    //   infoWindow.setContent(browserHasGeolocation ?
    //                         'Error: The Geolocation service failed.' :
    //                         'Error: Your browser doesn\'t support geolocation.');
    //   infoWindow.open(map);
    // }
  }

  componentWillReceiveProps(newProps){
    
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431291
      }, // San Francisco coords
      zoom: 14
    };

    if (this.props.region){
      mapOptions.center["lat"] = this.props.region.center.latitude; 
      mapOptions.center["lng"] = this.props.region.center.longitude; 
    }

    const map = this.refs.map; 
    //creates new map 
    var gmap = new google.maps.Map(map, mapOptions); 
    debugger 
    gmap["markers"] = []; 
    
    if (newProps.businesses) {
      newProps.businesses.forEach( (business,idx) => {
        debugger 
        var latLng = new google.maps.LatLng(business.coordinates.latitude, business.coordinates.longitude);
        var marker = new google.maps.Marker({
          position: latLng,
          map: gmap
        });
      gmap["markers"].push(marker);   
      }); 
    }
  }

  render() {
    debugger 
    return (
      <div className="map" ref="map">
        Map

      </div>
    ); 
  }
}

export default Map; 