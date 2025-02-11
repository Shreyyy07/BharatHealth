
import { useState } from "react";
import { db } from "../firebase-config"; // Import Firestore instance
import { collection, addDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Details = () => {

   // State for profile image upload
  const [profileImage, setProfileImage] = useState(null);


  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    weight: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID:", docRef.id);
      alert("Details added successfully!");

      // Clear the form after submission
      setFormData({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    weight: "",
      });
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to add details. Check console for errors.");
    }
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

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
        {/* Profile Image Section */}
           <div className="bg-gradient-to-r from-blue-300 to-blue-600 p-4 rounded-t-lg flex flex-col items-center">
             <div className="relative">
               <label htmlFor="profile-upload">
                 <img
                 src={profileImage || "/default-avatar.png"} // Default avatar if no image uploaded                  alt="User Profile"
                   className="w-32 h-29 rounded-full border-2 border-gray-300 cursor-pointer"
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
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Enter Your Details</h2>
         {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
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
            required
            className="w-full p-2 border rounded"
          />
          <button
            // type="submit"
            onClick={() => Navigate("/dashboard")}
            className="w-full cursor-pointer bg-gradient-to-r from-blue-300 to-blue-700 text-white p-2 rounded hover:bg-blue-600"
          >
            Save & Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Details;
