// src/components/SearchBar.jsx
import React, { useState } from "react";

export default function SearchBar({ productos }) {
  const [searchText, setSearchText] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleSearch = (e) => {
    const texto = e.target.value.toLowerCase();
    setSearchText(texto);

    const filtrados = productos.filter((item) =>
      item.nombre.toLowerCase().includes(texto) ||
      item.desc.toLowerCase().includes(texto)
    );

    setResultados(filtrados);
  };

  return (
    <div className="w-full max-w-xl">
      <input
        type="text"
        placeholder="Buscar productos..."
        className="w-full px-4 py-2 rounded-md text-black"
        value={searchText}
        onChange={handleSearch}
      />

      {searchText && resultados.length > 0 && (
        <div className="mt-4 bg-white text-black rounded-md shadow-lg">
          {resultados.map((item, index) => (
            <div key={index} className="p-4 border-b border-gray-200">
              <p className="font-semibold">{item.nombre}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <p className="text-red-600 font-bold mt-1">${item.precio}</p>
            </div>
          ))}
        </div>
      )}

      {searchText && resultados.length === 0 && (
        <div className="mt-4 bg-white text-black rounded-md shadow-lg p-4 text-sm text-gray-600">
          No se encontraron resultados.
        </div>
      )}
    </div>
  );
}
