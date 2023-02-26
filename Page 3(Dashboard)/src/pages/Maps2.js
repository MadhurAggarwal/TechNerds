import useScript from './useScript.js';

const Maps = props => {
    useScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBAkvdCRFybM34fchdCeGU11KfD-YHoD_c&callback=initMap');
    return ( 
        <div>
            <h1>Google maps</h1>
        </div>
     );
}
 
export default Maps;
