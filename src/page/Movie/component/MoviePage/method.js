import Api from 'api'
import { YOUTUBE_EMBED_URL } from 'constant/url'

//
// samples value because back end dont have that yet 
//

const meta = {
  actors: ['Jaylord Torres', 'Jaylord Torres'],
  directors: ['Jaylord Torres'],
  genres: ['romance', 'Music'],
  studios: ['Warner Bros. Picture'],
  languages: ['English'],
  runtimes: ['xyz'],
  releaseDates: ['xyz release date'],
}

export const defaultState = {
    title: '',
    discription: '',
    trailerUrl: '',
    thumbsnail: '',
    meta: '',
    loading: false,
    error: ''
  }
 
const TestImageUrl = 'https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/other/ant_man_ver5.jpg'

//
// methods
//
export const componentDidMount =  (context) =>  async () => {
  context.setState({loading: true})
  try {
    const movieName = context.props.match.params.movieName
    const movie = await Api.getMovieByID(movieName)
    if (movie) {
      return context.setState({
        title: movie.Title || defaultState.title,
        discription: movie.discription || defaultState.discription,
        trailerUrl: movie.TrailerUrl ? (YOUTUBE_EMBED_URL + movie.TrailerUrl) : defaultState.trailerUrl,
        thumbsnail: TestImageUrl,
        meta: meta,
        loading: defaultState.loading,
        error: defaultState.error,
      })
    }
    // no record
    return context.setState({loading: defaultState.loading, error: defaultState.error})
  } catch (e) {
    context.setState({error: 'has error', loading: defaultState.loading})
  }
}