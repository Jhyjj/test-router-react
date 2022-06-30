
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import React from 'react';
import Main from './components/Main';
import Product from './components/Product';
import BestProduct from './components/BestProduct';
import Review from './components/Review';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/product' element={<Product/>}></Route>
          <Route path='/bestproduct' element={<BestProduct/>}></Route>
          <Route path='/review' element={<Review/>}></Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
