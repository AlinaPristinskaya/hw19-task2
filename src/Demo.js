
import { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

function Demo(){
    const[location, setLocation]=useState(null)

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    return !isGeolocationAvailable ? (
        'Your browser does not support Geolocation'
    ) : !isGeolocationEnabled ? (
        'Geolocation is not enabled'
    ) :  coords? console.log(11)
   : console.log(18);
}

export default Demo;