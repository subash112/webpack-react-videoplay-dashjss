import React from 'react'
import PlayButton from './PlayButton'
import AddToPlayList from './addToPlayList'

const Hero = props => {
    return(
        <>
           <div style = {{
               height: "30rem",
               width: "auto",
               backgroundImage: `url(${props.images.snapshot})`
           }}>
            <PlayButton {...props}/>
            <AddToPlayList/>
            <h1>{props.title}</h1>
           </div>
        </>
    )
}

export default Hero