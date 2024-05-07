export default function Header() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start">

            <div className="mb-4 md:mb-0 md:mr-4">
                <img src="/img/logo.svg" alt="Ícone" className="w-10 h-10" />
            </div>
            
            <div className="order-1 md:order-none">
                <img src="/img/header2.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>
            
            <div className="text-center md:text-left">
                <img src="/img/header.svg" alt="Imagem" className="w-full md:w-auto" />
            </div>
        </div>
    )
}
