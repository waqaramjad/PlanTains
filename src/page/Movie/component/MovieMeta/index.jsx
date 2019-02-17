import React from 'react'
import PropTypes from 'prop-types'
import Meta from './Meta'

const MovieMeta = ({ meta }) => {
	if (!meta) {
		return null
	}

	return (
		<React.Fragment>
			<div className="col p-0">
				<Meta action="Actors:" text={meta.actors} />
				<Meta action="Directors:" text={meta.directors}  />
				<Meta action="Genre:" text={meta.genres}  />
				<Meta action="Studio:" text={meta.studios}  />
			</div>
			<div className="col p-0">
				<Meta action="Language:" text={meta.languages} />
				<Meta action="Runime:" text={meta.runtimes} />
				<Meta action="Release Date:" text={meta.releaseDates} />
			</div>
		</React.Fragment>
		)
}

MovieMeta.propTypes = {
	meta: PropTypes.object.isRequired
}


export default MovieMeta