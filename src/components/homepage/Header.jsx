import React from "react";
import ReactDOM from "react-dom";
import logo from "../../images/icon.svg";
import AboutUs from "../aboutus/aboutus";
import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const { loginWithRedirect, logout, isAuthenticated , user} = useAuth0();

  return (
    <div className="sticky top-0 z-10 bg-gray-100">
      <div
        className="flex justify-between flex-wrap mb-4 pt-2"
        style={{ border: "" }}
      >
        <div id="home">
          <img
            className="m-auto h-[75px] self-center tablet:h-[60px] tablet:pt-2 pl- tablet:self-start"
            src={logo}
          />
          <div className="font-bold pl-2">code4Free</div>
        </div>

        <div className="text-lg tablet:text-xl tablet:visible tablet:flex tablet:flex-wrap tablet:justify-between tablet:w-[600px] tablet:self-end p-4 pr-8">


          <div className="hidden tablet:text-2xl tablet:block   tablet:pt-2 pb-2">
            <Link to="/" className="hover:text-slate-400">
              Home
            </Link>
          </div>

          <div className=" hidden tablet:text-2xl tablet:block  tablet:pt-2 pb-2 ">
            <Link to="/courses" className="hover:text-slate-400">
              Courses
            </Link>
          </div>

          <div className="hidden tablet:text-2xl tablet:block  tablet:pt-2 pb-2">
            <Link to="/about" className="hover:text-slate-400">
              About
            </Link>
          </div>

          <div className="hidden tablet:text-2xl tablet:block  tablet:pt-2 pb-2">
            <Link to="/contact" className="hover:text-slate-400">
              Contact
            </Link>
          </div>

        
          {
            isAuthenticated && (
                <div className="hidden text-lg tablet:block  tablet:pt-2 pb-2">
                  <img className="border-black border-2 w-[35px]" src={user.picture} />
                  {/* <h2>{user.name}</h2> */}
                  {/* <p>{user.email}</p> */}
                </div>
            )
          }

          {isAuthenticated ? (
            <div>
              <button
                className="p-2  text-xl bg-black text-white hover:text-white hover:bg-slate-600 bg-black text-white  px-2 rounded-md hover:bg-gray-600 transition-colors duration-300"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className=" ">
              <button
                className="p-2 text-xl bg-black text-white hover:text-white hover:bg-slate-600 bg-black text-white  rounded-md hover:bg-gray-600 transition-colors duration-300"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
              {/* <button className="p-2 bg-black text-white hover:text-white hover:bg-slate-600 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300">Join Now</button> */}
            </div>
          )}


        </div>
      </div>

      {/* <Outlet /> */}
    </div>
  );
}
