import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const DecimalParaBinario = ({ onBack }) => {
  const [decimalValue, setDecimalValue] = useState('');
  const [binaryResult, setBinaryResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDecimalValue(value);

    // Lógica de validação para números de 0 a 9
    if (value !== '' && !/^[0-9]+$/.test(value)) {
      setErrorMessage('Você inseriu um número inválido. (Por favor, insira apenas números entre 0 à 9).');
      setBinaryResult(null);
    } else {
      setErrorMessage('');
      const binaryValue = value === '' ? null : Number(value).toString(2);
      setBinaryResult(isNaN(binaryValue) ? null : binaryValue);
    }
  };

  return (
    <div>
      <h1>Decimal para Binário</h1>
      <div>
        <p>Digite um número decimal para obter sua conversão em binário.</p>
        {errorMessage && <p className='errorMessage'>{errorMessage}</p>}
      </div>
      
      <div className="input">
        <input type="text" value={decimalValue} onChange={handleInputChange} />
      </div>

      {(errorMessage === '' && decimalValue !== '' && binaryResult === null) && (
        <p>Aguardando um número decimal válido...</p>
      )}

      {binaryResult !== null ? (
        <div className='result'>
          <h1>{binaryResult}</h1>
        </div>
      ) : null}
      <button className='button btnVoltar' onClick={onBack}>
        <span className='button-content'>Voltar para o Início</span>
      </button>
    </div>
  );
};

export default DecimalParaBinario;
