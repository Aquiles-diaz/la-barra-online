import React, { useState } from "react";
import {
  FaEnvelope,
  FaShoppingCart,
  FaShippingFast,
  FaAngleDown,
} from "react-icons/fa";
import "animate.css";
import SearchBar from "./components/SearchBar";

export default function LaBarraOnline() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const combos = [
    { tipo: "combo", nombre: "Combo Fernet x2", desc: "Fernet + Coca + hielo = felicidad garantizada.", precio: 6500, img: "/combo1.jpg" },
    { tipo: "combo", nombre: "Combo Vodka Party", desc: "Vodka + energizante + vaso rojo. Let’s gooo!", precio: 8900, img: "/combo2.jpg" },
    { tipo: "combo", nombre: "Combo Birrero", desc: "6 birras + maní salado de regalo. Plan perfecto.", precio: 7200, img: "/combo3.jpg" },
    { tipo: "combo", nombre: "Combo Gin Tonic", desc: "Gin + tónica + limón. Frescura asegurada.", precio: 7600, img: "/combo4.jpg" },
    { tipo: "combo", nombre: "Combo Champagne Night", desc: "Champagne + copas + velas. Noche especial.", precio: 9800, img: "/combo5.jpg" },
  ];

  const bebidas = [
    { tipo: "bebida", nombre: "Gin Bombay", desc: "Exquisito gin importado", precio: 6500, img: "/gin.jpg" },
  ];

  const productosTotales = [...combos, ...bebidas];
  const [resultadosFiltrados, setResultadosFiltrados] = useState(productosTotales);

  const categorias = [
    "CHIVAS EXPERIENCE", "OFERTAS", "VINOS", "ESPUMANTES", "WHISKIES", "GIN",
    "LICORES", "VODKA", "RON", "APERITIVOS", "CERVEZAS", "COMESTIBLES",
    "ACCESORIOS", "OTRAS",
  ];

  return (
    <div className="font-poppins bg-gradient-to-b from-black via-[#0d0d0d] to-[#111] text-white relative">
      
      {/* Header */}
      <header className="text-white font-sans w-full">
        <div className="text-sm text-center py-1">
          ENVÍO GRATIS COMPRA MAYOR a $30000
        </div>

        <div className="py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '2px' }}>
              La Barra Online
            </h1>
          </div>

          <div className="flex-1 flex justify-center">
            <SearchBar productos={productosTotales} />
          </div>

          <div className="flex justify-center gap-4 text-xl">
            <FaEnvelope className="hover:text-red-500 cursor-pointer" />
            <FaShoppingCart className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        <nav className="text-sm px-4 md:px-12">
          <ul className="flex flex-wrap justify-center gap-4 py-2">
            {categorias.map((cat, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setOpenDropdown(index)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <span className="hover:text-red-500 flex items-center gap-1">
                  {cat} {cat === "OTRAS" && <FaAngleDown />}
                </span>
                {cat === "OTRAS" && openDropdown === index && (
                  <div className="absolute top-full mt-1 left-0 bg-white text-black shadow-md rounded-md z-50 min-w-[150px]">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Tequila</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Sake</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Mezcal</a>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="h-[80vh] flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1170&auto=format&fit=crop')` }}>
        <div className="bg-black bg-opacity-70 p-10 rounded-lg text-center max-w-xl mx-auto animate__animated animate__fadeIn">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Tu previa <span className="text-red-500">empieza acá</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">Combos explosivos, entrega rápida y toda la energía que tu noche necesita.</p>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-16 px-6 md:px-20 bg-[#111] text-white">
        <h3 className="text-3xl font-bold mb-12 text-center">Productos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {resultadosFiltrados.length === 0 ? (
            <p className="text-center col-span-full text-gray-400">No se encontraron productos.</p>
          ) : (
            resultadosFiltrados.map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] rounded-lg shadow-sm border border-gray-700 overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200">
                <img src={item.img} alt={item.nombre} className="w-full h-60 object-contain p-4" />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xl font-semibold mb-1 text-white">${item.precio}</p>
                    <p className="text-sm text-gray-300 mb-1">{item.desc}</p>
                    <p className="text-xs text-gray-400 mb-3 italic">{item.nombre}</p>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black px-3 py-1 rounded-full w-fit mb-4">
                      <FaShippingFast className="text-white" /> Envío gratis
                    </div>
                  </div>
                  <button className="w-full border border-white hover:bg-white hover:text-black transition py-2 px-4 font-semibold rounded-md">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
