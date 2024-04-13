import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import Register from './components/Auth/Register';
import TeacherRegister from './components/Auth/teacherRegister';
import Profile from './pages/Profile';
import DashboardLayout from './pages/DashboardLayout';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      {window.location.pathname !== '/layout' && (
        <>
          <Header />
          <Footer />
        </>
      )}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher" element={<TeacherRegister />} />
        <Route path="/layout" element={<DashboardLayout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
