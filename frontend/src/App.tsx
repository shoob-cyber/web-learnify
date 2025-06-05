import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { StudentHome } from './pages/student/StudentHome';
import { TeacherHome } from './pages/teacher/TeacherHome';
import { ModuleDetail } from './pages/student/ModuleDetail';
import { TeacherDashboard } from './pages/teacher/TeacherDashboard';
import { CurriculumMapping } from './pages/teacher/CurriculumMapping';
import { NotFound } from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/student/module/:id" element={<ModuleDetail />} />
          <Route path="/teacher" element={<TeacherHome />} />
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          <Route path="/teacher/curriculum" element={<CurriculumMapping />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;