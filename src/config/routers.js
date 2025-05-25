import dashboardIcon from "@/assets/images/dasboard.png";
import projectIcon from "@/assets/images/project.png";
import jobIcon from "@/assets/images/job.png";
import meetingVideoIcon from "@/assets/images/meeting-video.png";
import calendarIcon from "@/assets/images/calendar.png";
import conversationIcon from "@/assets/images/conversation.png";
import documentIcon from "@/assets/images/document.png";
import settingIcon from "@/assets/images/setting.png";
import logoutIcon from "@/assets/images/logout.png";

// Define routes with imported icons
const Routes = [
  { id: 1, router: "/dashboard", name: "Dashboard", icon: dashboardIcon },
  { id: 2, router: "/project", name: "Dự án", icon: projectIcon },
  { id: 3, router: "/job", name: "Công việc", icon: jobIcon },
  { id: 4, router: "/meeting", name: "Họp video", icon: meetingVideoIcon },
  { id: 5, router: "/calendar", name: "Lịch trình", icon: calendarIcon },
  { id: 6, router: "/chat", name: "Tin nhắn", icon: conversationIcon },
  { id: 7, router: "/documents", name: "Tài liệu", icon: documentIcon },
  { id: 8, router: "/settings", name: "Cài đặt", icon: settingIcon },
  { id: 9, router: "/logout", name: "Đăng xuất", icon: logoutIcon },
];

export default Routes