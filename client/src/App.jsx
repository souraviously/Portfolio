import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { LayoutOne } from './layout/LayoutOne'
import { RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify'
import SmoothScroll from './components/utils/SmoothScroll'
import PreloaderWrapper from './components/utils/PreloaderWrapper'
import AdminLayout from './layout/AdminLayout'
import AdminAdd from './pages/AdminAdd'
import AdminCategory from './pages/AdminCategory'
import Cursor from './components/Cursor'
import AdminSkills from './pages/AdminSkills'
import AdminLogin from './pages/AdminLogin'
import AdminMessages from './pages/AdminMessages'

export const App = () => {
  // ---------------Routing 
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route index element={<AdminAdd />}></Route>
        <Route path='category' element={<AdminCategory />}></Route>
        <Route path='skills' element={<AdminSkills />}></Route>
        <Route path='messages' element={<AdminMessages />}></Route>
      </Route>

      <Route path='/admin/login' element={<AdminLogin />}></Route>
    </Route>
  ))


  return (
    <>
      <SmoothScroll>

        <PreloaderWrapper>
          <Cursor />
          <RouterProvider router={MyRoute} />
        </PreloaderWrapper>

        <Analytics />
        <ToastContainer />

      </SmoothScroll>
    </>
  )
}

export default App
