
import { useUser } from '@clerk/clerk-react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      <Header />
      <Routes>
        {/* Redirect to SignInPage if not signed in */}
        <Route path="/" element={isSignedIn ? <Navigate to="/dashboard" /> : <Navigate to="/signin" />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/dashboard" element={isSignedIn ? <Dashboard /> : <Navigate to="/signin" />} />
      </Routes>
    </>
  );
};

export default App;
