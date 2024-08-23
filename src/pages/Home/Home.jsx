import React, { useEffect } from 'react';
import { getData } from '../../services/fetch';

const Home = () => {
  useEffect(() => {
    getData('users')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return <div style={{ width: '100%' }}>Hoşgeldiniz</div>;
};

export default Home;
