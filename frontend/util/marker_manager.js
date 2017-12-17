// From businessBnb class exercise 
class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(businesses){
    const businessObj = {};
    debugger 
    businesses.forEach(business => businessObj[business.id] = business);

    businesses
      .filter(business => !this.markers[business.id])
      .forEach(newbusiness => this.createMarkerFrombusiness(newbusiness, this.handleClick))

    Object.keys(this.markers)
      .filter(businessId => !businessObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]))
  }

  createMarkerFrombusiness(business) {
    debugger 
    const position = new google.maps.LatLng(business.coordinates.latitude, business.coordinates.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id
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