import React, { useEffect, useState } from 'react'
import instance from '../../Utils/axiosConfig'
import MovieItem from './MovieItem'

const List  = props => {
    const [Movie, setMovie] = useState()

    useEffect( () => {
        instance
        .get(`v3/lists/${props.id}`)
        .then((response) => {
          if(response.status === 200){
            setMovie(response.data.data) 
          }
        })
    }, [])

    return (
        <> 
        {Movie !== undefined  && 
        <>
          <h2>{Movie.name}</h2>
          <div className = 'arrow right float-right cursor-pointer '> </div>
            <div className = 'list'>
              {Movie.contents.data.map(item => (
                  <React.Fragment key = {item.id}>
                            <MovieItem {...item}/>
                  </React.Fragment>
              ))}
            </div>
            <div className = 'arrow left float-left cursor-pointer arrow-position'></div>
        </>
        }
        </>
    )   
}  

export default List