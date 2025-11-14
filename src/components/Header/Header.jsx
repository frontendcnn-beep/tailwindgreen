import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='shadow-sm py-5'>

            <div className="max-w-7xl mx-auto">
                <nav className="flex items-center justify-between px-4">

                    {/* logo */}
                    <div className="flex items-center gap-0.5">
                        <div>
                            <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/hashtag-large.png" alt="hashtag-large" />
                        </div>

                        <div className="font-yw text-2xl text-logo font-semibold">astbem</div>
                    </div>
                    {/* fim do logo  */}


                    {/* menu central  */}
                    <ul className='flex items-center border-1 border-gray-300 rounded-full text-sm font-semibold shadow-sm'>
                        <li className='px-4'>
                            <NavLink to="/" className="flex items-center gap-2">
                                <img width="26" height="26" src="https://img.icons8.com/emoji/48/bellhop-bell.png" alt="Sineta de mesa" className='block' />
                                <p>Qualquer lugar</p>
                            </NavLink>
                        </li>
                        <li className='px-4 border-x-2 border-gray-200'>
                            <NavLink to="/" >Qualquer dia</NavLink>
                        </li>
                        <li className='py-1 pr-2 pl-4'>
                            <NavLink to="/" className="flex items-center gap-2">
                                <p>
                                    Adicionar serviço
                                </p>
                                <div className='flex items-center justify-center bg-logo text-white p-2 rounded-full h-8 w-8'>
                                    <i class="fa-solid fa-magnifying-glass text-xs"></i>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                    {/* fim do menu central  */}


                    {/* menu do usuário */}
                    <ul className='flex items-center gap-3 border-1 shadow-sm border-gray-300 rounded-full px-3 py-2'>
                        <li>
                            <a>
                                <i className="fa-solid fa-bars text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa-solid fa-circle-user text-2xl"></i>
                            </a>
                        </li>
                        <li>
                            Carlos Nasc
                        </li>
                    </ul>
                    {/* fim do menu usuário  */}
                </nav>
            </div>
        </div>
    )
}

export default Header
