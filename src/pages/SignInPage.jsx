// import React from 'react'
import { SignIn } from '@clerk/clerk-react'
import Header from '../components/Header'


function SignInPage() {
  return (
    <div>
    <Header/>
    <div className='p-10 md:px-20 lg:px-32'>
    <h2 className='font-bold text-3xl tracking-wide leading-none flex justify-center mb-8'>All Your Health Information <br></br>
    <span className='text-blue-500'> in One Place, </span> Accessible,<span className='text-blue-500'>Anywhere</span>Anytime.</h2>
    {/* <div className='grid grid-cols-1 md:grid-cols-2 p-10 gap-10'> */}
      <div className='flex justify-center items-center '>
   <SignIn />
   </div>
   </div>
     </div>
    //  </div>
  )
}

export default SignInPage
