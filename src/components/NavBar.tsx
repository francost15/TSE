"use client"
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900 ">
            <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                <div className="flex flex-row items-center justify-between p-4">
                {/* Inicio aqui podra ir un icono */}
                <Link href="/main" className="flex items-center text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                    <Image className="mt-3" src={"/assets/ts.png"} alt={"comunidad"} width={100} height={100} />
                        <span className="ml-3 font-light ">Lázaro Cárdenas del Río</span>
                </Link>
                <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={toggleMenu}>
                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                    {isOpen ? (
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    ) : (
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    )}
                    </svg>
                    MENU
                </button>
                </div>
                <nav className={`flex-col flex-grow pb-4 md:pb-0 ${isOpen ? 'flex' : 'hidden'} md:flex md:justify-end md:flex-row`}> 
                <Link onClick={toggleMenu} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-600 focus:bg-blue-300 focus:outline-none focus:shadow-outline" href="/main">Inicio</Link>
                <Link onClick={toggleMenu} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-600 focus:bg-blue-300 focus:outline-none focus:shadow-outline" href="/comunidad">Comunidad</Link>
                <Link onClick={toggleMenu} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-600 focus:bg-blue-300 focus:outline-none focus:shadow-outline" href="/evento">Evento</Link>
                <Link onClick={toggleMenu} className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-blue-600 dark-mode:focus:bg-blue-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-blue-600 focus:bg-blue-300 focus:outline-none focus:shadow-outline" href="/patrocinadores">Benefactores</Link>
                </nav>
            </div>
            </div>
        </div>
        </div>
    )
}