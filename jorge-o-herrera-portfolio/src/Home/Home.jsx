import React from 'react'
import './Home.css'
import { Icon } from '@iconify/react';

export default function Home() {

  return (
    <div>
      <div className='home-div'>
        <h1 className='name'> Hello my name is Jorge Herrera </h1>

        <div className='bio-div'>
          <h2 className='headers'>About Me: </h2>
          <p className='pargraph-bio'> I am a Software Engineer graduate from Genereal Assembly with experience in React.js, Express/MongoDb and Ruby On Rails. I have an strong desire to learn and always able to adapt to any situation. I came out of every unit and project learning something every day. I hope to keep this experience going at  a tech company and grow as a developer. I am also a Mechanical Engineering graduate from Northern Illinois University. I hope that I can integrate my problem-solving skills into any software developer environment. I also  have experience in customer service working in retail at Home Depot and Domino's Pizza. </p>
          <div className='resume'>

            <a className='resume-link' href='https://drive.google.com/file/d/1PiK1vfIBtMco0r9XHUPIzlcZ5B2wxONw/view?usp=sharing'>Click to get my Resume</a>
            <div className='links-to'>
              <a href='https://github.com/Jherrera1234/'><Icon className='icons' icon="bi:github" width="50" height="50" /></a>
              <br />
              <a href='https://www.linkedin.com/in/jorge-o-herrera-/' ><Icon className='icons' icon="bi:linkedin" width="50" height="50" /></a>
            </div>
          </div>
          <div className='skills-div'>
            <h2 className='headers'>Skills</h2>
            <p className='info-p'> I currently thoroughly know or am familar with these programming languages and softwares:</p>
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
              <Icon className='icons' icon="akar-icons:html-fill" color="orange" width="100" height="100" />
              <Icon className='icons' icon="akar-icons:css-fill" color="blue" width="100" height="100" />
              <Icon className='icons' icon="tabler:brand-javascript" color='yellow' width="100" height="100" />
              <Icon className='icons' icon="logos:nodejs" color="blue" width="100" height="100" />
              <Icon className='icons' icon="akar-icons:react-fill" color="lightblue" width="100" height="100" />
              <Icon className='icons' icon="logos:express" width="100" height="100" />
              <Icon className='icons' icon="simple-icons:mongodb" color="green" width="100" height="100" />
              <Icon className='icons' icon="mdi:language-ruby" color="red" width="100" height="100" />
              <Icon className='icons' icon="simple-icons:rubyonrails" color="red" width="100" height="100" />
              <Icon className='icons' icon="cib:postgresql" color="blue" width="100" height="100" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
