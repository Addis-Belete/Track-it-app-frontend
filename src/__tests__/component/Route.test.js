import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../../component/Route';
import store from '../../store/store';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('addMeasurment', () => {
  it('should render form to add measurment', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>

      </Provider>,

    );
    expect(
      asFragment(
        <Provider store={store}>
          <Routes />
        </Provider>,

      ),
    ).toMatchSnapshot();
  });
});
