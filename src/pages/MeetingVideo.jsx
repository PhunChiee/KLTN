import React, { useState } from 'react';
import DashboardLayout from '../layout/DashboardLayout';
import Button from "../component/Button"
import desktopIcon from "@/assets/images/desktop.png";
import scheduleIcon from "@/assets/images/meeting-schedule.png";
import memberIcon from "@/assets/images/member.png";
import { PiNotePencilDuotone } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import { HiMiniVideoCamera } from "react-icons/hi2";

const MeetingVideo = () => {
  const [activeTab, setActiveTab] = useState(1); // 1: Hiện tại & Sắp tới, 2: Đã kết thúc, 3: Tất cả

  const options = [
    { id: 1, content: 'Hiện tại & Sắp tới' },
    { id: 2, content: 'Đã kết thúc' },
    { id: 3, content: 'Tất cả' },
  ];

  // Placeholder data for meetings
  const meetings = [
    { id: 1, title: 'Daily Standup - Alpha Team', date: 'Sắp diễn ra - 9:00 AM', participants: 5, tag: 'Website Redesign', status: 'upcoming' },
    { id: 2, title: 'Daily Standup - Alpha Team', date: 'Sắp diễn ra - 9:00 AM', participants: 5, tag: 'Website Redesign', status: 'upcoming' },
    { id: 3, title: 'Client Demo - Gamma Project', date: 'Hiện tại - Đang diễn ra', participants: 5, tag: 'API Integration', status: 'live' },
    { id: 4, title: 'Marketing Strategy Meeting', date: 'Sắp diễn ra - Ngày mai, 11:00 AM', participants: 6, tag: 'Marketing Campaign', status: 'upcoming' },
     { id: 5, title: 'Project Retrospective', date: 'Đã kết thúc - 2:00 PM', participants: 8, tag: 'Website Redesign', status: 'ended' },
  ];

  // Filter meetings based on active tab
  const filteredMeetings = meetings.filter(meeting => {
    if (activeTab === 1) return meeting.status === 'upcoming' || meeting.status === 'live';
    if (activeTab === 2) return meeting.status === 'ended';
    return true; // All tab
  });

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
        <h1 className="text-2xl font-bold text-[#76B7E0]">Họp Video</h1>
        <button className="bg-[#76B7E0] text-white px-4 py-2 rounded font-semibold">+ Tạo cuộc họp mới</button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {options.map(elm => (
          <Button
                key={elm.id}
                type="button"
                onClick={() => setActiveTab(elm.id)}
                isActive={activeTab === elm.id}
              >
                {elm.content}
              </Button>
        ))}
      </div>

      {/* Meeting Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 pb-4 xl:grid-cols-3">
        {filteredMeetings.map(meeting => (
          <div key={meeting.id} className="bg-white/80 rounded-xl shadow p-4 flex flex-col gap-3">
            <div className="font-bold text-lg text-left text-gray-700 truncate overflow-hidden whitespace-nowrap max-w-[500px]">{meeting.title}</div>
            <div className="text-sm text-left text-[#7BAEB6] truncate overflow-hidden whitespace-nowrap max-w-[500px] flex items-center space-x-2">
              <img src={scheduleIcon} className="w-6 h-6" />
              <p>{meeting.date}</p>
            </div>
            <div className="flex items-center text-gray-500 text-sm space-x-2">
              {/* Placeholder for participants icon */}
             <img src={memberIcon} className="w-5 h-5" />
              <span>{meeting.participants} người tham gia</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-500">
                 <PiNotePencilDuotone className="w-6 h-6" />
                 <FaRegTrashAlt className="w-5 h-5" />
                <span className="text-xs bg-blue-200 text-blue-800 cursor-pointer px-2 py-2 rounded-full">{meeting.tag}</span>
              </div>
               {meeting.status === 'upcoming' || meeting.status === 'live' ? (
                <button className={`px-4 py-2 rounded-lg font-semibold flex items-center space-x-2 ${meeting.status === 'live' ? 'bg-red-500 text-white hover:bg-red-600/90' : 'bg-[#13CC63] text-white hover:bg-green-500'}`}>
                   <HiMiniVideoCamera className='w-5 h-5'/>
                  <p>{meeting.status === 'live' ? 'Tham gia' : 'Bắt đầu'}</p>
                </button>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Meeting Room Simulation Section */}
      <div className="flex flex-col gap-4 text-[#7BAEB6]">
         <h2 className="text-2xl text-left font-bold text-[#76B7E0]">Giao Diện Phòng Họp (Mô Phỏng)</h2>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Screen Share Area */}
          <div className="flex-1 bg-gray-100/70 rounded-lg flex items-center justify-center text-lg font-semibold p-4" style={{ minHeight: '300px' }}>
             <img src={desktopIcon} className="w-20 h-20" alt="" />
            Khu vực chia sẻ màn hình
          </div>

          {/* Side Area */}
          <div className="flex flex-col gap-4 w-full md:w-64">
            {/* Participant Video */}
            <div className="bg-[#DCDDFA] rounded-lg p-4 flex justify-center items-center text-sm font-medium" style={{ minHeight: '100px' }}>
              Video người tham gia
            </div>
            {/* Chat */}
            <div className="bg-[#DCDDFA] rounded-lg p-4 flex justify-center items-center text-sm font-medium" style={{ minHeight: '150px' }}>
              Chat trong cuộc họp
            </div>
             {/* Controls */}
            <button className="bg-blue-500 hover:bg-blue-600/90 text-white px-4 py-2 rounded font-semibold">Tắt mic</button>
            <button className="bg-red-500 text-white hover:bg-red-600/90 px-4 py-2 rounded font-semibold">Rời phòng</button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MeetingVideo; 