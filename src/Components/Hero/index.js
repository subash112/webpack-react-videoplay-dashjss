import React from 'react'
import PlayButton from './PlayButton'

const Hero = props => {
    return(
        <>
           <div style = {{
               backgroundSize: 'contain',
               backgroundSize: `${window.innerWidth}px ${window.innerHeight}px`,
               backgroundRepeat: 'no-repeat',
               backgroundImage: `url(${props.images.snapshot})`,
               opacity: 0.6
           }}>
                <div style = {{textAlign: 'center'}}>
                    <div style = {{
                        display: 'inline-block',
                        padding: '7rem'
                    }}>
                        <PlayButton {...props}/>
                        <p>Trailer</p> 
                    </div>
                    <h1 style = {{padding: '4rem'}}>{props.title}</h1>
                </div>
            </div>
        </>
    )
}

export default Hero