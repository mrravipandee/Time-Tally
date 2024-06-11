import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const ShowTimeUser = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    fetchAchievements();
  }, []);

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
    fetchAchievements(); // Refresh the achievements list
  };

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
                  <p className="text-gray-500 text-sm">{achievement.date}</p>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
                <button
                  onClick={() => handleDelete(achievement.id)}
                  className="text-red-500 hover:text-red-800 duration-300"
                >
                  <MdDelete size={25}/>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            No achievements found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowTimeUser;