import Image from "next/image";
function ImageGrid() {
    const images = [
        "/assets/1.jpg",
        "/assets/2.jpg",
        "/assets/3.jpg",
        "/assets/4.jpg",
        "/assets/5.jpg",
        "/assets/7.jpg",
        "/assets/6.jpg",
        "/assets/8.jpg",

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

export default ImageGrid;