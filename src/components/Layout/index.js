import React from "react";
import Navbar from "../navbar";
import { HiMenu } from "react-icons/hi";
import { NAV_LINKS_DATA } from "../navbar/data";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        {/* Navbar */}
        <div className="drawer-content flex flex-col">
          <div className="navbar bg-[#902D41] text-white sticky">
            <Navbar />
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <HiMenu fontSize={24} />
              </label>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>
        {/* Sidebar */}
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* Sidebar content here */}
          <div className="menu p-3 w-80 max-[399px]:w-52 min-h-full bg-base-200 flex flex-col">
            <h1 className="text-xl max-[399px]:text-sm my-2">
              AAMSUTED Campus Map
            </h1>
            <div className="flex-1 mt-10">
              {NAV_LINKS_DATA.map((links) => {
                return (
                  <Link
                    to={links.path}
                    className="flex gap-4 w-62 h-14 hover:cursor-pointer hover:bg-neutral-300 text-lg my-2 items-center px-2 active:bg-neutral-500 transition duration-200 rounded"
                  >
                    {links.icon}

                    {links.label}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col">
              <p>Content</p>
              <p>Content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
