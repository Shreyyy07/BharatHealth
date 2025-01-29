// src/App.jsx
import { useUser } from '@clerk/clerk-react'
import { Navigate} from 'react-router-dom'
import Header from './components/Header';
import SignInPage from './pages/SignInPage';

const App = () => {
  const {user,isSignedIn}=useUser();

  if(!isSignedIn)
    {
    return <Navigate to={'signin'}/>
  }
  

  return (
 <>
 <Header/>
 <SignInPage />
 </>     
  )
}

export default App;
