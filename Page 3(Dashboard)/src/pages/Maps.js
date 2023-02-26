import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component{
    render(){
        return (
            <Map>
                google = {this.props.google}
                style = {{width: "100%", height: "100%"}}
                zoom = {10}
                initialCenter = {
                    {lat: 30.900965,
                    lng: 75.857277}
                }
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBAkvdCRFybM34fchdCeGU11KfD-YHoD_c"
})(MapContainer)
