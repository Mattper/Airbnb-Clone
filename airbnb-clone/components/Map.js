//mapbox://styles/mattper/cl3pg0xk1003g14moi7sxnjkt
import { useState } from 'react';
import ReactMapGL,{Marker, Popup} from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';
import "mapbox-gl/dist/mapbox-gl.css";

function Map({searchResults}) {

const [selectedLocation, setSelectedLocation]= useState({});
console.log(selectedLocation)

//transform props into latitude and longtitude
const coordinates=searchResults.map((result)=>({
    longitude: result.long,
    latitude: result.lat-.15,
}));

const center= getCenter(coordinates);

const [viewport, setViewport] =useState({
    width:"100%",
    height:"100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom:11,
});

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/mattper/cl3pg0xk1003g14moi7sxnjkt/draft'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}
        onMove={evt =>setViewport(evt.viewport)}
    >
        {searchResults.map((result) =>(
            <div key={result.long}>
                <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}        
                >
                    <p 
                    onClick={()=>setSelectedLocation(result)}
                    className='cursor-pointer text-2xl animate-bounce'>🏴</p>
                </Marker>

                {/*Popup*/}
                {selectedLocation.long === result.long?(
                    <Popup
                        onClose={()=> setSelectedLocation({})}
                        closeOnClick={true}
                        longitude={result.long}
                        latitude={result.lat}
                    >
                        {result.title}
                    </Popup>
                ):(
                    false
                )}

            </div>
        ))}

    </ReactMapGL>
  ); 
  
}

export default Map;