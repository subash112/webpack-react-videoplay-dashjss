import React from 'react'
import { Link } from 'react-router-dom'

const MovieItem = props => {
    console.log(props)
    return(
        <div>
            <Link to = {`/movie/${props.id}`}>
                <img  src = {props.images.artwork} alt = "Movie Image" width = "170" height = '200'/>
            </Link>
        </div>
    )
}

export default MovieItem