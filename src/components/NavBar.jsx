/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => setToggle(!toggle)
    return (
        <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative'>
            <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
                <Link to='/'>
                    <div className='flex items-center sm-max:ml-10  xl:ml-10 }'>
                        <img className=' sm:ml-10 md:ml-3' width={50} src="/src/assets/blogger.png" alt="logo" />
                    </div>
                </Link>
                <div className='flex items-center '>
                    <ul className='hidden md:flex'>
                        <li><Link to='/'>StraBlogi</Link></li>
                        <li>Sobre</li>
                        <li>Suporte</li>
                        <li>Orçamento</li>
                    </ul>
                </div>
                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <button className='border-none bg-transparent text-black mr-4'>Entrar</button>
                    <button className='px-8 py-3' >Cadastrar-se</button>
                </div>

                <div onClick={handleClick} id='menu' className='md:hidden'>
                    {
                        !toggle ? <svg className="w-8 h-8 mr-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg> : <svg className='w-10 mr-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z" /> <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" /> </g> </svg>
                    }

                </div>

            </div>
            <ul className={toggle ? 'absolute bg-white w-full px-8 md:hidden' : 'hidden'}>
                <li>Blog</li>
                <li>Sobre</li>
                <li>Suporte</li>
                <li>Orçamento</li>

                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-black mb-4 py-3 px-8'>Entrar</button>
                    <button className='px-8 py-3' >Cadastrar-se</button>
                </div>
            </ul>
        </div>
    )
}

export default NavBar
