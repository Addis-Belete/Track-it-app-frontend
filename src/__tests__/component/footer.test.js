import React from 'react';
import { cleanup, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Footer from '../../component/footer';
import store from '../../store/store';
import '@testing-library/jest-dom';

afterEach(cleanup);
describe('addMeasurment', () => {
  it('should render a links ', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>

      </Provider>,

    );
    expect(
      asFragment(
        <Provider store={store}>
          <Footer />
        </Provider>,

      ),
    ).toMatchSnapshot();
  });
});
