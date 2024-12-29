import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Features from './components/Features'
import Video from './components/Video'
import Crafted from './components/Crafted'
import Bug from './components/Bug'
import Blog from './components/Blog'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Features/>
      <Video/>
      <Crafted/>
      <Bug/>
      <Blog/>
      <Contact/>
  
      
    </div>
  )
}

export default App
