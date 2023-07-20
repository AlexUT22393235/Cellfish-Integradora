import { Link, Outlet } from "react-router-dom";



export default function Navbar() {
    return (
        <>
            <div className="bg-[#e6d1b1] dark:bg-[#242424] dark:text-white   text-black fixed top-0 left-0 w-full flex flex-row justify-between px-20 py-4 items-center z-[9999] ">
                <div>
                    <h1 className="text-2xl font-semibold">
                        <Link to={"/"}>
                            <span className="text-black dark:text-white">CELLFISH</span>
                        </Link>
                    </h1>
                </div>
                <div className="item-center">
                    <ul className="flex flex-row gap-8">
                        <Link to="/productos">
                        <li>Productos</li>
                        </Link>

                        <Link to="/ofertas">
                        <li>Ofertas</li>
                        </Link>

                        <Link to="/nosotros">
                        <li>Nosotros</li>
                        </Link>

                        {/* <li>
                            <Link to="/acercade">
                                <span className="text-black dark:text-white">Acerca de</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-row border-2 p-2 rounded-xl gap-2">
                        <box-icon name="search" color="gray"></box-icon>
                        <input
                            className="bg-[#e6d1b1] outline-none dark:bg-[#242424] dark:text-white]"
                            type="search"
                            placeholder="Buscar"
                        ></input>
                    </div>
                    <div className="flex flex-row items-center px-4 gap-4">
                        {/* <box-icon name="cart"></box-icon> */}
                        <Link to="/Login">
                        <box-icon name='user-circle' type='solid' ></box-icon>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-[64px]">
  <Outlet />
</div>
        </>
    );
}