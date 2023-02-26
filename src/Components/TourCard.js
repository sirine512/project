import React from 'react';

const TourCard = ({tour}) => {
  return (
    <div className='cardTour'>
      <img src={tour.image} alt={tour.name} />
    <div className='tourContent'>
      <h2>{tour.name}</h2>
      <p>{tour.description}</p>
      <button id='showBtn'>Show Plan</button>
      </div>
    </div>
  );
};

export default TourCard;
