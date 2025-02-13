import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Paragraph from './components/Paragraph';
import Button from './components/Button';
import List from './components/List';

function App() {
  const [count, setCount] = useState(0);
  const [elementos, setElementos] = useState([
    { name: "Aumentar", action: () => sum(), key: "1" },
    { name: "Disminuir", action: () => resta(), key: "2" }
  ]);
  const [record, setRecord] = useState(0);
  const [historia, setHistoria] = useState([]);

  useEffect(() => {
    mezclarArreglo();
  }, [count]);

  const sum = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount >= record) {
        setRecord(newCount);
      }
      return newCount;
    });

    setHistoria(prevHistoria => {
      return [...prevHistoria, { accion: "Sumar", valor: count + 1 }];
    });
  }

  const resta = () => {
    setCount(prevCount => prevCount - 1);
  }

  const mezclarArreglo = () => {
    const nuevoArreglo = [...elementos];
    for (let i = nuevoArreglo.length - 1; i > 0; i--) {
      let indiceAleatorio = Math.floor(Math.random() * (i + 1));
      let temporal = nuevoArreglo[i];
      nuevoArreglo[i] = nuevoArreglo[indiceAleatorio];
      nuevoArreglo[indiceAleatorio] = temporal;
    }
    setElementos(nuevoArreglo);
  }

  return (
    <div className="App">
      <Header count={count} />
      <Paragraph />
      {elementos.map((elemento, index) => (
        <Button name={elemento.name} suma={elemento.action} key={elemento.key} />
      ))}
      <List items={historia} />
      <Footer record={record} />
    </div>
  );
}

export default App;
