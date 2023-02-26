// import myphoto from './map-locator-icon-1.jpg';
function initMap(){
        var options = {
            center : {lat: 30,lng : 80} ,
            zoom : 10
        }
        // Map Options 

        map = new google.maps.Map(document.getElementById("map"),options)

        function addMarker(location){
            var img= new Image();
            img.src= './map-locator-icon-1.jpg';
            console.log("asfhiahfio")
            const marker = new google.maps.Marker({
                    position:{ lat:31.3260, lng:75.562},
                     map : map,
                     icon: {img}
            })
            
        }
        addMarker({ location:{lat:31.3260, lng:75.562}});
        addMarker({location:{ lat:-31.3260, lng:0.3456}});
}