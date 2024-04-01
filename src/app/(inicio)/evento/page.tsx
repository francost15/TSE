import dynamic from 'next/dynamic';
import 'animate.css';

export const metadata = {
    title: 'Evento Ts',
    description: 'Pagina de evento',
};

const ImagenesComponent = dynamic(() => import('./ImagenesComponents'), { ssr: false });

export default function EventoPage () {
    return (
        <div className="flex flex-col items-center justify-center mt-12">
        <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-7xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">
            <span className="inline md:block">Concurso y feria educativa de los</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-rose-500 md:inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-rose-500"> Proyectos comunitarios</span>
            </span>
        </h1>
            <div className='mt-6 animate__animated animate__fadeIn'>
                <ImagenesComponent/>
            </div>
            <div className='mt-6'>
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">            
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-400 to-green-400 md:inline-block">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-400 to-green-400">Propósito de los Proyectos Comunitarios</span>
                    </span>
                    
                </h1>
                <div className="mx-auto px-11 sm:px-11">
                    <p className="mt-6 text-lg text-gray-700 text-center animate__animated animate__fadeIn">
                        Con el propósito de reconocer el impacto de Contenidos curriculares y Procesos de desarrollo de aprendizaje, mediante Proyectos de Integración Comunitaria (PIC)
                        a partir de las situaciones problemáticas en el contexto escolar y/o comunitario y acciones que hayan emprendido en las Escuelas Telesecundarias del Estado de Puebla.                
                    </p>
                </div>
            </div>
        </div>
    )
}