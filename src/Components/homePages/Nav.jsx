import { CiStar } from "react-icons/ci";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Nav() {
  useEffect(() => {
    const logo = document.querySelector(".navbar-center .font-semi-bold");
    logo.classList.add("animate-bounceIn");

    return () => {
      logo.classList.remove("animate-bounceIn");
    };
  }, []);

  return (
    <>
      <div className="navbar bg-slate-200">
        <div className="navbar-start">
          {/* Options */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle transition-transform duration-300 transform hover:rotate-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[12rem] h-[10rem] p-2 shadow transform transition-all duration-300 ease-in-out origin-top scale-y-0 hover:scale-y-100"
            >
              <li>
                <Link to={""}>Homepage</Link>
              </li>
              <li>
                <Link to={"/Oldstock"}>Old Stock</Link>
              </li>
              <li>
                <Link to={"/About"}>About</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl"></a>
          <div className="font-semi-bold text-2xl md:flex md:justify-center md:items-center hidden transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
            Genzaire Wardrobe
          </div>
        </div>

        <div className="md:hidden navbar-end text-2xl">GW</div>

        {/* Icons */}
        <div className="navbar-end text-2xl space-x-1 md:space-x-4 hidden md:flex">
          <RiShoppingBag2Fill className="hover:text-blue-500 transition duration-300 transform hover:scale-125" />
          <IoIosContact className="hover:text-green-500 transition duration-300 transform hover:scale-125" />
          <FaInstagram className="hover:text-pink-500 transition duration-300 transform hover:scale-125" />
        </div>
      </div>
    </>
  );
}

export default Nav;
