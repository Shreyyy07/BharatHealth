import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const BasicDetails = () => {
  const navigate = useNavigate();
  
  // State for profile image upload
  const [profileImage, setProfileImage] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    weight: "",
    email: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle profile image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details Submitted:", formData);
    navigate("/dashboard"); // Redirect to dashboard after submission
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center ">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">

          {/* Profile Image Section */}
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-4 rounded-t-lg flex flex-col items-center">
            <div className="relative">
              <label htmlFor="profile-upload">
                <img
                  src={profileImage || "/default-avatar.png"} // Default avatar if no image uploaded
                  alt="User Profile"
                  className="w-20 h-20 rounded-full border-2 border-gray-300 cursor-pointer"
                />
              </label>
              <input
                type="file"
                id="profile-upload"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </div>
            <p className="text-white mt-2 text-sm">Upload Profile Picture</p>
          </div>

          {/* Separator Line */}
          <div className="border-t border-gray-300 my-4"></div>

          {/* Form Title */}
          <h2 className="text-xl font-semibold text-center mb-4">Complete Your Details</h2>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <select name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} className="w-full p-2 border rounded">
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
              Save & Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
