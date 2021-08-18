import axios from 'axios';

describe('api data', () => {
  it('Tests if recipes  data recived', async () => {
    const data = await axios.get('https://intense-spire-98414.herokuapp.com/measurments/1/results').then((res) => res);
    expect(data).toBeInstanceOf(Object);
  });
});
