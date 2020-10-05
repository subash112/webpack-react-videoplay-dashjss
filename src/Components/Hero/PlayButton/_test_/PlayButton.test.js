import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import PlayButton from '../index';
import { BrowserRouter } from 'react-router-dom';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <BrowserRouter>
      <PlayButton />
    </BrowserRouter>, 
  div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
    const {getByTestId} = render(
        <BrowserRouter>
          <PlayButton id = "Movie-to-test"/>
        </BrowserRouter>
      )
    expect(getByTestId("PlayButton").getAttribute("href")).toBe(
        "/stream/movie/Movie-to-test")

})

it('matches snapshot', () => {
    const tree = TestRenderer.create(
    <BrowserRouter>
        <PlayButton id = "Movie-to-test"/>
    </BrowserRouter>).toJSON();
    expect(tree).toMatchSnapshot();
})
