import React from 'react';
// import Footer from './Component/Footer';
// import Header from './Component/Header';

export default class ListLayout extends React.Component {
  render() {
    return (
      <>
        {/* <Header /> */}
        {this.props.children}
        {/* <Footer /> */}
      </>
    );
  }
}
