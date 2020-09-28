import React from "react";
import Member from "../components/Member";
import "../css/About.css";

function About() {
  return (
    <div className='about'>
      {/* <div className='about__poster'>
        <img src='/deshu.jpg' className='family' />
        <h3>The Deshus</h3>
      </div> */}

      <Member
        name='Manasi'
        img='https://avatars3.githubusercontent.com/u/50344151?s=400&u=2ec129fd589ff5677831b3e0e0613e6a8b29bc0a&v=4'
      />
      <Member
        name='Kaustubh'
        img='https://avatars3.githubusercontent.com/u/29734311?s=460&u=274a33580eb38664d714c0b208536540a9046f30&v=4'
      />
      <Member name='Veena' />
    </div>
  );
}

export default About;
