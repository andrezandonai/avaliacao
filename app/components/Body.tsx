export default function Body() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start">

            <div className="mb-4 md:mb-0 md:mr-4">
                <img src="/img/body.svg" alt="Ícone" className="w-60 h-60 md:w-96 md:h-96" />
            </div>
            
            <div className="order-1 md:order-none">
                <img src="/img/img1.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>
            
            <div className="text-center md:text-left">
                <img src="/img/img2.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>

            
            <div className="order-1 md:order-none">
                <img src="/img/img3.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>
            
            <div className="text-center md:text-left">
                <img src="/img/img4.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>

            
            <div className="order-1 md:order-none">
                <img src="/img/img5.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>
            
            <div className="text-center md:text-left">
                <img src="/img/img6.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>
        </div>
    )
}
