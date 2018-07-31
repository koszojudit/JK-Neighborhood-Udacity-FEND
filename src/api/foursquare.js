import { CLIENT_ID, CLIENT_SECRET, VERSION } from '../data/api-keys';

// Sending request to Foursquare to get location rating

export const getFsVenue = (location) => {

  const fsURL = 'https://api.foursquare.com/v2/venues/';
  const title = location.title;
  const ll = `${location.position.lat},${location.position.lng}`;
  const auth = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;

  const fsSearchURL = `${fsURL}search?query=${title}&ll=${ll}&${auth}&limit=1`;

  return fetch(fsSearchURL)
  .then(response => {
    if (!response.ok) {
      throw response
    } else  return response.json()
  })
  .then(data => {
    const venueId = data.response.venues[0].id;
    const fsVenueURL = `${fsURL}${venueId}?${auth}`;

    return fetch(fsVenueURL);
  })
  .then(response => {
    if (!response.ok) {
      throw response
    } else  return response.json()
  })
  .then(data => {
    const fsRating = data.response.venue.rating;
    const fsPhotoUrl = data.response.venue.bestPhoto.prefix + 'height100' + data.response.venue.bestPhoto.suffix;

    return {fsRating, fsPhotoUrl};
  })
  .catch(e => {
    console.log("Error fetching data from Foursquare!")
  });
}
