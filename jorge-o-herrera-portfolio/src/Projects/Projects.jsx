import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div>
      <div className='project-div'>

        <div className='project-1'>
          <h2>APB</h2>
          <img className='project-images' src="https://user-images.githubusercontent.com/56912648/137529036-ebea8d81-d70b-4882-8d05-f390e50dcf23.png" alt="APB-project" />
          <p>A full stack app that uses authentication that allows a user to access a page of cars and the category of aftermarket parts. Able to add new cars to the app as well as parts.</p>
          <div className='projects-links'>
            <a className='projects' href="https://github.com/Jherrera1234/APB" target="_blank">View Code</a>
            <a className='projects' href="https://apb-auto.netlify.app/" target="_blank">View Site</a>
          </div>
        </div>

        <div className='project-2'>
          <h2>YSFJ</h2>
          <img className='project-images' src="https://i.imgur.com/J6FcDxZ.png" alt="YSJ-project" />
          <p>A React.jsx app that uses Express to create the backend. The app was also built in a group environment and used a git workflow. This app recreates an e-commerce for glasses experience where it emulates an online shopping experience.</p>
          <div className='projects-links'>
            <a className='projects' href="https://github.com/yeana-dev/YSFJ" target="_blank">View Code</a>
            <a className='projects' href="https://ysfj.netlify.app/" target="_blank">View Site</a>
          </div>
        </div>

        <div className='project-3'>
          <h2>AniTracker</h2>
          <img className='project-images' src="https://i.imgur.com/mv0ttyX.jpeg" alt="AniTracker-project" />
          <p>A React.jsx built website that utilizes an Airtable built api that enables to track what anime they have watched and put it in a genre. The app is full CRUD so the user can delete,edit or create a show to put in the site</p>
          <div className='projects-links'>
            <a className='projects' href="https://github.com/Jherrera1234/AniTracker" target="_blank">View Code</a>
            <a className='projects' href="https://anitrackers.netlify.app/" target="_blank">View Site</a>
          </div>
        </div>

      </div>

    </div>
  )
}
