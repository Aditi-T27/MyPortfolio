"use client"
import React, { JSX } from 'react'
import Project from '@/components/Projects/project';
import GooeyNav1 from '@/components/nav'
import Profile from '@/components/profile_card';
import AboutMe from '@/components/about_Me';
import Education from '@/components/Education/page'
import Email from '@/functions/email'
import Footer from '@/components/footer/footer'
export default function MainPage(): JSX.Element {

  return (

    <div className="h-auto w-full" >

  <br />
      <div className='flex  w-full sticky top-0 z-50' >
       
        <div className=" flex justify-end rounded-md ml-auto " >
          <GooeyNav1 items={[
            { label: "Home", href: "#home" },
            { label: "Projects", href: "#Projects" },
            { label: "Education", href: "#Education" },
            { label: "Contact", href: "#Contact" }

          ]} />
        </div>
      </div>
      <div id="home" className='h-auto w-full md:flex '>
        <Profile />
        <AboutMe />
      </div>
      <div  id="Projects" className='flex justify-center ml-auto w-full scroll-mt-24'>
        <Project />
      </div>
      <div id="Education" style={{}}>
        <Education/>
      </div>
      <div id="Contact">
        <Email/>
      </div>
      <div>
        <Footer/>
      </div>
      <div>
      </div>
    </div>

  );
}


