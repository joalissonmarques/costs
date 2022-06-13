import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
/* Container From Layout */
import Container from './components/layout/Container'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
        <li>Empresa</li>
        <li>Novo Projeto</li>
      </ul>
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App
