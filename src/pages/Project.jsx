import React from "react";
import DashboardLayout from '../layout/DashboardLayout';
import chartIcon from "@/assets/images/chart.png";
import listIcon from "@/assets/images/list.png";
import kanbanIcon from "@/assets/images/kanban.png";
import ProjectCard from "../component/ProjectCard";
import Button from "../component/Button";

const originalProjects = [
  { id: 1, title: 'Website Redesign', status: 'In Progress', desc: 'Revamp the corporate website with modern UI/UX.', tag: 'In Progress', tagColor: 'bg-blue-400', start: '30/04/2025', end: '30/07/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 2, title: 'Website Redesign', status: 'To Do', desc: 'Revamp the corporate website with modern UI/UX.', tag: 'To Do', tagColor: 'bg-yellow-400', start: '30/04/2025', end: '30/07/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 3, title: 'API Integration', status: 'Review', desc: 'Integrate third-party APIs for new features.', tag: 'Review', tagColor: 'bg-purple-400', start: '15/04/2025', end: '15/07/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 4, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 5, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 6, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 7, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 8, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 9, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 10, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
  { id: 11, title: 'Marketing Campaign', status: 'Success', desc: 'Launch Q3 marketing campaign.', tag: 'Success', tagColor: 'bg-green-400', start: '20/03/2025', end: '20/06/2025', member: ["https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/11/tai-hinh-nen-dep-mien-phi.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/1-1512755474911.jpg", "https://statictuoitre.mediacdn.vn/thumb_w/730/2017/4-1512755474929.jpg"] },
]

const options = [
  {
    id: 1,
    content: "Tất cả",
    filter: "", // sau này muốn lọc
  },
  {
    id: 2,
    content: "Đang thực hiện",
    filter: "", // sau này muốn lọc
  },
  {
    id: 3,
    content: "Cần xem xét",
    filter: "", // sau này muốn lọc
  },
  {
    id: 4,
    content: "Hoàn thành",
    filter: "", // sau này muốn lọc
  }
]

const footerItems = [
  {
    id: 1,
    content: "Bảng Kanban",
    icon: kanbanIcon,
    description: "Trực quan hóa công việc theo trạng thái"
  },
  {
    id: 2,
    content: "Danh sách công việc",
    icon: listIcon,
    description: "Xem chi tiết công việc trong dự án"
  },
  {
    id: 3,
    content: "Biểu đồ Gantt",
    icon: chartIcon,
    description: "Theo dõi tiến độ và phụ thuộc vào công việc"
  },
]

const Project = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <DashboardLayout>
      {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
          <h1 className="text-2xl font-bold text-[#76B7E0]">Quản Lý Dự Án</h1>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 mb-4">
          {
            options.map((elm) => (
              <Button
                key={elm.id}
                type="button"
                onClick={() => setActiveTab(elm.id)}
                isActive={activeTab === elm.id}
              >
                {elm.content}
              </Button>
            ))
          }
        </div>
        {/* Project Cards */}
         <div className="flex-1 pr-1">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 pb-4 xl:grid-cols-4">
            {originalProjects.map((p, i) => (
              <ProjectCard item={p} key={p.id}></ProjectCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {footerItems.map((elm) => (
            <div key={elm.id} className="bg-white/70 rounded-lg p-4 flex flex-col items-center space-y-1">
                <div className="flex items-end space-x-1">
                    <img src={elm.icon} className="w-8 h-8"/>
                    <p className="font-semibold text-[#76B7E0] text-2xl">{ elm.content}</p>
                </div>
                <div className="text-gray-400 text-xs text-center">{ elm.description}</div>
              </div>
            ))}
            </div>
        </div>
        {/* Other Views */}
    </DashboardLayout>
  );
};

export default Project; 