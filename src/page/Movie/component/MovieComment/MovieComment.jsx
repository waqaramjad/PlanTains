import React from 'react'
import PropTypes from 'prop-types'

import { submit, inputOnChange, defaultState } from './method'

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
class MovieComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = defaultState	
    // this.componentDidMount = componentDidMount(this)
    this.submit = submit(this)
    this.onChangeFullname = inputOnChange(this, 'fullname')
    this.onChangeComment = inputOnChange(this, 'comment')

  }

  render() {
  	const { submitted, fullname, comment } = this.state

	  return (
	    <div className="card-block p-y-0" style={{padding:'20px'}}>
	      <h5 className="card-title "> Comments </h5>
			  <div className="form-group">
			    <input
				    aria-describedby="emailHelp"
				    type="text"
				    className="form-control"
				    placeholder="Full Name"
				    value={fullname}
				    onChange={this.onChangeFullname}
				    disabled={submitted}
			    />
			  </div>
	      <div className="form-group">
	        <textarea
	          className="form-control"
	          id="exampleFormControlTextarea1"
	          placeholder="Type ypur message here..."
	          rows="3"
				    value={comment}
				    onChange={this.onChangeComment}
				    disabled={submitted}
	        />
	      </div>
	      {
	      	submitted ? <button className="btn btn-warning" disabled>submitted</button>:
		      <button className="btn btn-warning" onClick={this.submit}>Submit</button>
	      }
	    </div>
	  )
  }
}

MovieComment.propTypes = {
	movieID: PropTypes.string
}

export default MovieComment


