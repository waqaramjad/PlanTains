import firebase from 'firebase'

//
// movies api
//

export function getMovieByID(_id) {
  return firebase.database().ref('Movies/' + _id).once('value')
  .then(data => data.val())
}

export function getCommentsByMovieID(_id, cb) {
	const commentRef = firebase.database().ref('comment/' + _id)

	if (typeof cb === 'function') {
	  // bind changes for live updating
	  commentRef.on('child_added', cb)
	}

  return commentRef.once('value').then(data => data.val())
}

export function postComment (_id, c, n) {
	console.log(_id, c, n)
	const commentRef = firebase.database().ref('comment/' + _id)
  const d = (new Date()).getTime()

  return commentRef.push({c, n, d})
}
