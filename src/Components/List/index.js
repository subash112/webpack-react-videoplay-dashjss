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
            {Movie.contents.data.map(item => (
                <React.Fragment key = {item.id}>
                      <MovieItem {...item}/>
                </React.Fragment>
            ))}
        </>
        }
        </>
    )   
}  

export default List