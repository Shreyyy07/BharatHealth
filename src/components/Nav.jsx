import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-gradient-to-r from-blue-300 to-blue-600 h-[70px] backdrop-blur-2xl rounded-full max-w-[350px] mx-auto px-5 flex justify-between text-2xl text-white/50">
          <Link
            to="/" 
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <BiHomeAlt />
          </Link>
          <Link
            to="/about" 
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <BiUser />
          </Link>
          <Link
            to="/contact" 
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center hover:text-white transition-all duration-300"
          >
            <BsBriefcase />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
