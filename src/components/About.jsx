import React, { useState, useEffect } from "react";
import { IoArrowRedo } from "react-icons/io5";

const About = ({ onAccept }) => {
  const [clicked, setClicked] = useState(false);
  const [greek, setGreek] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user is new when the component mounts
    const newUser = JSON.parse(localStorage.getItem('newUser'));
    if (newUser === null || newUser === true) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, []);

  const handleClick = () => {
    setClicked(true);
    localStorage.setItem('newUser', JSON.stringify(false));
    setIsVisible(false);
    onAccept(); // Notify parent component to move to next stage
  };

  const handleGreek = () => {
    const currDate = new Date();
    const hours = currDate.getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
      greeting = "Good Morning";
    } else if (hours >= 12 && hours < 18) {
      greeting = "Good Afternoon";
    } else if (hours >= 18 && hours < 22) {
      greeting = "Good Evening";
    } else {
      greeting = "Good Night";
    }

    setGreek(greeting);
  };

  useEffect(() => {
    handleGreek();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md font-poppins max-w-screen-md m-6">
      <div className="aboutPage space-y-4 lg:text-justify">
        <h3 className="text-2xl font-bold text-gray-800">Hello,</h3>
        <p className="text-lg text-gray-600">{greek}!</p>
        <p className="text-lg text-gray-600">
          <span className="text-gray-800 font-bold">TimeTally</span> is an
          application designed to help you achieve your goals by tracking and
          managing your time effectively. Here are a few key points on how it
          can be useful:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-lg text-gray-800">
            <strong>Goal Achievement: </strong>
            <span>
              Helps set and prioritize goals, ensuring time aligns with
              objectives.
            </span>
          </li>
          <li className="text-lg text-gray-800">
            <strong>Time Tracking: </strong>
            <span>
              Provides insights into time usage to identify and reduce waste.
            </span>
          </li>
          <li className="text-lg text-gray-800">
            <strong>Productivity Improvement: </strong>
            <span>
              Optimizes schedule to focus on important tasks and boost
              productivity.
            </span>
          </li>
        </ul>
        <div className="flex justify-end">
          <button
            className={`bg-[#f8c499] text-[#4C2D1F] px-4 py-2 rounded hover:bg-[#f8b581] hover:text-[#FFFFFF] transition-colors duration-300 transform flex ${
              clicked ? "scale-95" : ""
            }`}
            onClick={handleClick}
          >
            Get Started <IoArrowRedo size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
