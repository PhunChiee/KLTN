import React from "react";
import DashboardLayout from '../layout/DashboardLayout';
import filterIcon from "@/assets/images/filter.png";
import JobCard from "../component/JobCard";
import Button from "../component/Button";


const jobs = [
  { title: 'Thiết kế trang chủ mới', project: 'Website Redesign', link:12, comment: 35, priority: 'High Priority', priorityColor: 'bg-red-400', status: 'In Progress', statusColor: 'bg-blue-400', user: 'Alice', due: '20/05/2025' },
  { title: 'Phát triển API User', project: 'Mobile App Development', link:14, comment: 15, priority: 'Medium Priority', priorityColor: 'bg-yellow-400', status: 'To Do', statusColor: 'bg-yellow-400', user: 'Bob', due: '20/05/2025' },
  { title: 'Kiểm thử module thanh toán', project: 'API Integration', link:32, comment: 105, priority: 'High Priority', priorityColor: 'bg-red-400', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '20/05/2025' },
  { title: 'Tối ưu SEO on-page', project: 'Website Redesign', link:120, comment: 350, priority: 'High Priority', priorityColor: 'bg-red-400', status: 'Done', statusColor: 'bg-green-400', user: 'pchil', due: '01/05/2025' },
  { title: 'Viết nội dung blog', project: 'Marketing Campaign', link:28, comment: 75, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Done', statusColor: 'bg-green-400', user: 'pchil', due: '15/05/2025' },
  { title: 'Thiết kế UI/UX', project: 'Mobile App Development', link:49, comment: 57, priority: 'High Priority', priorityColor: 'bg-red-400', status: 'To Do', statusColor: 'bg-yellow-400', user: 'Alice', due: '25/05/2025' },
  { title: 'Code Frontend', project: 'Website Redesign', link:17, comment: 59, priority: 'Medium Priority', priorityColor: 'bg-yellow-400', status: 'In Progress', statusColor: 'bg-blue-400', user: 'Bob', due: '10/06/2025' },
  { title: 'Kiểm thử API', project: 'API Integration', link:19, comment: 355, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '05/07/2025' },
  { title: 'Kiểm thử API', project: 'API Integration', link:19, comment: 355, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '05/07/2025' },
  { title: 'Kiểm thử API', project: 'API Integration', link:19, comment: 355, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '05/07/2025' },
  { title: 'Kiểm thử API', project: 'API Integration', link:19, comment: 355, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '05/07/2025' },
  { title: 'Kiểm thử API', project: 'API Integration', link:19, comment: 355, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '05/07/2025' },
  { title: 'Kiểm thử API', project: 'API Integration', link:19, comment: 355, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '05/07/2025' },
  { title: 'Kiểm thử API', project: 'API Integration', link:19, comment: 355, priority: 'Low Priority', priorityColor: 'bg-green-300', status: 'Review', statusColor: 'bg-purple-400', user: 'Cherry', due: '05/07/2025' },
];

const options = [
  {
    id: 1,
    content: "Danh sách",
  },
  {
    id: 2,
    content: "Bảng Kanban",
  },
  {
    id: 3,
    content: "Lịch",
  }
];

const statusTextColorMap = {
  'To Do': 'text-yellow-400',
  'In Progress': 'text-blue-400',
  'Review': 'text-purple-400',
  'Done': 'text-green-400',
};

const Job = () => {
  const [activeTab, setActiveTab] = React.useState(1); // 1 for List, 2 for Kanban

  const statuses = ['To Do', 'In Progress', 'Review', 'Done'];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col gap-2 mb-6 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold text-[#76B7E0]">Quản Lý Công Việc</h1>
        <button className="bg-[#76B7E0] text-white px-4 py-2 rounded font-semibold">+ Tạo công việc mới</button>
      </div>
      {/* Filter */}
      <div className="flex flex-col gap-2 mb-4 md:flex-row">
        <input className="w-full px-4 py-2 border border-gray-200 rounded bg-white/80 focus:outline-none md:w-64" placeholder="Tìm kiếm công việc" />
        <div className="flex flex-col gap-3 md:flex-row">
          <select className="rounded-lg bg-white/90 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#76B7E0] focus:border-[#76B7E0] transition-all w-full md:w-48 text-sm text-gray-700">
            <option>Tất cả dự án</option>
            <option>Dự án website</option>
            <option>Dự án API</option>
            <option>Dự án kiểm thử</option>
          </select>

          <select className="rounded-lg bg-white/90 px-4 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#76B7E0] focus:border-[#76B7E0] transition-all w-full md:w-48 text-sm text-gray-700">
            <option>Trạng thái</option>
            <option>Đang hoạt động</option>
            <option>Ngưng hoạt động</option>
          </select>
      </div>
          <button className="bg-white/80 border border-gray-200 px-4 py-2 rounded-lg text-gray-700 flex items-center bg-[#76B7E0]" type="button">
            <img src={filterIcon} className="w-6 h-6"/>
            <p>Áp dụng bộ lọc</p>
          </button>
      </div>
      {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {/* Updated tabs to include active state styling */}
          {options.map((elm) => (
              <Button
                key={elm.id}
                type="button"
                onClick={() => setActiveTab(elm.id)}
                isActive={activeTab === elm.id}
                className={`px-4 py-2 rounded-t ${activeTab === elm.id ? 'bg-white/80 font-semibold text-[#76B7E0] border-b-2 border-[#76B7E0]' : 'bg-white/80 text-gray-500'}`}
              >
                {elm.content}
              </Button>
            ))
          }
        </div>

      {/* Content based on active tab */}
      {activeTab === 1 && (
        // List View
        <div className="grid grid-cols-1 gap-4 pb-4 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobs.map((j, i) => (
            <JobCard element={j} key={i}/>
          ))}
        </div>
      )}

      {activeTab === 2 && (
        // Kanban View
        <div className="grid grid-cols-1 gap-4 pb-4 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {statuses.map((status) => (
            <div key={status} className="flex-shrink-0 w-full min-w-[300px] flex flex-col gap-4 bg-white/70 max-h-[620px] rounded-lg p-4 overflow-y-scroll">
              {/* Column Header */}
              <div className="flex items-center justify-between">
                <h3 className={`font-bold text-lg ${statusTextColorMap[status] || 'text-gray-700'}`}>
                  {status}
                </h3>
                <span className="text-base font-semibold text-gray-500">{jobs.filter(j => j.status === status).length}</span>
              </div>
              {/* Job Cards in Column */}
              <div className="flex flex-col gap-3 pr-2 overflow-y-auto scrollbar-custom">
                {jobs.filter(j => j.status === status).map((j, i) => (
                  <JobCard element={j} key={i} />
                 ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default Job; 