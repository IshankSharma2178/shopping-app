import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Cart from './pages/Cart';
import Home from './pages/Home';

function App() {


  return (
    <div  className='app' >


    
      <div >
        <Navbar></Navbar>
      </div>

      <div>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </div>
    
    </div>
  );
}

export default App;
