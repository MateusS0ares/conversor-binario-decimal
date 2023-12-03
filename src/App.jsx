// src/App.jsx
import { useState } from 'react';
import './App.css';
import Inicio from './components/Inicio';
import BinarioParaDecimal from './components/BinarioParaDecimal';
import DecimalParaBinario from './components/DecimalParaBinario';

function App() {
  const [currentPage, setCurrentPage] = useState('inicio');

  const renderPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <Inicio onSelectConversion={(conversionType) => setCurrentPage(conversionType)} />;
      case 'binarioParaDecimal':
        return <BinarioParaDecimal onBack={() => setCurrentPage('inicio')} />;
      case 'decimalParaBinario':
        return <DecimalParaBinario onBack={() => setCurrentPage('inicio')} />;
      default:
        return null;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;