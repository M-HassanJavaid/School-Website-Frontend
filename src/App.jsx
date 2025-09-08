
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { useEffect } from 'react'
import gsap from 'gsap'
//Components
import Navbar from './components/Navbar/Navbar.jsx'
import Home from "./components/Home/Home.jsx"
import PrincipleMessage from './components/PrincipalMessage/PrincipleMessage.jsx'
import WhyUS from './components/WhyUS/WhyUS.jsx'
import InfiniteScrollingText from './components/InfiniteScrollingText/InfiniteScrollingText.jsx'
import Campuses from './components/campuses/campuses.jsx'
import ContactUs from './components/contactUs/contactUs.jsx'
import Footer from './components/footer/Footer.jsx'
import AdmissionForm from './components/admissionForm/AdmissionForm.jsx'

function App() {




  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Home />
          <PrincipleMessage />
          <InfiniteScrollingText />
          <WhyUS />
          <Footer />
        </>
      )
    },
    {
      path: '/contactUs',
      element: (
        <>
          <Navbar />
          <ContactUs />
          <Footer />
        </>
      )
    },
    {
      path: '/admissionForm',
      element: (
        <>
          <Navbar />
          <AdmissionForm />
          <Footer/>
        </>
      )
    },
    {
      path: '/campuses',
      element: (
        <>
        <Navbar/>
        <Campuses/>
        <Footer/>
        </>
      )
    }
  ]);

  return <RouterProvider router={router} />

}

export default App
