import React from 'react'

const Description = props => {
    return(
            <div style = {{
                padding: '1rem',
                textAlign: "center"
            }}>
                <h2>Description</h2>
            <p style = {{
                // width : '90%'
                padding: '1rem'
            }}>
                {props.plot}
            </p>

            </div>
    )
}

export default Description