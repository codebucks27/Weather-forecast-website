import React, { useEffect } from 'react'

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };


const UserLocation = ({changeLocation}) => {

const success =(pos) => {
  var crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  let lat = crd.latitude;
  let lon = crd.longitude;

  changeLocation({lat,lon});
}

const errors =(err) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: 'geolocation' })
        .then(function (result) {
          console.log(result)
          if (result.state === 'granted') {
            console.log(result.state)
            //If granted then you can directly call your function here
            navigator.geolocation.getCurrentPosition(success);

          } else if (result.state === 'prompt') {
            console.log(result.state)
           navigator.geolocation.getCurrentPosition(success, errors, options);

          } else if (result.state === 'denied') {
            //If denied then you have to show instructions to enable location
            alert("please enable location in the browser or add input manually!")
          }
          
        })
    } else {
      alert(
        'Geolocation api is not available in your device, you have to input manually'
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])

  return <div></div>
}

export default UserLocation
