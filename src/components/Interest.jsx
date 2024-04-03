import React, { useState } from 'react';

const Interest = ({ onContinue }) => {
    const [selectedInterest, setSelectedInterest] = useState(null);

    const handleInterestSelection = (interest) => {
        setSelectedInterest(interest);
    };

    const handleContinue = () => {
        if (selectedInterest) {
            onContinue();
        } else {
            alert('Please select an interest before continuing');
        }
    };

    return (
        <>
            <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="container">
                <div className="heading">
                    <h2><b>Which are you most interested in?</b></h2>
                    <h6>Choose just one. This will help us get you started.</h6>
                </div>
                <div className="row" onClick={() => handleInterestSelection('career')} style={{ border: selectedInterest === 'career' ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}>📊 Learning specific skills to advance my career</p>
                </div>
                <div className="row" onClick={() => handleInterestSelection('topics')} style={{ border: selectedInterest === 'topics' ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}>🌐 Exploring new topics. I am interested in.</p>
                </div>
                <div className="row" onClick={() => handleInterestSelection('math')} style={{ border: selectedInterest === 'math' ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}>↪ Refreshing my math foundations.</p>
                </div>
                <div className="row" onClick={() => handleInterestSelection('brain')} style={{ border: selectedInterest === 'brain' ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}>🏹 Exercising my brain to sharpen it</p>
                </div>
                <div className="row" onClick={() => handleInterestSelection('other')} style={{ border: selectedInterest === 'other' ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}>😕 Something else</p>
                </div>
                <div className="btn">
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div>
        </>
    );
};

export default Interest;
