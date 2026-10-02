import React, { useEffect } from 'react'
// --------Aos Imp 
import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet, ScrollRestoration } from 'react-router'
import { Navbar } from '../components/common/Navbar';
import { ResNavbar } from '../components/common/ResNavbar';
import Footer from '../components/common/Footer';
import ScrollProgress from '../components/effects/ScrollProgress';

export const LayoutOne = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main id='main-content'>
      <ScrollRestoration />
      <Navbar />
      <ResNavbar />
      <Outlet />
      <ScrollProgress />
      <Footer />
    </main>
  )
}
