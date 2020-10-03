import { connect } from 'react-redux'
import React from 'react'
import Hero from '../../Components/Hero'
import {getMovies} from '../../Redux/Action/Movies'

class MovieDescriptions extends React.Component {
    componentDidMount(){
        this.props.getMovies(this.props.match.params.id)
    }

    render(){
        console.log(this.props.MovieDetails)
        return(
            <>
            {this.props.MovieDetails !==　null && 
                <Hero {...this.props.MovieDetails}/> }
            </>
        )
    }
}

const MapStateToProps = state => {
    return {
        MovieDetails: state.Movie.Details
    }
}

export default connect(MapStateToProps, {
    getMovies
}) (MovieDescriptions)