import React from 'react'
import { Link } from 'react-router-dom'
import ImageLoading from '../../../Assets/Images/404.png'

const MovieItem = props => {
    return(
        <div className = 'float-left m-1'>
            <Link to = {`/movie/${props.id}`}>
                <img style = {{
                    backgroundImage: `url(${ImageLoading})`,
                    width:  "170px",
                    height: '200px',
                    objectFit: 'cover'
                }} className = "movie-banner"  src = {props.images.artwork} alt = "Movie Image"/>
            </Link>
        </div>
    )
}

export default MovieItem