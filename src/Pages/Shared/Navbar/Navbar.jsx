import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provides/AuthProvide";
import Swal from "sweetalert2";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const [cart] = useCart();
  console.log("User in nav:", user);
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire("Logged Out Successfully");
      })
      .catch((err) => {
        console.log("Error during logout:", err);
      });
  };
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/order/salad">Order</NavLink>
              </li>

              {user ? (
                <li>
                  <button onClick={handleLogout} to="/register">
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BistroBoss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              {/* initially it would show salad */}
              <NavLink to="/order/salad">Order</NavLink>
            </li>{" "}
            {user ? (
              <li>
                <button
                  className="text-red-700 font-semibold"
                  onClick={handleLogout}
                  to="/register"
                >
                  Logout
                </button>
              </li>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <>
              <Link to="/dashboard/cart">
                <button className="btn btn-sm">
                  <IoCartOutline />
                  <div className="badge badge-secondary">+{cart.length}</div>
                </button>
              </Link>
              <a className="btn-xs ml-2 btn-outline btn">
                User: {user?.displayName}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
