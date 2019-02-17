import React from 'react'
import PropTypes from 'prop-types'

import AddtoWatchlist from '../AddtoWatchlist'
import MovieComment from '../MovieComment'
import MovieCommentList from '../MovieCommentList'
import PictureHolder from '../PictureHolder'
import MovieMeta from '../MovieMeta'
import MovieThumbPreview from '../MovieThumbPreview'
import NetworkGroup from 'components/NetworkGroup'
import Rating from 'components/Rating'

import { defaultState, componentDidMount } from './method'

class MoviePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState
    this.componentDidMount = componentDidMount(this)
  }

  render() {
    const { loading, error,  title, discription, trailerUrl, thumbsnail, meta, movieID } = this.state
    if (loading) {
      return <div>loading...</div>
    }
    return (
      <div className="container-fluid movie-container">
        <div className="row">
          <PictureHolder rate={5} imageUrl={thumbsnail}/>
          <div className="col-8 p=0 movie-detail-c">
            <div className="row">
              <div className="col-9 p=0">
                <div className="row">
                  <h1>{title}</h1>
                </div>
                <div className="row">
                  <AddtoWatchlist />
                </div>
              </div>
              <div className="col-3 p=0">
                <Rating rate={118} />
              </div>
            </div>
            <br />
            <div className="row">
            <p>{discription}</p>
            </div>
            <div className="row">
            <MovieMeta meta={meta} />   
            </div>
            <br />
            <div className="row"> 
              <div className="col-6 p-0">
                <MovieThumbPreview src={trailerUrl} />
              </div>
              <div className="col-5 p-0">
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        {
          !!(movieID) ?
        <div className="row">
              <div className="col p-0">
            <MovieCommentList movieID={movieID} />
              </div>
              <div className="col p-0">
            <MovieComment movieID={movieID} />
              </div>
        </div> : null
        }

      </div>
    );
  }
}

MoviePage.propTypes = {
}


export default MoviePage