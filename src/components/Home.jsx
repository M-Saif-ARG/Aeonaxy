import React from 'react';
const Home = ({onContinue}) => {
    let userName = prompt("Please enter your name:");
    function capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    if (userName.trim() === "") {
        alert("Username cannot be empty. Please enter a valid name.");
        return null;
    }
    
    let name = capitalizeFirstLetter(userName);
    return (
        <>
            <div className="centered">
                <h1 style={{ textAlign: 'center' }}>Hi, 👋 {name} !! Hope you are doing well 💙 !!!</h1>
                <div className="btn">
                    <button onClick={onContinue}>Let's start</button>
                </div>
            </div>
        </>
    );
};

export default Home;
