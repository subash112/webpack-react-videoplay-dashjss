import React from 'react'
import { Link } from 'react-router-dom'
import pinIcon from '../../../Assets/Images/pin.png'

const AddToPlayList = props => {
    return(
        <div>
            <Link to = '/' > 
                <img src = {pinIcon} alt = "play icon" height = "150" width = "150" />
            </Link>
            <p>ADD TO WISHLIST</p>         
    </div>
    )
}

export default AddToPlayList