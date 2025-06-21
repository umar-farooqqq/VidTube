import React from 'react'
import Signup from './pages/Signup'
import Home from './pages/home'
import Video from './pages/Video'
import { Routes, Route } from 'react-router'

const App = () => {
  return (  
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video/:id' element={<Video/>} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
    
  )
}

export default App