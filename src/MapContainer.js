import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  constructor({passProp}){
    super()
    this.state = 
    {
    data: passProp,
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker

    }
  }
  // state = {
  //   data: {},
  //   showingInfoWindow: false,  //Hides or the shows the infoWindow
  //   activeMarker: {},          //Shows the active marker upon click
  //   selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  // };
  
  componentDidMount() {
    this.setState({data: this.props})
  }
  
  componentWillReceiveProps({passProp}) {
    this.setState({...this.state.data.passProp, passProp})
  }

  render() {
    const dt = this.state.data.passProp;
    if(!isEmpty(dt)){
      console.log(dt);
      return(this.renderMap())
    }
    else{
      return (
        <span>Loading map...</span>
      )
    }
  }

  renderMap() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
        lat: this.state.data.passProp.latitude,
        lng: this.state.data.passProp.longitude
        }}>
          <Marker
          onClick={this.onMarkerClick}
          name={this.state.data.markerName}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
        </Map>
    );
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBG2qxgYYO6oJFWDoPPThz4CJk0UJ5xY9k'
})(MapContainer);

// Speed up calls to hasOwnProperty
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}