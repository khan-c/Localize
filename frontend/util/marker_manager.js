// From businessBnb class exercise 
class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(businesses, markers){
    const businessObj = {};
    if (markers){
      this.markers = markers; 
    }
    
    businesses.forEach(business => businessObj[business.id] = business);

    Object.keys(this.markers)
      .filter(businessId => !businessObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]));

    businesses
      .filter(business => !this.markers[business.id])
      .forEach((newbusiness, idx) => this.createMarkerFrombusiness(newbusiness, idx+1, this.handleClick)); 
  }

  createMarkerFrombusiness(business, label) {
    var icon1 = {
      url: 'https://s3-us-west-1.amazonaws.com/app-localize/pin.png',
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(23, 30)
    }; 
    var icon2 = {
      url: 'https://s3-us-west-1.amazonaws.com/app-localize/pin-location-purple.png',
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0),
      scaledSize: new google.maps.Size(23, 30)
    }; 

    const position = new google.maps.LatLng(business.coordinates.latitude, business.coordinates.longitude);
    const marker = new google.maps.Marker({
      position,
      id: business.id, 
      map: this.map,
      businessId: business.id, 
      icon: icon1, 
      label: {text: label.toString(), color: 'white'}
    });

    marker.addListener('click', () => this.handleClick(business));
    this.markers[marker.businessId] = marker;

    google.maps.event.addListener(marker, 'mouseover', function() {
      marker.setIcon(icon2);
    });
    google.maps.event.addListener(marker, 'mouseout', function() {
      marker.setIcon(icon1);
    });
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;