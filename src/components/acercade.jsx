
import Footer from "./Footer";

export default function AcercaDe() {
  return (
    <div>
      <div className="bg-[hsl(56,53%,41%)] p-10 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] max-w-6xl m-auto">
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-semibold text-center">
            Bienvenido a nuestra tienda <br /> de productos electrónicos
          </h1>
          <p className="text-white">
            Cellfish es un E-commerce dedicado a brindar el mejor servicio de eventa de celulares y accesorios
          </p>
        </div>
        <span className="flex flex-row justify-center items-center">
          <span className="flex items-center justify-center">
            <box-icon name="mouse" color="white"></box-icon>
          </span>
          <span className="text-white font-bold">Deslizar hacia abajo</span>
        </span>
      </div>

      <div className="flex flex-row gap-8 max-w-6xl m-auto py-16">
        <div>
          <img
            className="rounded-2xl"
            src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          ></img>   
        </div>
        <div className="flex flex-col items-start justify-center p-8 gap-8">
          <h3 className="text-6xl font-semibold">
            <span className="text-black">Encuentra </span>
            <span className=" text-gray-500">tus productos electrónicos</span>
          </h3>
          <p>
            Desde teléfonos móviles, tablets, <br /> laptops y accesorios
            tecnológicos.
          </p>
          <button className="bg-[#242424] text-white">Explorar ahora</button>
        </div>
      </div>

      <div className="bg-[#eef0f2] w-full p-8  mt-20 flex flex-col items-center justify-center gap-8 h-[30rem]">
        <h2 className="text-5xl text-center font-semibold text-black">
          Póngase en contacto con nosotros <br /> para más información
        </h2>
        <p>
          Si necesita ayuda o tiene alguna pregunta, estamos aquí para usted
        </p>
        <button className="bg-[#242424] text-white">Contáctanos</button>
      </div>
      <Footer />
    </div>
  );
}