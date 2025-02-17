import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Paragraph from './components/Paragraph';
import List from './components/List';
import Boton from './components/Boton'
import Add from './components/Add';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Button } from '@mui/material';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { useNavigate } from 'react-router-dom';
import CredentialSignInPage from './components/Login';

const pages = ["Inventario", "AgregarProducto"];

function App() {
  const [items, setItems] = useState([
    {id: 1, name: "item1", price: 1},
    {id: 2, name: "item2", price: 2},
    {id: 3, name: "item3", price: 3},
  ])
  let [count, setCount] = useState(0);
  const sum = () => {
    setCount(count +1)
  }
  const resta = () => {
    setCount(count-1)
  }
  const add = (item) => {
    item.id = items.length +1;
    items.push(item);
    console.log(items)
  }
  const del = (id) => {
    items.filter((item) => item.id !== id);
  }




  return (
    <div>
      <BrowserRouter>

      <ResponsiveAppBar />
        <Header />
        <Routes>
          <Route path="/" element={<Add add={CredentialSignInPage} />} />
          <Route path="/items" element={<List items={items} ondelete={del} />} />
          <Route path="/contact" element={<Header />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      {/* {count}
      <Boton name={"suma"} click={sum} />
      <Boton name={"resta"} click={resta} />
      <Boton name={"mensaje"} click={() => alert("Hola")} /> */}
      <Add add={add} />
      <List items={items} ondelete={del} />
    </div>
  );
}

export default App;