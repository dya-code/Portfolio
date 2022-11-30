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
import { SubTitleWhite } from '../components/SubTitleWhite'
import { Content } from '../components/Content'

const Index = () => {

  return (
    <Fragment>      

      {/* Header */}
      <div className='header'>
        <img className='h-screen w-screen brightness-[0.2] fixed -z-10' src={bg} />
        <img className='logo w-10 m-10 fixed opacity-50' src={logo} />
        <Title>
          <Typed
            strings={[
              "Student Web Developer",
            ]}
            typeSpeed={90}
            backDelay={1900}
            cursorChar={'_'}
          />
        </Title>
      </div>

      {/* Wave Effect */}
      <div className='relative'>
        <div className="wave wave1 bg-[url('../images/wave.png')]"></div>
        <div className="wave wave2 bg-[url('../images/wave.png')]"></div>
        <div className="wave wave3 bg-[url('../images/wave.png')]"></div>
        <div className="wave wave4 bg-[url('../images/wave.png')]"></div>
      </div>

      {/* Main */}
      <div className='middle flex items-center flex-col bg-white pt-[300px] pb-[300px]'>
        <SubTitle>Hello, World!</SubTitle>
        <Content>I am 15 years old Student Web Developer Boseok Son who likes Web Development.</Content>
      </div>

      {/* Skills */}
      <div className='skills flex items-center flex-col pt-[300px] pb-[300px]'>
        <SubTitleWhite>Skills</SubTitleWhite>
        <div className='flex justify-center flex-wrap'>
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={html} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={css} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={js} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={ts} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={node} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={react} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={vue} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={tailwind} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={bootstrap} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={dotnet} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={python} />
          <img className='w-16 m-5 border-4 border-slate-300 rounded-full' src={unity} />
        </div>
      </div>

      {/* Contact */}
      <div className="contact flex items-center flex-col pt-[300px] pb-[315px] bg-white">
        <SubTitle>Contact</SubTitle>
        <a href="https://github.com/dya-code"><Content>Github</Content></a>
        <a href="https://discord.com/users/884954874943520788"><Content>Discord</Content></a>
      </div>

    </Fragment>
  )
}

export default Index