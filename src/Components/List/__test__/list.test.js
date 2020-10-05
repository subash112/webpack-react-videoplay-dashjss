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

// it('renders correctly', () => {
//   const { getByTestId } = render(
//     <List id = 'estrenos-imprescindibles-en-taquilla' />
//   );
//   expect(getByTestId('List').toContainObject({ type: 'START' }))
// })

// it('matches snapshot', () => {
//   const tree = TestRenderer.create(
//     <Description plot='This is an description section' />
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });
