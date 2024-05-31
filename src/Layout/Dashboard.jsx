import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaBarcode,
  FaCalendar,
  FaHome,
  FaList,
  FaOpencart,
  FaPhone,
  FaPlus,
  FaStar,
  FaUser,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import { FaBookBookmark, FaSpoon, FaSquareParking } from "react-icons/fa6";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  console.log("Dashboard called");
  console.log(isAdmin);
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome />
                  ADMIN HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaPlus />
                  ADD ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "Purple" : "inherit",
                  })}
                  to="/dashboard/manageItems"
                >
                  <FaList />
                  MANAGE ITEMS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBookBookmark />
                  MANAGE BOOKINGS
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUser />
                  ALL USERS
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome />
                  USER HOME
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar />
                  RESERVATION
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? "Purple" : "inherit",
                  })}
                  to="/dashboard/cart"
                >
                  <FaOpencart />
                  MY CART ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaStar />
                  REVIEW
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList />
                  MY BOOKINGS
                </NavLink>
              </li>
            </>
          )}

          <div className="divider">OR</div>
          <li>
            <NavLink to="/">
              <FaHome />
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaPhone />
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaBarcode />
              MENU
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
