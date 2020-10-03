import React from 'react'
import { Link } from 'react-router-dom'
import playIcon from '../../../Assets/Images/play_icon.png'

const PlayButton = props => {
    return(
        <>
        <div style = {{
            padding: '2rem',
            backgroundColor: 'grey',
            borderRadius: '10rem',
            height: 100,
            width: 100
            
        }}>
            <Link to = {`/stream/movie/${props.id}`}> 
                <img src = {playIcon} alt = "play icon" height = "100" width = "100" />
            </Link>    
        </div>
        </>    
    )
}

export default PlayButton