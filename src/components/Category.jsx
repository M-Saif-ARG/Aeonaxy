import React, { useState } from 'react';
const Category = ({onContinue}) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (index) => {
        setSelectedRow(index);
    };

    const handleContinue = () => {
        if(selectedRow !== null) {
            onContinue();
        } else {
            alert('Please select a category before continuing');
        }
    };

    return (
        <>
            <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '20%' }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="container">
                <div className="heading">
                    <h2><b>Which describes you best ? </b></h2>
                    <h6>This will help us personalize your experience.</h6>
                </div>
                <div className="row" onClick={() => handleRowClick(1)} style={{ border: selectedRow === 1 ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}><b>👨‍🎓 Student </b> or soon to be enrolled</p>
                </div>
                <div className="row" onClick={() => handleRowClick(2)} style={{ border: selectedRow === 2 ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}><b>👩‍⚕️ Professional </b> pursuing a career</p>
                </div>
                <div className="row" onClick={() => handleRowClick(3)} style={{ border: selectedRow === 3 ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}><b>👨‍💼 Parent </b> of a school age child</p>
                </div>
                <div className="row" onClick={() => handleRowClick(4)} style={{ border: selectedRow === 4 ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}><b>👴 Life long learner </b></p>
                </div>
                <div className="row" onClick={() => handleRowClick(5)} style={{ border: selectedRow === 5 ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}><b>👨‍🏫 Teacher </b></p>
                </div>
                <div className="row" onClick={() => handleRowClick(6)} style={{ border: selectedRow === 6 ? '2px solid green' : '1px solid gray' }}>
                    <p style={{ textAlign: 'left' }}><b>👦 Other </b></p>
                </div>
                <div className="btn">
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div>
        </>
    );
};

export default Category;