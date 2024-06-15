import React from 'react';
import About from './components/About';
import SetTimeUser from './components/SetTimeUser';
import ShowTimeUser from './components/ShowTimeUser';

const App = () => {
  return (
    <div className="flex justify-center items-center h-full bg-[#F6DCAC]">
      {/* <About />
      <SetTimeUser /> */}
      <ShowTimeUser />
    </div>
  );
};

export default App;
