import { motion } from "framer-motion";
import { fadeIn } from "/variants.js";
import Header from "../components/Header";
import { AtomIcon, Clock10, Notebook } from "lucide-react";
import Nav from "../components/Nav";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import {
  FaCheckCircle,
  FaUser,
  FaNotesMedical,
  FaClipboardList,
  FaHeartbeat,
  FaFileAlt,
  FaFileMedical,
} from "react-icons/fa";

const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { user } = useUser(); // Get user details
  const navigate = useNavigate();

  // Function to get greeting based on the time of day
  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return "Good Morning";
    else if (hours < 18) return "Good Afternoon";
    else return "Good Evening";
  };

  useEffect(() => {
    if (user) {
      setShowPopup(true); // Show popup only after sign-in
    }
  }, [user]);

  return (
    <div className="reltive">
      <Header />
      <Nav /> {/* Navbar Component */}

          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-top before:bg-cover before:size-full before:-z-[6] before:transform before:-translate-x-1/2">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
              All Your Health Information in One Place, <br />
              <span className="text-blue-500">Accessible Anywhere, Anytime.</span>
            </h1>
            <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
              Take ownership of your & your family’s health by digitizing your
              medical records.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate("/src/Dashboard.jsx/index.jsx")}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          </div>
        {/* </motion.section> */}

         {/* Personalized Popup Modal */}
      {showPopup && user && (
        <div className="fixed inset-0 flex justify-center items-center bg-opacity-50 backdrop-blur-sm z-50">
          <div className="relative bg-gradient-to-r from-blue-100 to-blue-300 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            {/* Greeting */}
            <h2 className="text-xl font-bold text-gray-800">{getGreeting()}, {user.firstName}!</h2>
            
            {/* Profile Completion Status */}
            <p className="text-gray-600 mt-2">Your profile is <span className="font-bold text-blue-600">80% completed</span>.</p>
            <p className="text-gray-500 text-sm mt-1">Complete your profile to get better insights about your medical data.</p>

            {/* CTA Button */}
            <button
              onClick={() => navigate("/details")}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Complete Your Profile →
            </button>
            </div>
          </div>
        )}
   
      {/* What We Offer Section */}
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="py-8 bg-white z-50 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
      >
        <h2 className="font-bold text-3xl">What we Offer?</h2>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[ // Offer Items
            { icon: <AtomIcon className="h-8 w-8" />, title: "Digital records for you and your family", desc: "Manage and share your family's health records securely, all in one convenient place." },
            { icon: <Notebook className="h-8 w-8" />, title: "Accurate interpretation of your medical reports", desc: "Unlock clear insights from medical reports with our easy-to-understand summaries and health tips." },
            { icon: <Clock10 className="h-8 w-8" />, title: "Detailed health profile at your fingertips", desc: "Access & manage your profile from the Homescreen for a complete, easy-to-use health overview." }
          ].map((item, index) => (
            <motion.a
              key={index}
              variants={fadeIn("up", 0.3 * index)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="block rounded-xl border bg-white border-gray-200 p-8 shadow-xl transition hover:border-blue-500/20 hover:shadow-blue-500/20"
              href="#"
            >
              {item.icon}
              <h2 className="mt-4 text-xl font-bold text-black">{item.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="bg-gray-50 py-12"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Video Section */}
          <div className="w-full md:w-1/2">
            <iframe
              className="w-full h-64 md:h-80 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="How Does BharatHealth Work?"
              allowFullScreen
            ></iframe>
          </div>

          {/* Steps Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center md:text-left">
              How Does BharatHealth Work?
            </h2>
            <p className="text-gray-600 text-center md:text-left mt-2">
              Our goal is to help you simplify your medical records and make healthcare hassle-free for you, every step of the way.
            </p>
            {[
              { step: "Step 1", emoji: "📥", desc: "Connect with us & create your health profile" },
              { step: "Step 2", emoji: "📷", desc: "Scan & upload your medical records for instant access" },
              { step: "Step 3", emoji: "📱", desc: "Monitor your key parameters & take charge of your health" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("left", 0.3 * index)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="flex items-start space-x-4 mt-6"
              >
                <div className="text-3xl">{item.emoji}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.step}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
     {/* Full Control, Full Protection Section */}
     <motion.section
     variants={fadeIn("up", 0.3)}
     initial="hidden"
     whileInView="show"
     viewport={{ once: false, amount: 0.7 }}
     className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-gradient-to-b from-blue-100 to-white"
   >
     {/* Left Text Section */}
     <motion.div
       variants={fadeIn("left", 0.3)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
       className="max-w-lg"
     >
       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
         Full Control, Full Protection
       </h2>
       <div className="flex items-start space-x-4 mb-6">
         <FaCheckCircle className="text-teal-500 text-2xl mt-1" />
         <div>
           <h3 className="text-lg font-semibold text-gray-800">
             Privacy in Your Hands
           </h3>
           <p className="text-gray-600">
             Choose what information first responders can see, ensuring your
             personal data stays protected.
           </p>
         </div>
       </div>
       <div className="flex items-start space-x-4">
         <FaCheckCircle className="text-teal-500 text-2xl mt-1" />
         <div>
           <h3 className="text-lg font-semibold text-gray-800">
             Update Anytime, Anywhere
           </h3>
           <p className="text-gray-600">
             Easily edit your emergency health records via the Health-e app
             to keep your details current.
           </p>
         </div>
       </div>
     </motion.div>

     {/* Right Mobile Mockup */}
     <motion.div
       variants={fadeIn("right", 0.3)}
       initial="hidden"
       whileInView="show"
       viewport={{ once: false, amount: 0.7 }}
       className="relative mt-10 md:mt-0 w-full max-w-xs md:max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border"
     >
       <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-6 text-white flex items-center justify-center">
         <div className="relative">
           <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
             <FaUser className="text-3xl text-gray-600" />
           </div>
           <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md">
             📷
           </div>
         </div>
       </div>
       <div className="p-4 space-y-3">
         <MenuItem icon={<FaUser />} label="Basic Details" />
         <MenuItem icon={<FaNotesMedical />} label="Medical Data" />
         <MenuItem icon={<FaClipboardList />} label="Lifestyle Details" />
         <MenuItem icon={<FaHeartbeat />} label="Family Health History" />
         <MenuItem icon={<FaFileAlt />} label="Add Notes" />
         <MenuItem icon={<FaFileMedical />} label="Records" />
       </div>
     </motion.div>
   </motion.section>
 </div>
);
};

// Reusable Menu Item Component
const MenuItem = ({ icon, label }) => {
  return (
    <div className="flex items-center justify-between bg-blue-50 p-3 rounded-lg shadow-sm hover:bg-blue-100 cursor-pointer">
      <div className="flex items-center space-x-3">
        <span className="text-blue-600 text-xl">{icon}</span>
        <p className="text-gray-800 font-medium">{label}</p>
      </div>
      <span className="text-gray-500">{">"}</span>
    </div>
  );
};

export default LandingPage;
