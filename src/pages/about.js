import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Team from '../components/team'
import Donate from '../components/donate'

export default function About() {
    return(
        <>
        <div className="relative bg-green-200">
        <div
          className="absolute inset-0 blur-xl h-[580px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>
        <div className="relative">
        <Donate/>
        <Navbar/>
        <Team/>
        </div>
      </div>
      <Footer />
        </>
    )
}