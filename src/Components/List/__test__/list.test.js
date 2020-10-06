import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import List from '../index';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<List />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const { getByTestId } = render(
    <List id = 'estrenos-imprescindibles-en-taquilla' />
  );
})

it('matches snapshot', () => {
  const tree = TestRenderer.create(
    <List id = 'estrenos-imprescindibles-en-taquilla' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
