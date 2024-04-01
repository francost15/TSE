import Image from "next/image";
import Link from "next/link";
import 'animate.css';

export const metadata = {
    title: 'Inicio Ts',
    description: 'Pagina inicio',
};

export default function HomePage() {
    return (
        <div className="relative isolate px-6  lg:px-8 animate__animated animate__fadeIn">
            <div className="mx-auto max-w-2xl py-8 sm:py-16 lg:py-20 animate__animated animate__fadeIn">
                <div className="text-center">
                    <div className="relative animate__animated animate__fadeIn">
                        <Image src="/assets/logom.png" alt="Imagen descriptiva" width={500} height={300} className="mx-auto rounded-lg " />                        
                        <h1 className="text-4xl sm:text-5xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:text-6xl lg:text-7xl md:mt-2 animate__animated animate__fadeIn">
                            <span className="inline md:block">Telesecundaria Lázaro Cárdenas del Río</span>
                            <br className="md:hidden" />
                            <span className="mt-2 pt-4 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-cyan-400 to-gray-800 md:inline-block animate__animated animate__fadeIn">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-cyan-400 to-gray-800">Bienvenidos</span>
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-700 animate__animated animate__fadeIn">Descubre el talento y la creatividad de nuestros estudiantes en la Feria de Proyectos de Integración Comunitaria.</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 animate__animated animate__slideInUp">
                        <Link href="/evento">
                            <button className="relative group overflow-hidden px-6 h-12 rounded-full flex space-x-2 items-center bg-gradient-to-r from-blue-700 to-cyan-500 hover:to-cyan-700">
                                <span className="relative text-xs sm:text-sm text-white">Conoce el Evento</span>
                                <div className="flex items-center -space-x-3 translate-x-3">
                                    <div className="w-2.5 h-[1.6px] rounded bg-white origin-left scale-x-0 transition duration-300 group-hover:scale-x-100"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-white -translate-x-2 transition duration-300 group-hover:translate-x-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </Link>
                            <Link href="/comunidad" className="text-sm font-semibold leading-6 text-gray-900">Conoce a la comunidad<span aria-hidden="true"> →</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}