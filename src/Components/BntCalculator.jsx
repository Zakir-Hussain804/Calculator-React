const BntCalculator = ({ HandBnt }) => {
  
    let Button = ['del', '/', '%', 'C', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '00', ".", "="]
  return (
    <div>
      {Button.map((bnt, index) => (
        <button key={index} value={bnt} onClick={HandBnt}>
          {bnt}
        </button>
      ))}
    </div>
  );
};

export default BntCalculator;
