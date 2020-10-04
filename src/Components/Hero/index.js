import React from 'react'
import PlayButton from './PlayButton'

const Hero = props => {
    return(
        <>
           <div style = {{
               backgroundSize: 'cover',
            //    backgroundSize: `${window.innerWidth}px ${window.innerHeight}px`,
               backgroundImage: `url(${props.images.snapshot})`,
               opacity: 0.6
           }}>
                <div className = 'text-align-center'>
                    <div className = 'p-7 display-inline-block'>
                        <PlayButton {...props}/>
                        <p>Trailer</p> 
                    </div>
                    <h1 className = 'p-4'>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default Hero