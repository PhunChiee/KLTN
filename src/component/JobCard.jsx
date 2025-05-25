import React from 'react';
import userIcon from "@/assets/images/job-user.png";
import linkIcon from "@/assets/images/job-link.png";
import commentIcon from "@/assets/images/job-comment.png";

const JobCard = ({element}) => {
    return (
        <div className="bg-white/90 rounded-lg shadow p-4 border-t-4 border-[#76B7E0] flex flex-col gap-2">
              <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs px-2 py-2 rounded-full text-white ${element.statusColor}`}>{element.status}</span>
              <span className={`text-xs px-2 py-2 rounded-full text-white ${element.priorityColor}`}>{element.priority}</span>
            </div>
              <div className="font-bold text-left text-lg text-gray-700 truncate overflow-hidden whitespace-nowrap max-w-[250px]">{element.title}</div>
              <div className="text-left text-gray-500 text-sm truncate overflow-hidden whitespace-nowrap max-w-[250px]">{element.project}</div>
              <div className="flex justify-between items-center text-xs text-gray-400 mt-2">
                <span>Due: {element.due}</span>
                <div className="flex items-center space-x-2">
                  <img src={userIcon} className="w-4 h-4" alt="User"/>
                  <span>{element.user}</span>
                </div>
              </div>
              <div className="mt-2 flex items-center space-x-4 text-gray-500 text-sm">
                <div className="flex items-center space-x-1">
                  <img src={linkIcon} className="w-4 h-4" alt="Links"/>
                    <span>{ element?.link}</span> {/* Placeholder link count */}
                </div>
                <div className="flex items-center space-x-1">
                  <img src={commentIcon} className="w-4 h-4" alt="Comments"/>
                    <span>{ element?.comment }</span> {/* Placeholder comment count */}
                </div>
              </div>
               <button className="mt-2 border border-[#76B7E0] text-[#76B7E0] rounded-lg px-3 py-2 text-sm font-semibold hover:scale-105 transition-all hover:bg-gray-100">Xem Chi Tiết</button>
            </div>
    );
};

export default JobCard;