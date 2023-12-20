import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Edit from './pages/Edit';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Header from './Components/Header';
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<SignIn/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home/:people/:token' element={<Home/>}></Route>
      <Route path='/edit/:people/:token/:id' element={<Edit/>}></Route>
      
     
    </Routes>
    </BrowserRouter>
  )
}

export default App