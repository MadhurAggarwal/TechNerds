import './mapstyle.css';
import { useEffect } from 'react';
// import {Helmet} from "react-helmet";

const Maps = () => {

    useEffect(()=>{
        const myDiv=document.createElement('div');

      
            var options = {
                center : {lat: 30,lng : 80} ,
                zoom : 10
            }
        const map = new google.maps.Map(myDiv,options)
        function addMarker(location){
            var img= new Image();
            img.src= './map-locator-icon-1.jpg';
            const marker = new google.maps.Marker({
            position:{ lat:31.3260, lng:75.562},
                map : map,
                icon: {img}
            })   
        }
        addMarker({ location:{lat:31.3260, lng:75.562}});
        addMarker({location:{ lat:-31.3260, lng:0.3456}});
        document.getElementById('Madhur').appendChild(myDiv);
        
    },[])

    return ( 
        <div id="Madhur">
            <h1>Google maps</h1>
        </div>
     );
}
 
export default Maps;