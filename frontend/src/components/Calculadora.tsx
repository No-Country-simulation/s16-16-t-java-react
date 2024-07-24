import React, { useState } from 'react';

export default function Calculadora() {
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div>
      <div className="w-[614px] h-[490px] bg-cyan-950 rounded-lg border-2 border-cyan-600 flex-col justify-center items-center gap-12 inline-flex">
        <div className="w-96 h-14 px-4 py-2.5 bg-cyan-600 rounded-lg justify-center items-center gap-3.5 inline-flex hover:shadow-md hover:shadow-cyan-700 transition-shadow duration-200">
          <input 
            type="file" 
            className="hidden" 
            id="file-upload" 
            onChange={handleFileUpload} 
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <img className="mx-auto" src="/src/assets/img/botón-subida-calculadora.svg" alt="Texto alternativo de la imagen" />
          </label>
          {fileName && <div className="text-white">{fileName}</div>}
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-stone-300 text-sm font-medium font-['Open Sans']">
            o si lo prefieres, puedes
          </div>
          <a 
            href="https://www.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center border-1 border-cyan-600 rounded-lg hover:shadow-md hover:shadow-cyan-700 transition-shadow duration-200"
          >
            <img 
              src="/src/assets/img/botón-encontrar-calculadora.png" 
              alt="Texto alternativo de la imagen" 
              className="h-14 object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
































/* import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

export default function Calculadora() {
  const [fileName, setFileName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="w-[614px] h-[490px] bg-cyan-950 rounded-lg border-2 border-cyan-600 flex-col justify-center items-center gap-12 inline-flex">
        <div className="w-96 h-14 px-4 py-2.5 bg-cyan-600 rounded-lg justify-center items-center gap-3.5 inline-flex hover:shadow-md hover:shadow-cyan-700 transition-shadow duration-200">
          <input 
            type="file" 
            className="hidden" 
            id="file-upload" 
            onChange={handleFileUpload} 
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <img className="mx-auto" src="/src/assets/img/botón-subida-calculadora.svg" alt="Texto alternativo de la imagen" />
          </label>
          {fileName && <div className="text-white">{fileName}</div>}
        </div>
        <div className="self-stretch h-24 flex-col justify-start items-center gap-4 flex">
          <div className="self-stretch text-center text-stone-300 text-sm font-medium font-['Open Sans']">
            o si lo prefieres, puedes
          </div>
          <div className="w-96 h-14 px-3.5 py-2.5 bg-neutral-50 rounded-lg border-2 border-cyan-600 flex items-center">
            <IoIosSearch className="text-cyan-950 text-xl ml-6 mr-2" />
            <input 
              type="text" 
              className="flex-grow bg-transparent outline-none text-cyan-950 text-base font-semibold font-['Open Sans'] placeholder-cyan-950" 
              placeholder="Encontrar uno en nuestro buscador" 
              value={searchQuery} 
              onChange={handleSearchChange} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
 */