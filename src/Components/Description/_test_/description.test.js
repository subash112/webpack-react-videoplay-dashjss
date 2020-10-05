import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Description from '../index';

afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Description />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const { getByTestId } = render(
    <Description plot='This is an description section' />
  );
  expect(getByTestId('description').textContent).toBe(
    'This is an description section'
  );
});

it('matches snapshot', () => {
  const tree = TestRenderer.create(
    <Description plot='This is an description section' />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
