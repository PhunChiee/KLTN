import React from "react";
import { NavLink } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Routes from '../config/routers';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-200 flex flex-col h-screen overflow-hidden">
      <DashboardHeader />
      <div className="flex flex-row flex-1 min-h-0">
        <aside className="hidden md:flex flex-col w-56 bg-white/70 py-4 h-full overflow-y-auto scrollbar-custom">
            <nav className="flex flex-col gap-y-[1px] h-full">
                {
                    Routes.map((element) => (
                         <NavLink
                            key={element.id}
                            to={element.router}
                            className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-[20px] rounded transition-colors duration-200 ${
                                isActive
                                    ? 'bg-[#e3f1fd] text-[#76B7E0] font-semibold'
                                    : 'hover:bg-[#e3f1fd] text-gray-600'
                                }`
                            }
                            >
                            <img
                                src={element.icon}
                                title={element.name}
                                className="w-[22px] h-[22px] object-contain"
                            />
                            <span className="text-sm no-underline">{element.name}</span>
                        </NavLink>
                    ))
                }
          </nav>
        </aside>
        <main className="flex-1 flex flex-col">
            <div className="w-full flex flex-col flex-1 min-h-0 overflow-y-scroll scrollbar-custom p-4">
                {children}
            </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
