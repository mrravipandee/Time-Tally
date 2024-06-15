import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import SetTimeUser from "./SetTimeUser";

const ShowTimeUser = () => {
  const [achievements, setAchievements] = useState([]);
  const [showSetTimeUser, setShowSetTimeUser] = useState(false);

  useEffect(() => {
    fetchAchievements();

    const handleStorageChange = () => {
      fetchAchievements();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    // Update achievements whenever the achievements state changes
    fetchAchievements();
  }, [achievements]); // This effect depends on the achievements state

  const fetchAchievements = () => {
    const storedAchievements = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const achievement = JSON.parse(localStorage.getItem(key));
      storedAchievements.push({ id: key, ...achievement });
    }
    setAchievements(storedAchievements);
  };

  const handleDelete = (id) => {
    localStorage.removeItem(id);
    fetchAchievements();
  };

  const calculateDaysLeft = (date) => {
    const today = new Date();
    const achievementDate = new Date(date);
    const timeDifference = achievementDate - today;
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysLeft;
  };

  const handleAddNewGoal = () => {
    setShowSetTimeUser(true);
  };

  if (showSetTimeUser) {
    return <SetTimeUser onSubmit={() => setShowSetTimeUser(false)} />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg font-poppins max-w-screen-md w-full m-4">
        <div className="text-center mb-8">
          <h3 className="text-gray-700 font-semibold text-xl">
            Saved Achievements
          </h3>
        </div>
        {achievements.length > 0 ? (
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="border border-gray-300 p-4 rounded-md flex justify-between items-center"
              >
                <div>
                  <h4 className="text-gray-700 font-semibold">
                    {achievement.name}
                  </h4>
                  <p className="text-gray-500 text-sm flex items-center">
                    {achievement.date} <GoGoal size={18} className="ml-1.5" />
                  </p>
                  <p className="text-gray-600">{achievement.description}</p>
                  <p className="text-green-500 text-sm">
                    {calculateDaysLeft(achievement.date) > 0
                      ? `${calculateDaysLeft(achievement.date)} days left`
                      : "Achievement date has passed"}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(achievement.id)}
                  className="text-green-500 hover:text-green-700 duration-300 mb-16"
                >
                  <MdDelete size={25} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            No achievements found.
          </div>
        )}

        <div className="flex justify-end p-4">
          <button
            onClick={handleAddNewGoal}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add new Goal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowTimeUser;
