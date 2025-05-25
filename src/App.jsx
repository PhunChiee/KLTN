import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '@/pages/Login';
import Project from '@/pages/Project';
import Job from '@/pages/Job';
import '@/App.css';
import MeetingVideo from '@/pages/MeetingVideo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
        <Route path="/job" element={<Job />} />
        <Route path="/meeting" element={<MeetingVideo/>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
