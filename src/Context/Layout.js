import React from 'react';
import DescriptionLayout from '../Layout/DescriptionLayout';
import ListLayout from '../Layout/ListLayout';
import PlayerLayout from '../Layout/PlayerLayout';

const ContextLayout = React.createContext();

const Layouts = {
  Player: PlayerLayout,
  List: ListLayout,
  Description: DescriptionLayout,
};

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ContextLayout.Provider
        value={{
          ListLayout: Layouts['List'],
          PlayerLayout: Layouts['Player'],
          DescriptionLayout: Layouts['Description'],
        }}
      >
        {children}
      </ContextLayout.Provider>
    );
  }
}

export { Layout, ContextLayout };
