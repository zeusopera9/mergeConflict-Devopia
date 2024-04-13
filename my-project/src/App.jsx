import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth'; 
import Register from './components/Auth/Register';
import Header from './components/Landing/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
