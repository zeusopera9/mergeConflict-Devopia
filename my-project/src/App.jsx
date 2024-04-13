import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth'; 
import Register from './components/Auth/Register';
import TeacherRegister from './components/Auth/teacherRegister';
import Dashboard from './pages/Dashboard'
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';
import Dashboard from './pages/Dashboard';

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
<<<<<<< HEAD
          <Route path='/dashboard' element={<Dashboard />} />
=======
          <Route path='/dashboard' element={<Dashboard/>}/>
>>>>>>> fb725874ea68e1d7713ac533d6ccb5f9d062f410
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
