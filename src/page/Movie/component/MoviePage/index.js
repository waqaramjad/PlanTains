import { connect } from 'react-redux'
import Page from './MoviePage'
import './style.css'

// for testing
export const MoviePage = Page

// redux state props
const mapStateToProp = (state) => {
  return {
  }
}

// redux action props
const mapDispatchToProp = (dispatch) => {
  return {
  }
}

const MoviePageRedux = connect(
  mapStateToProp,
  mapDispatchToProp
)(MoviePage);

export default MoviePageRedux