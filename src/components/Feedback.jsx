import React from 'react';

const Feedback = ({onContinue}) => {
  return (
    <>
      <div className="progress" style={{ height: '10px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="row1">
                <div className="cols">
                    <img src="https://imjaeki.files.wordpress.com/2015/01/smile.jpg" alt="" />
                </div>
                <div className="cols">
                    <h2>You're on your way!</h2>
                    <h3>⭐⭐⭐⭐⭐</h3>
                    <p style={{textAlign:'left'}}>
                        "Through its engaging and well-structured courses, Brilliant
                        has taught me mathematical concepts that I previously struggled
                        to undersand. I now feel confident approaching both technical job
                        interviews and real world problem solving situations."
                    </p>
                    <p>
                        - Jacob S.
                    </p>
                </div>
            </div>
            <div className="btn">
                <button onClick={onContinue}>Continue</button>
            </div>
    </>
  );
};

export default Feedback;
