import React from 'react'

const Description = props => {
    return(
            <div className = "text-align-center p-1">
                <h2>Description</h2>
            <p className = 'p-1'>
                {props.plot}
            </p>
            </div>
    )
}

export default Description