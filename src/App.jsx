import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavbarComponent from './Components/NavbarComp'
import Landing from './Pages/Landing'
import About from './Pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FooterComp from './Components/Footer'
import Skills from './Pages/Skills'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <div className="align-content-center overflow-scroll" style={ {height: '80%' } }>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
        <div className="align-content-end" style={ {height: '10%' }}><FooterComp /></div>
      </BrowserRouter>
    </>
  );
}

export default App
 