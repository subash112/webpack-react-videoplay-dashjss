import React, { useEffect, useState } from 'react'
import instance from '../../Utils/axiosConfig'
import MovieItem from './MovieItem'

const List  = props => {
    const [Movie, setMovie] = useState()
    const [SliderData, setSliderData] = useState([])
    const [HighRange, setHighRange] = useState(0)
    const [LowRange, setLowRange] = useState(0)
    const [MovieUnits, setMovieUnits] = useState((window.innerWidth  >= 480 && window.innerWidth < 767) ? 2 : (window.innerWidth  >= 767 && window.innerWidth < 1200) ? 4 : 7  )
    
    useEffect( () => {
        instance
        .get(`v3/lists/${props.id}`)
        .then((response) => {
          if(response.status === 200){
            setMovie(response.data.data)
            PrepareData(response.data.data)
          }
        })
    }, [])

    const PrepareData = (movie, lowRange, highRange) => {
      var LowRanges, HighRanges;
      if(lowRange === undefined && highRange === undefined){
        LowRanges = 0
        HighRanges = movie.contents.data.length > MovieUnits ? MovieUnits : movie.contents.data.length 
      }else{
        LowRanges = lowRange,
        HighRanges = highRange
      }
      setHighRange(HighRanges)
      setLowRange(LowRanges)

      var data   = []
      for(let i = LowRanges ; i >= LowRanges && i < HighRanges ; i++ ){
          data.push(movie.contents.data[i])
      }
      setSliderData(data)
      console.log(data)
    }

    return (
        <> 
        {Movie !== undefined  && 
        <>
          <h2>{Movie.name}</h2>
          {HighRange !== Movie.contents.data.length &&
          <div className = 'arrow right float-right cursor-pointer' onClick = {() => {
            let highRange = HighRange + MovieUnits >  Movie.contents.data.length ? Movie.contents.data.length : HighRange + MovieUnits
            let lowRange = HighRange
            PrepareData(Movie, lowRange , highRange )

          }}> </div> }

            <div className = 'list'>
              {SliderData.map(item => (
                  <React.Fragment key = {item.id}>
                            <MovieItem {...item}/>
                  </React.Fragment>
              ))}
            </div>
            {LowRange !== 0 &&
            <div className = 'arrow left float-left cursor-pointer arrow-position' 
              onClick  = {() => {
                let highRange = LowRange
                let  lowRange = LowRange - MovieUnits > 0 ? LowRange - MovieUnits :  0

                PrepareData(Movie, lowRange , highRange )
              }}
            ></div> }
        </>
        }
        </>
    )   
}  

export default List