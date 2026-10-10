import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import Area from './pages/Area/Area'
import { Teacher } from './pages/Teacher/Teacher'
import Course from './pages/Course/Course'
import { Apprentice } from './pages/Apprentice/Apprentice'
import { TrainingCenter } from './pages/TrainingCenter/TrainingCenter'
import { Computer } from './pages/Computer/Computer'
import { Client } from './pages/Client/Client'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/area" element={<Area/>}/>
        <Route path="/area/create" element={<Area/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/teacher/create" element={<Teacher/>}/>
        <Route path="/course" element={<Course/>}/>
        <Route path="/course/create" element={<Course/>}/>
        <Route path="/apprentice" element={<Apprentice/>}/>
        <Route path="/apprentice/create" element={<Apprentice/>}/>
        <Route path="/trainingcenter" element={<TrainingCenter/>}/>
        <Route path="/trainingcenter/create" element={<TrainingCenter/>}/>
        <Route path="/computer" element={<Computer/>}/>
        <Route path="/computer/create" element={<Computer/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="/client/create" element={<Client/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
