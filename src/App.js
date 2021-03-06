import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addproduct from './Components/Addproduct';
import Search from './Components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Components/View';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Addproduct/>}/> 
        <Route path='/search' exact element ={<Search/>}/> 
        <Route path='/view' exact element ={<View/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
