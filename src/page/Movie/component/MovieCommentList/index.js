import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from './MovieCommentList'
import './style.css'

// for testing
export const MovieCommentListContainer = Container

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

const MovieCommentListRedux = connect(
  mapStateToProp,
  mapDispatchToProp
)(MovieCommentListContainer);

export default MovieCommentListRedux
