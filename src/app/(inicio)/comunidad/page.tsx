import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCross } from '@fortawesome/free-solid-svg-icons'

import Image from "next/image";
import 'animate.css';
import Carousel from "./Carousel";
import Carouseltse from "./Carouseltse";


export const metadata = {
    title: 'Comunidad Ts',
    description: 'Pagina de comunidad',
};

export default function ComunidadPage() {
    return (
        <div className="flex flex-col items-center justify-center mt-12">
            <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-7xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">
                <span className="inline md:block">Conoce a </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-blue-400 to-rose-500 md:inline-block">Nuestra comunidad</span>
            </h1>
            <div className='mt-6 animate__animated animate__fadeIn'>
                <Image className="mx-auto" src={"/assets/comunidad.png"} alt={"comunidad"} width={300} height={300} />
            </div>
            <div className='mt-6'>
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">            
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-400 to-orange-800 md:inline-block">
                    El Tecomate, Francisco Z. Mena, Puebla.
                </span>
                </h1>
                <div className="mx-auto px-11 sm:px-11">
                    <p className="mt-6 text-lg text-gray-700 text-center animate__animated animate__fadeIn">
                        La localidad de El Tecomate está situada en el Municipio de Francisco Z. Mena (en el Estado de Puebla). Cuenta con 995 habitantes 
                        por lo que ocupa el 5to lugar estadisticamente.
                        <br />
                        El Tecomate está a 145 metros sobre el nivel del mar. Su nombre proviene del nahuatl TECOMATL, significa 
                        vasija de forma semiesférica que sirve para tomar agua u otros líquidos.            
                    </p>
                </div>
            </div>
            <div className='mt-6'>
                <div className="flex justify-center items-center">
                    <Carousel/>           
                </div>
            </div>
            <div className='mt-6'>
                <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">            
                    Principales Actividades Productivas de la Comunidad
                </h1>
                <div className="mx-auto px-11 sm:px-11">
                    <p className="mt-6 text-lg text-gray-700 text-center animate__animated animate__fadeIn">
                    En Puebla, la tierra y el trabajo se fusionan en una danza armoniosa, creando un ecosistema de abundancia y bienestar. 
                    La citricultura, la apicultura, la lichicultura y el comercio son más que actividades económicas, 
                    son pilares de una comunidad vibrante que celebra la vida y los frutos que la tierra generosamente ofrece.
                    </p>
                    <Image className="mx-auto" src={"/assets/naranjaabejas.png"} alt={"comunidad"} width={300} height={300} />
                </div>
            </div>
            <div className='mt-6'>
            <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">            
                Escuela{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-400 to-gray-500 md:inline-block">
                    Telesecundaria Lázaro Cárdenas del Río
                </span>
                <br />C.C.T.: 21DTV0194M
            </h1>                 
                <div className="mx-auto px-11 sm:px-11 ">
                    <p  className="mt-6 text-lg text-gray-700 text-center animate__animated animate__fadeIn">
                    Ubicación: Calle 5 de Mayo, El Tecomate, Francisco Z. Mena, Pue.
                    Fundada en el año de 1992<br />
                    En cuyos inicios el Profe. Noé Barragán Salas fue el pionero en este rubro
                    </p>
                <h1 className="mt-4 text-4xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">            
                Directores
                </h1>
                <p  className="mt-6 text-lg text-gray-700 text-center animate__animated animate__fadeIn">
                    En la trayectoria de la Escuela Telesecundaria Lázaro Cárdenas del Río, hemos tenido los siguientes directores:
                </p>
                <p className="mt-6 text-lg text-gray-700 text-center animate__animated animate__fadeIn">
                    Profr. Noé Barragán Salas<br />
                    Profr. Lucas Hernández Madrigal<br />
                    <span style={{display: 'inline-flex', alignItems: 'center'}}>Profr. Adan Sánchez Cruz <FontAwesomeIcon icon={faCross} width={10} height={10} /></span><br />
                    Profe. Juan Javier Sánchez Cruz<br />
                </p>
                <h1 className="mt-4 text-4xl font-extrabold leading-10 tracking-tight text-gray-700 text-center sm:leading-none md:mt-2 animate__animated animate__fadeIn">            
                Plantilla actual: 
                </h1>
                <p className="mt-6 text-lg text-gray-700 text-center animate__animated animate__fadeIn">
                    Profr. Juan Javier Sánchez Cruz<br />
                    Profr. Dorian Ruiz Bautista <br />
                    Profr. Obed Escamilla Torres<br />
                </p>
                </div>
                <div className='mt-6'>
                <div className="flex justify-center items-center">
                    <Carouseltse/>           
                </div>
            </div>
            </div>
        </div>
    );
}