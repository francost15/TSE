import Image from "next/image"

interface Props {
    nombre: string;
    cargo: string;
    imagenUrl: string;
}

export const PatrocinadoresCards = ({nombre,cargo,imagenUrl}:Props) => {
    return (
        <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
        <div className="relative overflow-hidden bg-white  mb-12 hover-grayscale-0 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
            <div className="relative overflow-hidden px-6">
                <Image src={imagenUrl} className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image" width={120} height={120} />
            </div>
            <div className="pt-6 text-center">
                <p className="text-lg leading-normal font-bold mb-1">{nombre} </p>
                <p className="text-gray-500 leading-relaxed font-light">{cargo}</p>
            </div>
        </div>
    </div>
    )
}
