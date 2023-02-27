import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Views/Home';
import Destinations from './Views/Destinations';
import Tours from './Views/Tours';
import Galery from './Views/Galery';
import Destination from './Views/Destination';

function App() {
  return (
    <div className='content'>
    <NavBar />
    <Routes> 
      <Route path='/' element={<Home/>}/>
      <Route path='/destinations' element={<Destinations/>}/>
      <Route path='/destination/:id' element={<Destination/>}/>
      <Route path='/tours' element={<Tours/>}/>
      <Route path='/galery' element={<Galery/>}/>
      <Route path='*' element={<h1 id='not'>Not Found</h1>}/>
     </Routes>
    </div>
  );
}

export default App;
