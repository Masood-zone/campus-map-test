import React from "react";
import SearchBar from "./SearchBar";
import { NAV_LINKS_DATA, USER_NAV_LINKS } from "./data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex-1 gap-3">
        <Link to="/" className="text-xl max-[999px]:hidden">
          AAMUSTED Campus Map
        </Link>
        <div className="">
          <SearchBar />
        </div>
        <div className="flex max-[999px]:hidden">
          {NAV_LINKS_DATA.map((links) => {
            return (
              <button className="btn btn-ghost flex flex-col items-center">
                <span className="text-xl">{links.icon}</span>
                <span className="text-xs font-light capitalize">
                  <Link to={links.path}>{links.label}</Link>
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex-none">
        <div className="max-lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full bg-slate-200">
                <img
                  src="https://source.unsplash.com/80x80?face"
                  alt="Profile"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu-sm dropdown-content bg-[#902D41] text-white w-64 rounded-md "
            >
              {USER_NAV_LINKS.map((user) => {
                return (
                  <li className="py-2 hover:bg-[#512D38] rounded text-lg hover:cursor-pointer">
                    <Link to={user.path}>{user.label}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* Tablet and mobile screens */}
      </div>
    </>
  );
};

export default Navbar;
