import * as React from 'react';
import Clock from '../Clock';
import useToggle from '../../hooks/use-toggle';

function Home() {
  const [showEmoji, toggleEmoji] = useToggle();
  return (
    <div>
      <h1>Welcome home.</h1>
      <p>The current time is {<Clock />}.</p>
      <button onClick={toggleEmoji}>Show emoji</button>
      {showEmoji && <span>😅</span>}
    </div>
  );
}

export default Home;
