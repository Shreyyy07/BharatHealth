
import { useUser } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';
import {doc, getDoc} from 'firebase/firestore';
import { db } from './firebase-config';
import { useEffect } from 'react';
import Details from './pages/Details';

const App = () => {
  const { isSignedIn } = useUser();
  
  const docRef = doc(db, "users", "4Ylky0QEmnTMKaO8hpdt");


  const getData = async () => {
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Firebase:", docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  
  useEffect(() => {
    getData();
  }, []);



  
  return (
    <>
      <Header />
      <Routes>
        {/* Redirect to SignInPage if not signed in */}
        <Route path="/" element={isSignedIn ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={isSignedIn ? <Dashboard /> : <Navigate to="/signin" />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
