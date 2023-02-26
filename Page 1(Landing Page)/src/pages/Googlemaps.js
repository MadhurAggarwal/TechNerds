// // import {Map, GoogleApiWrapper} from 'google-maps-react';

// // const Googlemaps = () => {
// //     return ( 
// //     <div>
// //         <h1>Loading Maps </h1>
// //     <Map>
// //         google= {this.props.google}
// //         style={{width: "100%", height: "100%"}}
// //         zoom= {10}
// //         initialCenter= {
// //             {latitude: 30.900965,
// //              longitude: 75.857277
// //             }
        
// //         }

// //     </Map>
// //     </div>
// //      );
// // }
 
// // export default Googlemaps({
// //     apiKey: "hi"
// // })(MapContainer);


// import React from "react";
// import GoogleMapReact from 'google-map-react';

// const Googlemaps = ({ text }) => <div>{text}</div>;

// export default function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 30.900965,
//       lng: 75.857277
//     },
//     zoom: 11
//   };

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyDqlH8ChmKeo2-0dS9DRHPt9YZCny5VLCo" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <Googlemaps
//           lat={59.955413}
//           lng={30.337844}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }

import { Component } from "react";
import {Map, GoogleApiWrapper} from 'google-map-react';

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
    apiKey: "AIzaSyDqlH8ChmKeo2-0dS9DRHPt9YZCny5VLCo"
})(MapContainer)