import React from 'react'
import { Link } from 'react-router-dom'
import playIcon from '../../../Assets/Images/play_icon.png'

const PlayButton = props => {
    return(
        <div>
            <Link to = {`/stream/movie/${props.id}`}> 
                <img src = {playIcon} alt = "play icon" height = "150" width = "150" />
            </Link>
            <p>Trailer</p>         
        </div>
    )
}

export default PlayButton