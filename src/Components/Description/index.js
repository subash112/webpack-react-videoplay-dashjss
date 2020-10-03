import React from 'react'

const Description = props => {
    return(
            <div>
                <ul>
                        <li>
                            <span>
                                <p>15</p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <p>{props.duration} Minutes</p>
                            </span>
                        </li>
                        <li>
                            <span>
                                <p>{props.year}</p>
                            </span>
                        </li>
                </ul>
            <p>
                {props.plot}
            </p>

            </div>
    )
}

export default Description