import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Civil from './pages/Departments/Civil';
import Ec from './pages/Departments/Ec';
import Humanities from './pages/Departments/Humanities';
import Pharmacy from './pages/Departments/Pharmacy';
import Physical from './pages/Departments/Physical';
import Students from './pages/Students';
import Staff from './pages/Staff';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Civil" element={<Civil />} />
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Ec" element={<Ec />} />
        <Route path="/Humanities" element={<Humanities />} />
        <Route path="/Pharmacy" element={<Pharmacy />} />
        <Route path="/Physical" element={<Physical />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
