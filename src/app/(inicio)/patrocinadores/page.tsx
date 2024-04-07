import { PatrocinadoresCards } from '@/components';
import 'animate.css';


interface Patrocinador {
    nombre: string;
    cargo: string;
    imagenUrl: string;
}

export const metadata = {
    title: 'Colaboradores Ts',
    description: 'Pagina de colaboradores',
};

export default function PatrocinadoresPage() {
    const patrocinadores: Patrocinador[] = [
        // Agrega más patrocinadores aquí
        { nombre: 'Ing. Pedro Hernández Bustos', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png' },
        { nombre: 'Profr. Hermelindo Ortiz Iturbide', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png' },
        { nombre: 'Profr. Abacú Mariano Francisco', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png' },
        { nombre: 'Ing. Humberto Santiago Hernández', cargo: 'CEO & Fundador de Wimx Movil', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png' },
        { nombre: 'C. Narciso Cruz Hernández', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png' },
        { nombre: 'C. Erika Lara García', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png' },
        { nombre: 'C. Guillermo Martínez Magdalena', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png' },
        { nombre: 'Autoridades Ejidales', cargo: 'De la Comunidad El Tecomate', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png' },
        { nombre: 'Profr. Juan Javier Sánchez Cruz', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png' },
        { nombre: 'Profr. Juan Rogelio García Escudero', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png' },
        { nombre: 'C. Berenice Acundo Hernández', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png' },
        { nombre: 'C. Jose Martínez Martínez', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png' },
        { nombre: 'Lic. Gildardo Vargas García', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png' },
        { nombre: 'Lic. Victor Vargas García', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png' },
        { nombre: 'Profra. Ciria Gabino Mendoza', cargo: '', imagenUrl: 'https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png' },
    ];

    return (
        <div id="team" className="section relative pt-20 pb-8 md:pt-16 bg-white">
            <div className="container xl:max-w-6xl mx-auto px-4 ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeInDown">
            <span className="pt-4 md:pt-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-cyan-400 to-blue-800 md:inline-block">Benefactores</span>
            <span className="inline md:block"> </span>
        </h1>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" xmlSpace="preserve" style={{ margin: '0 auto', height: '60px' }}/>
                <div className="mr-2 flex flex-wrap flex-row-mx-4 justify-center">
                    {patrocinadores.map((patrocinador, index) => (
                        <PatrocinadoresCards key={index} nombre={patrocinador.nombre} cargo={patrocinador.cargo} imagenUrl={patrocinador.imagenUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}
