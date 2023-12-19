import { useState } from 'react';
import '../App.css';

// eslint-disable-next-line react/prop-types
const BinarioParaDecimal = ({ onBack }) => {
  const [binaryValue, setBinaryValue] = useState('');
  const [decimalResult, setDecimalResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setBinaryValue(value);

    // Lógica de validação para 0 ou 1
    if (value !== '' && !/^[01]+$/.test(value)) {
      setErrorMessage('Você inseriu um dígito não binário. (Por favor, insira apenas 0 ou 1).');
      setDecimalResult(null);
    } else {
      setErrorMessage('');
      const decimalValue = value === '' ? null : parseInt(value, 2);
      setDecimalResult(isNaN(decimalValue) ? null : decimalValue);
    }
  };

  return (
    <div>
      <h1>Binário para Decimal</h1>
      <div>
        <p>Digite um número binário para obter sua conversão em decimal.</p>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
      </div>
      

      <div className='input'>
        <input className='input' type="text" value={binaryValue} onChange={handleInputChange} />
      </div>

      {(errorMessage === '' && binaryValue !== '' && decimalResult === null) && (
        <p>Aguardando um número binário válido...</p>
      )}

      {decimalResult !== null ? (
        <div>
          <h1>{decimalResult}</h1>
        </div>
      ) : null}

      <button className='button btnVoltar' onClick={onBack}>
        <span className='button-content'>Voltar para o Início</span>
      </button>
    </div>
  );
};

export default BinarioParaDecimal;
