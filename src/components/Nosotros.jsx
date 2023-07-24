export default function Nosotros() {
    return (
      <div className="flex flex-col h-screen mt-20 mb-0 ">
        <div className="flex-1 flex flex-row ">
          <div className="w-1/2 mb-5">
            <img
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="Card Image"
              className="w-full h-auto rounded-t-lg rounded-b-lg object-cover"
            />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-3xl font-semibold">Persistencia y voluntad</h2>
            <p className="mt-4">
              Equipo conformado por futuros desarrolladores entusiastas de la tecnología y Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Maxime, dicta omnis. Unde doloribus esse cum, ipsum quos rerum, dolorum qui aut
              sit quia doloremque iste, deserunt tenetur? Repellat, dolorem ipsum.
            </p>
          </div>
        </div>
        <div className="mt-auto ">
          <Footer />
        </div>
      </div>
    );
  }
  
