import {Link} from 'react-router-dom'
import { UserButton,useUser } from '@clerk/clerk-react'


const Header = () => {
  const {isSignedIn}=useUser();

  return (
    <div className="p-3 px-5 flex justify-between items-center shadow-md ">

    <Link to={'/'}>
      <img src="Logo1.webp" alt="Logo" className=" rounded-4xl h-16"/>
      </Link>

      {isSignedIn ? //if the user is signed in then we will show this button//
   <div className='flex gap-3 items-center'> 
   <Link to={'/dashboard'}>
   {/* link to dashboard page */}
   <button className="px-2 py-2 outline-1 hover:bg-blue-600 text-black rounded-lg font-semibold">DashBoard</button>
   </Link>
   <Link to={'/details'}>
   {/* link to details page */}
   <button className="px-2 py-2 outline-1 hover:bg-blue-600 text-black rounded-lg font-semibold">Details</button>
   </Link>
      
      <UserButton/>
    </div>:
    <Link to={'/signin'}>
      <button
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
        
      >
        Sign In
      </button>
      </Link>
}
      
    </div>
  );
};

export default Header;
