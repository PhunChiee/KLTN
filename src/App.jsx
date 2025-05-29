import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Project from '@/pages/Project';
import Job from '@/pages/Job';
import MeetingVideo from '@/pages/MeetingVideo';
import Calendar from '@/pages/Calendar';
import Chat from '@/pages/Chat';
import '@/App.css';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/job" element={<Job />} />
        <Route path="/meeting" element={<MeetingVideo/>} />
        <Route path="/calendar" element={<Calendar/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
