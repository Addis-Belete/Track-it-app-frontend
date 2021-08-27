import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from '../../component/Login';
import store from '../../store/store';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('addMeasurment', () => {
  it('should render a Login page', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Login />
        </BrowserRouter>

      </Provider>,

    );
    expect(
      asFragment(
        <Provider store={store}>
          <Login />
        </Provider>,

      ),
    ).toMatchSnapshot();
  });
});
