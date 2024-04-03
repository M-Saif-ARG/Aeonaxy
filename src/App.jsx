import React, { useState } from 'react';
import Home from './components/Home';
import Category from './components/Category';
import Interest from './components/Interest';
import Acknowledgement from './components/Acknowledgement';
import Level from './components/Level';
import Feedback from './components/Feedback';
import Find from './components/Find';
import Solution from './components/Solution';
import End from './components/End';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('Home');

  const handleContinue = () => {
    // Define the sequence of components
    const componentSequence = ['Home', 'Category', 'Interest', 'Acknowledgement', 'Level', 'Feedback', 'Find', 'Solution','End'];

    // Find the index of the current component
    const currentIndex = componentSequence.indexOf(currentComponent);

    // Update the state to show the next component
    setCurrentComponent(componentSequence[currentIndex + 1]);
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Home':
        return <Home onContinue={handleContinue} />;
      case 'Category':
        return <Category onContinue={handleContinue} />;
      case 'Interest':
        return <Interest onContinue={handleContinue} />;
      case 'Acknowledgement':
        return <Acknowledgement onContinue={handleContinue} />;
      case 'Level':
        return <Level onContinue={handleContinue} />;
      case 'Feedback':
        return <Feedback onContinue={handleContinue} />;
      case 'Find':
        return <Find onContinue={handleContinue} />;
      case 'Solution':
        return <Solution onContinue={handleContinue} />;
      case 'End':
        return <End onContinue={handleContinue} />;
      default: 
        return <End onContinue={handleContinue} />
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default App;
