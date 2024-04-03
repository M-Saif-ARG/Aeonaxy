import React, { useState } from 'react';

const Solution = ({ onContinue }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  const handleContinue = () => {
    if (selectedRow !== null) {
      onContinue();
    } else {
      alert('Please select a path before continuing');
    }
  };
  return (
    <>
      <div className="main">
        <div className="head">
          <h3>Learning paths based on your answers</h3>
          <p>Choose one to get started. You can switch anytime.</p>
        </div>
        <div className="row2">
          <div className="col_last" onClick={() => handleRowClick(1)} style={{ border: selectedRow === 1 ? '2px solid green' : '1px solid gray' }}>
            <p>
              <b>📈 Foundational Math </b>
              Build your foundational skills in
              algebra, geometry and probability.
            </p>
          </div>
          <div className="col_last" onClick={() => handleRowClick(2)} style={{ border: selectedRow === 2 ? '2px solid green' : '1px solid gray' }}>
            <p>
              <b>🤔 Mathematical Thinking </b>
              Build your foundational skills in
              algebra, geometry and probability.
            </p>
          </div>
        </div>
        <div className="btn">
          <button onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </>
  );
};

export default Solution;
