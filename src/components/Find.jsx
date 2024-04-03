import React from 'react';

const Find = ({onContinue}) => {
  return (
    <>
      <img className='load' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4SEOooVLBIH22yoVZSK58L2p4HI817_vNo0JzSab9A&s" alt="" />
      <h4>Finding learning path recomendations for you based on your responses</h4>
      <div className="btn">
        <button onClick={onContinue}>Continue</button>
      </div>
    </>
  );
};

export default Find;
