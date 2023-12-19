// eslint-disable-next-line react/prop-types
const Inicio = ({ onSelectConversion }) => {
  return (
    <div>
      <h1>Conversor Decimal/Binário</h1>
      <p>Escolha o tipo de conversão:</p>

      <div className="selectConvertion">
        <button className="button" onClick={() => onSelectConversion('binarioParaDecimal')}>
            <span className="button-content">Binário para Decimal</span>
        </button>
        <button className="button" onClick={() => onSelectConversion('decimalParaBinario')}>
            <span className="button-content">Decimal para Binário</span>
        </button>
      </div>

    </div>
  );
};

export default Inicio;
