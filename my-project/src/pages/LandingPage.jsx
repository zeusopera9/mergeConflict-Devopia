import React from 'react';
import Body from '../components/Landing/Body';
import OnlineLearningIcon from '../components/Landing/Image';

const LandingPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
      <div>
        <Body />
      </div>
      <div>
        <OnlineLearningIcon />
      </div>
    </div>
  );
};

export default LandingPage;
