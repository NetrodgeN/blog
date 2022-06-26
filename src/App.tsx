import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Pages/Home/Home';
import Work from './Components/Pages/Work';
import Blog from './Components/Pages/Blog';
import NotFoundpage from './Components/Pages/NotFoundpage';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/works' element={<Work />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='*' element={<NotFoundpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
