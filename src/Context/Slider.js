import React from 'react'

const ContextSlider = React.createContext([]);

class SliderComponent extends React.Component{
    render() {
        const { children } = this.props;
        return (
          <ContextSlider.Provider>
            {children}
          </ContextSlider.Provider>
        );
      }

}

export { SliderComponent, ContextSlider };
