import React from 'react';
import memberIcon from "@/assets/images/member.png";

const ProjectCard = ({item}) => {
    return (
        <div className="min-w-[300px] bg-white/90 rounded-lg shadow p-4 border-t-4 border-[#76B7E0] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-2 rounded-full text-white ${item.tagColor}`}>{item.tag}</span>
                </div>
                <div className="truncate text-left font-bold text-lg text-gray-700 whitespace-nowrap max-w-full" title={item.desc}>{item.title}</div>
                <div className="truncate text-left text-gray-500 text-sm whitespace-nowrap max-w-full" title={item.desc}>{item.desc}</div>
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span className="truncate overflow-hidden whitespace-nowrap max-w-[120px]">Bắt đầu: {item.start}</span>
                  <span className="truncate overflow-hidden whitespace-nowrap max-w-[120px]">Kết thúc: {item.end}</span>
                </div>
                <div className="flex items-stretch">
                  <img src={memberIcon} className="w-5 h-5 mt-2 mr-1" />
                  <div className="flex -space-x-2 items-center">
                    {item.member.map((imageUser, index) => (
                      <div key={index} className="w-6 h-6 rounded-full overflow-hidden border-2 border-white translate-y-[2px]">
                        <img src={imageUser} alt="" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-2 border border-[#76B7E0] text-[#76B7E0] rounded-lg px-3 py-2 text-sm font-semibold hover:scale-105 transition-all hover:bg-gray-100">Xem Chi Tiết</button>
        </div>
    );
};

export default ProjectCard;