import React from 'react'
import LeftImage from '../../Assets/Images/left.png'
import RightImage from '../../Assets/Images/right.png'


const Slider = props => {
    return(
        <div className = "carousel">
            <div className = "left-icon">
                <img  src = {LeftImage} alt = "left-icon" />   
            </div>
                {/* <List/> */}
            <div className = "right-icon">
                <img  src = {RightImage} alt = "right-icon" /> 
            </div>
        </div>
    )
}

export default Slider