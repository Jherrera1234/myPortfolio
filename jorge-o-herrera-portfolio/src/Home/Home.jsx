import React from 'react'
import './Home.css'

export default function Home() {

  return (
    <div>
      <div className='home-div'>
        <h1 className='name'> Hello my name is Jorge Herrera </h1>

        <div className='bio-div'>
          <h2 className='headers'>About Me: </h2>
          <p className='pargraph-bio'> I am a full stack developer with experience in React.js, Express/MongoDb and Ruby On Rails. I have an strong desire to learn and always able to adapt to any situation.I am also a Mechanical Engineering graduate from Northern Illinois University. I hope that I can integrate my problem-solving skills into any software developer environment. I also  have experience in customer service working in retail at Home Depot and Domino's Pizza. During July 2021 I went through the General Assembly Software Engineering Immersive and learned various new coding languages in addition to previous languages that I have learned. I learned how to create various projects using Recat.js and two different backend languages and databases involving MongoDB, Express, PostSQL and Ruby on Rails. I came out of every unit and project learning something every day. I hope to keep this experience going at  a tech company and grow as a developer. </p>
          <div className='resume'>
            <a className='resume-link' href='https://docs.google.com/document/d/1cbdk2vUowEOXL5Pk74h-UC1GfWmshlb3cFYarxnwynY/edit#'>Resume</a>
          </div>
          <div className='skills-div'>
            <h2 className='headers'>Skills</h2>
            <p>     I currently thoroughly know or am familar with these programming languages and softwares:</p>
            <ul className='skills-list'>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>C++</li>
              <li>C#</li>
              <li>MATLAB</li>
              <li>Unity/Unity3D</li>
            </ul>
            <div className='img-class'>
              <img id='images-code' className='html' src="https://i.imgur.com/pAVaoyK.png" />
              <img id='images-code' className='css' src="https://i.imgur.com/se5PrO1.png" />
              <img id='images-code' className='javascript' src="https://i.imgur.com/FxHBn8X.png" />
              <img id='images-code' className='node.js' src='https://i.imgur.com/QyxPPuX.png' />
              <img id='images-code' className='react' src="https://i.imgur.com/FcEWO1m.png" alt="react" />
              <img id='images-code' className='express' src="https://i.imgur.com/nbvnDk7.png" alt="express" />
              <img id='images-code' className='mongoose' src="https://i.imgur.com/R3xaOWG.png" />
              <img id='images-code' className='ruby' src="https://i.imgur.com/iUbB2Tb.png" alt="" />
              <img id='images-code' className='ruby-rails' src="https://i.imgur.com/GrMM2H6.png" />
              <img id='images-code' className='postgresql' src="https://i.imgur.com/8y3BmZW.png" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
