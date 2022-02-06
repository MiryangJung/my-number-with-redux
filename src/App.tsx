import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Add from './pages/Add'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add/:num" element={<Add />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
