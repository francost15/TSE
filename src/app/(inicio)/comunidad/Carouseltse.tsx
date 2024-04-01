import Image from "next/image";
function Imagetse() {
    const images = [
        "/assets/tse1.jpg",
        "/assets/tse2.jpg",
        "/assets/tse3.jpg",
        "/assets/tse4.jpg",
        "/assets/tse5.jpg",
        "/assets/tse7.jpg",
        "/assets/tse6.jpg",
        "/assets/tse8.jpg",

        // Agrega aquí las rutas de las demás imágenes
    ];

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="grid gap-4">
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-lg"
                                src={image}
                                alt="fotos"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Imagetse;