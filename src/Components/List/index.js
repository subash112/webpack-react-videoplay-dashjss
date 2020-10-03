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
          <div className = 'arrow right' style = {{
                float: 'right',
                position: 'relative',
                top: 100,
                left: 0,
                cursor: 'pointer'
              }}> </div>

            <div style = {{
              overflow: 'hidden',
              width: '100%',
              height: '200px',
            }}>
              {Movie.contents.data.map(item => (
                  <React.Fragment key = {item.id}>
                            <MovieItem {...item}/>
                  </React.Fragment>
              ))}
            </div>

            <div className = 'arrow left' style = {{
                // float: 'left',
                position: 'relative',
                top: -120,
                left: 0,
                cursor: 'pointer',
              }}></div>
        </>
        }
        </>
    )   
}  

export default List