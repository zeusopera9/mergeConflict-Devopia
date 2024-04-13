import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth'; 
import Register from './components/Auth/Register';
import TeacherRegister from './components/Auth/teacherRegister';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/register' element={<Register/>}/>
          <Route path='/teacher' element={<TeacherRegister/>}/>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
