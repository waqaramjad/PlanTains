import firebase from 'firebase'

export function getMovieByID(_id) {
  return firebase.database().ref('Movies/' + _id).once('value')
  .then(data => data.val())
}