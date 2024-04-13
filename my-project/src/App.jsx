import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth'; 
import Register from './components/Auth/Register';
import TeacherRegister from './components/Auth/TeacherRegister';
import Header from './components/Global/Header';
import Footer from './components/Global/Footer';

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
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App;
