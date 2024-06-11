import React, { useState } from "react";

const SetTimeUser = () => {
  const [clicked, setClicked] = useState(false);
  const [errors, setErrors] = useState({ name: "", date: "", description: "" });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const achievementName = event.target.achievementName.value;
    const achievementDate = event.target.achievementDate.value;
    const achievementDescription = event.target.achievementDescription.value;

    let valid = true;
    const newErrors = { name: "", date: "", description: "" };

    if (!achievementName) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!achievementDate) {
      newErrors.date = "Date is required";
      valid = false;
    }

    if (!achievementDescription) {
      newErrors.description = "Description is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      const achievementDetails = {
        name: achievementName,
        date: achievementDate,
        description: achievementDescription,
      };

      const id = new Date().getTime(); // Generate a unique ID based on the current timestamp
      localStorage.setItem(id, JSON.stringify(achievementDetails));

      // Reset form after saving to local storage
      event.target.reset();

      handleClick();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg font-poppins max-w-screen-sm w-full m-4">
        <div className="text-center mb-8">
          <h3 className="text-gray-700 font-semibold text-xl">Details For The Achievement</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex flex-col flex-1">
              <label htmlFor="achievementName" className="mb-1 text-gray-400 text-sm">
                Name
              </label>
              <input
                type="text"
                id="achievementName"
                name="achievementName"
                className={`border p-2 rounded-md focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"}`}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="flex flex-col flex-1 mt-4 md:mt-0">
              <label htmlFor="achievementDate" className="mb-1 text-gray-400 text-sm">
                Date
              </label>
              <input
                type="date"
                id="achievementDate"
                name="achievementDate"
                className={`border p-2 rounded-md focus:outline-none focus:ring-2 ${errors.date ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"}`}
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="achievementDescription" className="mb-1 text-gray-400 text-sm">
              Description
            </label>
            <textarea
              id="achievementDescription"
              name="achievementDescription"
              className={`border p-2 rounded-md focus:outline-none focus:ring-2 ${errors.description ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-gray-500"}`}
              rows="4"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-[#f8c499] text-[#4C2D1F] px-4 py-2 rounded-md hover:bg-[#f8b581] hover:text-[#FFFFFF] transition-colors duration-300 transform ${
                clicked ? "scale-95" : ""
              }`}
              onClick={handleClick}
            >
              Count It
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetTimeUser;
