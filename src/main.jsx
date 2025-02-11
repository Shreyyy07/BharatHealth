import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
// import { Navigate} from 'react-router-dom'
import SignInPage from './pages/SignInPage.jsx';
import Details from './pages/Details.jsx';
import About from './pages/About.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  const router=createBrowserRouter([
    {
      element:<App/>,
      children:[
     {
       path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path: "/details", // ✅ Add the Details page here
      element: <Details />,
    },
  ]},
    {
      path:'/',
      element:<LandingPage />
    },
   {
    path:'/signin',
   element:<SignInPage/>
 },
 {
  path:'/about',
   element:<About/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
 <RouterProvider router={router} />
 </ClerkProvider>
</React.StrictMode>,

)
