import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth'; 
import Header from './components/Landing/Header';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Auth />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
