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
    var image = /frontend/assets/images/pin.png; 
    const position = new google.maps.LatLng(business.coordinates.latitude, business.coordinates.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id, 
      icon: image, 
      label: {text: label.toString(), color: 'white'}
    });

    marker.addListener('click', () => this.handleClick(business));
    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;