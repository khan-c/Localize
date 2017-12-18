import React from 'react'; 
import MarkerManager from '../../util/marker_manager'; 

class Map extends React.Component {
  componentWillReceiveProps(newProps){
    const mapOptions = {
      center: {
        lat: 37.773972,
        lng: -122.431291
      }, // San Francisco coords
      zoom: 13,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      }
    };

    if (this.props.region){
      mapOptions.center["lat"] = this.props.region.center.latitude; 
      mapOptions.center["lng"] = this.props.region.center.longitude; 
    }

    const map = this.refs.map; 
    this.map = new google.maps.Map(map, mapOptions);    
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (newProps.businesses) {
      this.MarkerManager.updateMarkers(newProps.businesses);
    }
  }

  handleMarkerClick(business) {
    this.props.history.push(`businesses/${business.id}`);
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
