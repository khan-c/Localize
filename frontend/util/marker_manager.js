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
      .forEach((newbusiness, idx) => this.createMarkerFrombusiness(newbusiness, idx+1, this.handleClick))

    Object.keys(this.markers)
      .filter(businessId => !businessObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]))
  }

  createMarkerFrombusiness(business, label) {
    debugger 
    var image = {url:'frontend/assets/images/map-pin.svg'}
    const position = new google.maps.LatLng(business.coordinates.latitude, business.coordinates.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id, 
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