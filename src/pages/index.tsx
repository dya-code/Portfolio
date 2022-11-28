import { Fragment } from 'react'
import Typed from 'react-typed';
import '../styles/wave.css'

import bg from '../images/code.jpeg'
import logo from '../images/logo.png'
import html from '../images/html.png'
import css from '../images/css.png'
import js from '../images/js.png'
import ts from '../images/tslogo.png'
import node from '../images/node.png'
import react from '../images/react.png'
import vue from '../images/vuelogo.png'
import tailwind from '../images/twlogo.png'
import bootstrap from '../images/btstlogo.png'
import dotnet from '../images/dotnet.png'
import python from '../images/pylogo.png'
import unity from '../images/utlogo.png'

import { Title } from '../components/Title'
import { SubTitle } from '../components/SubTitle'
import { Content } from '../components/Content'

const Index = () => {

  return (
    <Fragment>      

      {/* Header */}
      <div className='header'>
        <img className='h-screen w-screen brightness-[0.2] absolute -z-10' src={bg} />
        {/* <img className='logo w-20 m-20 fixed opacity-50' src={logo} /> */}
        <Title>
          <Typed
            strings={[
              "Student Web Developer",
              "Full Stack Developer",
              "I Love Web Development",
            ]}
            typeSpeed={90}
            backSpeed={50}
            backDelay={1900}
            loop
          />
        </Title>
      </div>

      {/* Wave Effect */}
      <div>
        <div className="wave wave1 bg-[url('../images/wave.png')]"></div>
        <div className="wave wave2 bg-[url('../images/wave.png')]"></div>
        <div className="wave wave3 bg-[url('../images/wave.png')]"></div>
        <div className="wave wave4 bg-[url('../images/wave.png')]"></div>
      </div>

      {/* Main */}
      <div className='middle flex items-center flex-col mt-[300px]'>
        <SubTitle>Hello, World!</SubTitle>
        <Content>I am 15 years old Student Web Developer who likes programming and develop something.</Content>
      </div>

      {/* Skills */}
      <div className='skills flex items-center flex-col mt-[300px]'>
        <SubTitle>Skills</SubTitle>
        <div className='flex flex-wrap mr-[200px] ml-[200px]'>
          <img className='w-16 m-5' src={html} />
          <img className='w-16 m-5' src={css} />
          <img className='w-16 m-5' src={js} />
          <img className='w-16 m-5' src={ts} />
          <img className='w-16 m-5' src={node} />
          <img className='w-16 m-5' src={react} />
          <img className='w-16 m-5' src={vue} />
          <img className='w-16 m-5' src={tailwind} />
          <img className='w-16 m-5' src={bootstrap} />
          <img className='w-16 m-5' src={dotnet} />
          <img className='w-16 m-5' src={python} />
          <img className='w-16 m-5' src={unity} />
        </div>

      </div>

    </Fragment>
  )
}

export default Index