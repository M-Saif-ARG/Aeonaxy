import React from 'react';

const Acknowledgement = ({onContinue}) => {
    return (
        <>
            <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="row1">
                <div className="cols">
                    <img src="https://www.physicsforums.com/attachments/pulle-jpg.317376/" alt="" />
                </div>
                <div className="cols">
                    <h2>You're in the right place</h2>
                    <p style={{textAlign:'left'}}>
                        Brilliant gets you hands-on to help improve your professional skills
                        and knowledge. You'll interact with concepts and solve fun problems
                        in math, science, and computer science.
                    </p>
                </div>
            </div>
            <div className="btn">
                <button onClick={onContinue}>Continue</button>
            </div>
        </>
    );
};

export default Acknowledgement;
