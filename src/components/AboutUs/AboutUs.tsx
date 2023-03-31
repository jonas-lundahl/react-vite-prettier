import * as React from 'react';
import reactLogo from '../../assets/react.svg';

function AboutUs() {
  return (
    <div>
      <h1>Some things about us</h1>
      <ul>
        <li>We are developers.</li>
        <li>We hate making forms.</li>
      </ul>
      <img src={reactLogo} alt="React Logo" />
    </div>
  );
}

export default AboutUs;
