import React from "react";
import mainLogo from '@/assets/images/main.png'; // Assuming this is the logo

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 p-2 flex items-center justify-between shadow-sm bg-blur">
      <div className="flex w-1/3 items-center gap-4">
        {/* Logo */}
        <div className="w-[57px] h-[57px]">
          <img src={mainLogo} alt="PCollab Logo" className="w-full h-full" />
        </div>
        {/* Search Bar */}
        <div className="relative flex-1 hidden md:block">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full rounded-full bg-gray-200/60 pl-10 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-300"
          />
          {/* Search Icon - Placeholder */}
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>
      {/* Right Icons and User Info */}
      <div className="flex items-center gap-4">
        {/* Notification Icon - Placeholder */}
        <div className="relative">
            <svg className="w-7 h-7 text-gray-600 cursor-pointer hover:text-[#76B7E0]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.373 6.364 6 8.352 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"></path></svg>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </div>
        {/* User Info */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">U</div> {/* Placeholder User Icon/Avatar */}
          <span className="hidden md:block text-gray-700">pchii</span>
          {/* Dropdown Icon - Placeholder */}
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader; 