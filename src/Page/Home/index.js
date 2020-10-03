import React from 'react';
import { connect } from 'react-redux';
import List from '../../Components/List';
import MovieCategory from '../../Config/Category';
import { getList } from '../../Redux/Action/List';
import { getMovies } from '../../Redux/Action/Movies';
class Home extends React.Component {
  render() {
    return (
      <>
        {MovieCategory.map(item => (
          <div key = {item.id}>
            <List {...item} {...this.props}/>
          </div>
        ))}
        
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
    MovieList: state.List.Data
  };
};

export default connect(mapStateToProps, {
  getList,
  getMovies,
})(Home);
