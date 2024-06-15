import React from "react";
import About from "./components/About";
import SetTimeUser from "./components/SetTimeUser";
import ShowTimeUser from "./components/ShowTimeUser";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-full bg-[#F6DCAC]">
      <div className="flex justify-center items-center">
        {/* <About />
      <SetTimeUser /> */}
        <ShowTimeUser />
      </div>
      <Footer />
    </div>
  );
};

export default App;
