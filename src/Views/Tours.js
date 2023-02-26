import { useSelector } from 'react-redux';
import TourCard from '../Components/TourCard';

const Tours = () => {
  const tours = useSelector(store=>store.tours);
  return (
    <>
    <div className='tourHeader'>

    </div>
    <div className='tourCards'>
      {tours.map((tour,i) =>
        (<TourCard key={i} tour={tour} />)
        )}
    </div></>
  );
};

export default Tours;
