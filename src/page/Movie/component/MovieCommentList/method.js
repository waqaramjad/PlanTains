import Api from 'api'
import { formatDate } from 'util/date'


/**

  comment structure

  comment {
    movie_id: {
      comment_id: {
        c: for comment,
        d: for date,
        n: for full name
      }
    }
  }

**/

export const defaultState = {
    comments: [],
    loading: false,
    error: ''
  }
 
//
// methods
//

const onCommentChildAdded =  (context) =>  async (commentRef) => {
  const comment = await commentRef.val()
  comment.d = formatDate(comment.d)
  context.setState({comments: [comment, ...context.state.comments]})
}

export const componentDidMount =  (context) =>  async () => {
  context.setState({loading: true})
  try {
    const _id = context.props.movieID
    if (!_id) {
      throw new Error('error movie id')
    }

    const comments = await Api.getCommentsByMovieID(_id, onCommentChildAdded(context))
    if (comments) {
      return context.setState({
        loading: defaultState.loading,
        error: defaultState.error,
      })
    }
    // no record
    return context.setState({loading: defaultState.loading, error: defaultState.error})
  } catch (e) {
    console.log(e)
    context.setState({error: 'has error', loading: defaultState.loading})
  }
}

function toArray (obj) {
  const k = Object.keys(obj)
  return k.map((key, index) => {
    obj[key]._id = key
    return obj[key]
  })
}