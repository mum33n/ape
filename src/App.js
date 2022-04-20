import './App.css';
import Advert from './advert';
import Section2 from './Section2';
import Wallet from './Wallet';
import Footer from './Footer';
import Modal from './Modal';
import Success from './success';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='col-12'>
      <div className="App">
        <Routes>
          <Route path='/' element={<div><Advert/> <Footer/></div>}/>
          <Route path='/claim' element={<Section2/>}></Route>
          <Route path='/wallets' element={<Wallet/>}></Route>
          <Route path='/form' element={<Modal/>}></Route>
        </Routes>
        <Success/>
        
        
        
        
        
      </div>
      

    </div>
  );
}

export default App;
