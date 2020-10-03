import React from 'react'
import ContextSlider  from '../Context/Slider'

class Test extends React.Component{
    render(){
        return(
            <ContextSlider.Consumer>
                      { value =>
                            <p>Locale: {value.name}</p>
                        }
            </ContextSlider.Consumer>
        )
    }
}

export default class SliderTest extends React.Component{
    render(){
        return(
            <>
                <ContextSlider.Provider value = {{name: "subash"}}>
                    <Test/>
                </ContextSlider.Provider>
            </>
        )
    }
}

