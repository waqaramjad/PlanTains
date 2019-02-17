import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from './MovieComment'

// for testing
export const MovieContainer = Container

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

const MovieContainerRedux = connect(
  mapStateToProp,
  mapDispatchToProp
)(MovieContainer);

export default MovieContainerRedux
