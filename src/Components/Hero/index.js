import React from 'react'
import PlayButton from './PlayButton'
import AddToPlayList from './addToPlayList'

const Hero = props => {
    return(
        <>
           <div style = {{
               height: "30rem",
               width: "auto",
               objectFit: 'contain',
               backgroundImage: `url(${props.images.snapshot})`
           }}>
                <div style = {{textAlign: 'center'}}>
                    <div style = {{
                        display: 'inline'
                    }}>
                        <PlayButton {...props}/>
                        <AddToPlayList/>
                    </div>
                    <h1>{props.title}</h1>
                </div>
           </div>
        </>
    )
}

export default Hero