import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Progress from '../../component/Progress';
import store from '../../store/store';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('addMeasurment', () => {
  it('should render form to add measurment', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Progress />
        </BrowserRouter>

      </Provider>,

    );
    expect(
      asFragment(
        <Provider store={store}>
          <Progress />
        </Provider>,

      ),
    ).toMatchSnapshot();
  });
});
