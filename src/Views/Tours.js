import { useState } from 'react';
import { useSelector } from 'react-redux';
import TourCard from '../Components/TourCard';

const Tours = () => {
  const tours = useSelector(store=>store.tours);
  const [text, setText]=useState("");
  return (
    <>
    <div className='tourHeader'>
      <form id='search' >
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Search..."   />
      </form>
    </div>
    <div className='tourCards'>
      {tours.filter((tour)=> tour.name.toUpperCase().includes(text.toUpperCase()) ).map((tour,i) =>
        (<TourCard key={i} tour={tour} />)
        )}
    </div></>
  );
};

export default Tours;
