import React from 'react';
import PropTypes from "prop-types";

function Hardware({ name, picture, rating }) {
  return (
    <div>
      <h2>This is {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const hardwareList = [
  {
    id: 1,
    name: 'CPU',
    image: 'https://cdn.pixabay.com/photo/2020/03/20/22/29/amd-4952189_960_720.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Graphic card',
    image: 'https://cdn.pixabay.com/photo/2020/06/06/01/21/nvidia-5264921_960_720.jpg',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Motherboard',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/54/cpu-4393375_960_720.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Memory',
    image: 'https://cdn.pixabay.com/photo/2019/08/08/16/56/ram-4393381_960_720.jpg',
    rating: 4.9
  },
  {
    id: 5,
    name: 'Cooler',
    image: 'https://cdn.pixabay.com/photo/2021/01/23/18/41/computer-5943333_960_720.jpg',
    rating: 4.6
  }
];

function App() {
  return (
    <div>
      {hardwareList.map(pc => (
        <Hardware key={pc.name} name={pc.name} picture={pc.image} rating={pc.rating} />
      ))}
    </div>
  );
}

Hardware.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

export default App;