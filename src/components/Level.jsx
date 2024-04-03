import React, {useState} from 'react'

const Level = ({onContinue}) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const handleRowClick = (index) => {
        setSelectedRow(index);
    };

    const handleContinue = () => {
        if(selectedRow !== null) {
            onContinue();
        } else {
            alert('Please select a level before continuing');
        }
    };

    return (
        <>
            <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="container">
                <h2 className='head'>What is your math comfort level?</h2>
                <p className='subhead'>Choose the highest level you feel confident in- you can always adjust later.</p>
                <div className="rowname">
                    <div className="colname" onClick={() => handleRowClick(1)} style={{ border: selectedRow === 1 ? '2px solid green' : '1px solid gray' }}>
                        <h3>5 x ½ = ?</h3>
                        <h6>Arithmetic</h6>
                        <p>Introductory</p>
                    </div>
                    <div className="colname" onClick={() => handleRowClick(2)} style={{ border: selectedRow === 2 ? '2px solid green' : '1px solid gray' }}>
                        <h3>3x + 5 = 4</h3>
                        <h6>Basic Algebra</h6>
                        <p>Foundational</p>
                    </div>
                    <div className="colname" onClick={() => handleRowClick(3)} style={{ border: selectedRow === 3 ? '2px solid green' : '1px solid gray' }}>
                        <h3>x=(-b±√(b^2-4ac)) / (2a)</h3>
                        <h6>Intermediate Algebra</h6>
                        <p>Intermediate</p>
                    </div>
                    <div className="colname" onClick={() => handleRowClick(4)} style={{ border: selectedRow === 4 ? '2px solid green' : '1px solid gray' }}>
                        <h3>∫x.dx = ?</h3>
                        <h6>Calculus</h6>
                        <p>Advance</p>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={handleContinue}>Continue</button>
                </div>
            </div>
        </>
    )
}

export default Level
