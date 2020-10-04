import React from 'react'
import ImageLoading from '../../Assets/Images/404.png'

const Images = [
    "https://dummyimage.com/600x400/000000/fff&text=Image+1",
    "https://dummyimage.com/600x400/000000/fff&text=Image+12",
    "https://dummyimage.com/600x400/000000/fff&text=Image+13",
    "https://dummyimage.com/600x400/000000/fff&text=Image+14",
    "https://dummyimage.com/600x400/000000/fff&text=Image+15",
    "https://dummyimage.com/600x400/000000/fff&text=Image+16",
    "https://dummyimage.com/600x400/000000/fff&text=Image+17",
    "https://dummyimage.com/600x400/000000/fff&text=Image+18",
    "https://dummyimage.com/600x400/000000/fff&text=Image+19",

]


const Slider = props => {
    return(
        <div className = "carousel">    
            <div className = 'arrow right float-right cursor-pointer '> </div>   
                <div style = {{
                    display: 'hidden',
                    overflow: 'auto'
                }} >

                    {Images.map((item, index) => (
                        <div key = {index} className = 'float-left m-1'>
                            <img style = {{
                                backgroundImage: `url(${ImageLoading})`,
                                width:  "170px",
                                // height: '150px',
                                objectFit: 'cover'
                            }}  src = {item} alt = "Movie Image"/>
                        </div>
                    ))}

                </div>
            <div className = 'arrow right float-left cursor-pointer '> </div>
        </div>
    )
}

export default Slider