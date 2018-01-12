import React from 'react';
import MarkerManager from '../../util/marker_manager';
import LoadingIcon from './loading_icon';

class Map extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      center: {
        latitude: 0, 
        longitude: 0 
      }, 
      markers: {}
    }; 
  }

  componentWillReceiveProps(newProps){

    if (newProps.region.center.latitude && (newProps.region.center.latitude != this.state.center.latitude)) {
      this.state.center.latitude = newProps.region.center.latitude; 
      this.state.center.longitude = newProps.region.center.longitude; 

      const mapOptions = {
        center: {
          lat: newProps.region.center.latitude,
          lng: newProps.region.center.longitude 
        }, 
        zoom: 13,
        zoomControlOptions: {
          position: google.maps.ControlPosition.TOP_LEFT
        }
      };
      const map = this.refs.map;
      this.map = new google.maps.Map(map, mapOptions);
    }
    
    if (newProps.businesses != this.props.businesses) {
      this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
      if (newProps.businesses) {
        this.MarkerManager.updateMarkers(newProps.businesses, this.state.markers);
        this.state.markers = this.MarkerManager.markers; 
      }
    }
  }
  
  //Finds y value of given object
  findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
  }

  handleMarkerClick(business) {
    // this is to remove the map-hover effect from the previously chosen element 
    let elementToRemove = document.getElementsByClassName("map-hover"); 
    //removes it if it exists (we only want one)
    if (elementToRemove.length > 0 ){
      elementToRemove[0].classList.remove("map-hover"); 
    }
    let businessElement = document.getElementById(business.id); 
    businessElement.className += " map-hover"; 
    businessElement.setAttribute("scroll-behavior", "smooth"); 
    businessElement.scrollIntoView({block: 'center',  behavior: 'smooth'});
  }

  render() {
    return (
      <div className="map" ref="map">
      </div>
    );
  }
}

export default Map;
