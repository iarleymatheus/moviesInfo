import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';

import Home from './pages/Home/index';
import Movie from './pages/Movie/index';
import Search from './pages/Search/index';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<Movie/>}/>
    <Route path="search" element={<Search/>}/>
   </Routes>
   <App />
   </BrowserRouter> 
    
  </React.StrictMode>
)
