import React from 'react'
import ReactDOM from 'react-dom/client'
import "./utils/style/main.scss"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Error from './components/Error'
import Header from './components/Header'
import About from './pages/About'
import Sheet from './pages/Sheet'
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/housing_sheet/:id' element={<Sheet />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
