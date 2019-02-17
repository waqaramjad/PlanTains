import Api from 'api'
// import { YOUTUBE_EMBED_URL } from 'constant/url'

export const defaultState = {
    fullname: '',
    comment: '',
    submitted: false,   // limit submission
    loading: false,
    error: ''
  }
 
//
// methods
//
export const submit =  (context) =>  async () => {
  const { fullname, comment, submitted } = context.state
  const _id = context.props.movieID

  try {
    if (!_id) {
      throw new Error('error movie id')
    }
    if (submitted) {
      throw new Error('already submitted')
    }

    const comments = await Api.postComment(_id, comment, fullname)
    if (comments) {
      return context.setState({
        fullname: defaultState.fullname,
        comment: defaultState.comment,
        loading: defaultState.loading,
        submitted: true,
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

export const inputOnChange = (context, key) => (e) => {
    console.log(e.target.value)
  context.setState({[key]: e.target.value})
}

function toArray (obj) {
  const k = Object.keys(obj)
  return k.map((key, index) => {
    obj[key]._id = key
    return obj[key]
  })
}