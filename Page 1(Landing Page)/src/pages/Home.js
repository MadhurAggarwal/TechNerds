import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home() {
    const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyDqlH8ChmKeo2-0dS9DRHPt9YZCny5VLCo" })
    if(!isLoaded) return <div>Loading...</div>
    return <Map />;
}

function Map(){
    return (<GoogleMap 
        zoom={10} 
        center={{lat: 44, lng: -80}} 
        style = {{width: "100%", height: "100%"}}>
        </GoogleMap>
    );
}