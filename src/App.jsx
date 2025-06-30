import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  FaEnvelope,
  FaShoppingCart,
  FaShippingFast,
  FaAngleDown,
  FaGift,
  FaUserFriends,
} from "react-icons/fa";
import "animate.css";
import SearchBar from "./components/SearchBar";

export default function LaBarraOnline() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const combos = [
    {
      tipo: "combo",
      nombre: "Combo Fernet",
      desc: "Fernet + Coca + hielo = felicidad garantizada.",
      precio: 14900,
      img: "https://acdn-us.mitiendanube.com/stores/001/144/141/products/mesa-de-trabajo-51_1-10011-6bad72be828aca317516696657206839-1024-1024.jpg",
    },
    {
      tipo: "combo",
      nombre: "Combo Vodka Party",
      desc: "Vodka + energizante + vaso rojo. Let’s gooo!",
      precio: 29000,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_790992-MLA45413911395_042021-F.webp",
    },
    {
      tipo: "combo",
      nombre: "Combo Birrero",
      desc: "6 birras + maní salado de regalo. Plan perfecto.",
      precio: 7200,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_756205-MLA77326661057_062024-F.webp",
    },
    {
      tipo: "combo",
      nombre: "Combo Gin Tonic",
      desc: "Gin + tónica + limón. Frescura asegurada.",
      precio: 14750,
      img: "https://acdn-us.mitiendanube.com/stores/001/144/141/products/mesa-de-trabajo-1279-c843e8db796b9b33e317074904015971-1024-1024.png",
    },
    {
      tipo: "combo",
      nombre: "Combo Champagne Night",
      desc: "Champagne + copas + velas. Noche especial.",
      precio: 9800,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_832458-MLA54406132718_032023-F.webp",
    },
  ];

  const bebidas = [
    {
      tipo: "bebida",
      nombre: "Gin Bombay",
      desc: "Exquisito gin importado",
      precio: 6500,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_839608-MLU74873115992_032024-F.webp",
    },
  ];

  const productosTotales = [...combos, ...bebidas];
  const [resultadosFiltrados, setResultadosFiltrados] = useState(productosTotales);

  const categorias = [
    "OFERTAS",
    "VINOS",
    "ESPUMANTES",
    "WHISKIES",
    "GIN",
    "LICORES",
    "VODKA",
    "RON",
    "APERITIVOS",
    "CERVEZAS",
    "ACCESORIOS",
    "OTRAS",
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
            <h1
              className="text-3xl md:text-4xl font-extrabold tracking-wider uppercase"
              style={{ fontFamily: "Poppins, sans-serif", letterSpacing: "2px" }}
            >
              La Barra Online
            </h1>
          </div>

          <div className="flex-1 flex justify-center">
            <SearchBar productos={productosTotales} />
          </div>

          <div className="flex justify-center gap-4 text-xl">
            <FaShoppingCart className="hover:text-red-700 cursor-pointer" />
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
                <span className="hover:text-red-700 flex items-center gap-1">
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
      <section
        className="h-[80vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1680868164610-c085a6bf8c70?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-black bg-opacity-40 p-10 rounded-lg text-center max-w-xl mx-auto animate__animated animate__fadeIn">
         <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white leading-tight">
            Tu previa <span className="text-red-700">empieza acá</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl text-white font-light">
            Combos explosivos, entrega rápida y toda la energía que tu noche necesita.
          </p>
        </div>
      </section>

      {/* Productos */}
      <section id="productos" className="py-16 px-6 md:px-20 bg-[#111] text-white">
        <h3 className="text-3xl font-bold mb-12 text-center">Productos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {resultadosFiltrados.length === 0 ? (
            <p className="text-center col-span-full text-gray-400">
              No se encontraron productos.
            </p>
          ) : (
            resultadosFiltrados.map((item, i) => (
              <div
                key={i}
                className="bg-[#1a1a1a] rounded-lg shadow-sm border border-gray-700 overflow-hidden flex flex-col hover:scale-105 transition-transform duration-200"
              >
                <img
                  src={item.img}
                  alt={item.nombre}
                  className="w-full h-60 object-contain p-4"
                />
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xl font-semibold mb-1 text-white">
                      ${item.precio}
                    </p>
                    <p className="text-sm text-gray-300 mb-1">{item.desc}</p>
                    <p className="text-xs text-gray-400 mb-3 italic">{item.nombre}</p>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black px-3 py-1 rounded-full w-fit mb-4">
                      <FaShippingFast className="text-white" /> Envío gratis
                    </div>
                  </div>
                 <button
  onClick={() => toast.success("Producto agregado al carrito 🎉")}
  className="w-full border border-white hover:bg-white hover:text-black transition py-2 px-4 font-semibold rounded-md"
>
  Agregar al carrito
</button>

                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-[#fff] text-black py-20 px-6 text-center">
        <h3 className="text-3xl font-bold mb-12 text-red-600">¿Cómo funciona?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">1. Elegís tu combo</h4>
            <p>Explorá entre nuestras mejores combinaciones.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">2. Lo pedís</h4>
            <p>Escribinos por WhatsApp con un solo clic.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-2">3. Llega a tu casa</h4>
            <p>Rápido, seguro y listo para arrancar la noche.</p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section id="beneficios" className="bg-[#191919] py-20 px-6 text-white text-center">
        <h3 className="text-3xl font-bold mb-12">¿Por qué elegirnos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <FaShippingFast size={40} className="mx-auto mb-4 text-red-500" />
            <h4 className="text-xl font-semibold">Envío rápido</h4>
            <p className="text-gray-400">En menos de 1 hora en zonas seleccionadas.</p>
          </div>
          <div>
            <FaGift size={40} className="mx-auto mb-4 text-red-500" />
            <h4 className="text-xl font-semibold">Promos semanales</h4>
            <p className="text-gray-400">Descuentos exclusivos cada fin de semana.</p>
          </div>
          <div>
            <FaUserFriends size={40} className="mx-auto mb-4 text-red-500" />
            <h4 className="text-xl font-semibold">Referidos</h4>
            <p className="text-gray-400">Invitá amigos y ganá combos gratis.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0d0d0d] text-white py-10 mt-10 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold uppercase tracking-wide mb-2">La Barra Online</h2>
            <p className="text-sm text-gray-400">Tu noche empieza con un clic.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Navegación</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#beneficios" className="hover:text-red-500">¿Por qué elegirnos?</a></li>
              <li><a href="#como-funciona" className="hover:text-red-500">Cómo funciona</a></li>
              <li><a href="#productos" className="hover:text-red-500">Productos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Seguinos</h3>
            <div className="flex items-center gap-4 text-xl">
              <a href="#" className="hover:text-red-500 transition"><FaEnvelope /></a>
              <a href="#" className="hover:text-red-500 transition"><FaShoppingCart /></a>
            </div>
            <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} La Barra. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
    
  );
  
}
