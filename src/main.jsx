import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
// import { Navigate} from 'react-router-dom'
import SignInPage from './pages/SignInPage.jsx'
// import path from 'path'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Nav from './components/Nav.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  const router=createBrowserRouter([
    {
      element:<App/>,
      children:[
  ]},
  {
    path:'/dashboard',
   element:<Dashboard/>
 },
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
},
{
  path:'/Contact',
 element:<Contact/>
},
{
  path:'/nav',
 element:<Nav/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
 <RouterProvider router={router} />
 </ClerkProvider>
</React.StrictMode>,

)
