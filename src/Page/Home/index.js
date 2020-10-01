import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import List from '../../Components/List';
import { getList } from '../../Redux/Action/List';
import { getMovies } from '../../Redux/Action/Movies';
class Home extends React.Component {
  componentDidMount() {
    this.props.getList();
    this.props.getMovies();
  }

  render() {
    return (
      <>
        <p>Hello Home</p>
        <p>
          <NavLink to='/player'> Player</NavLink>
        </p>
        <List/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, {
  getList,
  getMovies,
})(Home);
