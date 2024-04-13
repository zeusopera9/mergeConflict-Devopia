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
import Quiz from './pages/Quiz';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
        <Route path="/teacher" element={<TeacherRegister />} />
        <Route path="/layout" element={<DashboardLayout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
      {window.location.pathname !== '/layout' && (
        <>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
