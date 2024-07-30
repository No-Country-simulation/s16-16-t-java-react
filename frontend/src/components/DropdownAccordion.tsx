import React, { useState } from 'react';
import classNames from 'classnames';

interface Material {
  id: number;
  name: string;
  color: string;
  type: string;
}

const materials: Material[] = [
  { id: 3, name: "PLA - Gris", color: "#adadad", type: "PLA" },
  { id: 4, name: "PLA - Amarillo", color: "#eeee22", type: "PLA" },
  { id: 5, name: "PLA - Negro", color: "#000000", type: "PLA" },
  { id: 6, name: "PLA - Blanco", color: "#ffffff", type: "PLA" },
  { id: 7, name: "PLA - Verde", color: "#81d742", type: "PLA" },
  { id: 8, name: "PLA - Rojo", color: "#dd3333", type: "PLA" },
  { id: 9, name: "PLA - Naranja", color: "#dd9933", type: "PLA" },
  { id: 10, name: "PLA - Azul", color: "#28b7ff", type: "PLA" },
  { id: 11, name: "PLA - Transparente", color: "#efefef", type: "PLA" },
  { id: 12, name: "PLA - Rosa", color: "#e76ff2", type: "PLA" },
  { id: 17, name: "PLA - Madera", color: "#c9902e", type: "PLA" },
  { id: 28, name: "PETG - Gris", color: "#b7b7b7", type: "PETG" },
  { id: 14, name: "PETG - Blanco", color: "#ffffff", type: "PETG" },
  { id: 13, name: "PETG - Negro", color: "#000000", type: "PETG" },
  { id: 20, name: "PETG - Rojo", color: "#f73838", type: "PETG" },
  { id: 21, name: "PETG - Azul", color: "#219cd1", type: "PETG" },
  { id: 18, name: "ABS - Blanco", color: "#ffffff", type: "ABS/ASA" },
  { id: 19, name: "ABS - Negro", color: "#000000", type: "ABS/ASA" },
  { id: 24, name: "ASA - Blanco", color: "", type: "ABS/ASA" },
  { id: 23, name: "ASA - Negro", color: "#000000", type: "ABS/ASA" },
  { id: 15, name: "Flexible - Negro", color: "#000000", type: "Flexible" },
  { id: 16, name: "Flexible - Blanco", color: "#ffffff", type: "Flexible" },
  { id: 22, name: "Resina Blanca", color: "#ffffff", type: "Resina Pro" },
  { id: 27, name: "Resina Flexible", color: "#5b5b5b", type: "Resina Pro" },
  { id: 29, name: "Nylon PA12 - Blanco", color: "#ffffff", type: "Nylon PA12" },
  { id: 30, name: "Nylon PA12 - Negro", color: "#000000", type: "Nylon PA12" },
];

const DropdownAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState<Material | null>(materials.find(m => m.id === 3) || null);
  const [expandedGroups, setExpandedGroups] = useState<{ [key: string]: boolean }>({});

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const onClickCollapse = (type: string) => {
    setExpandedGroups(prevState => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  const selectMaterial = (material: Material) => {
    setActiveMaterial(material);
    setIsOpen(false); // Close dropdown when an item is selected
  };

  const renderMaterials = (type: string) => {
    return materials
      .filter(material => material.type === type)
      .map(material => (
        <button
          key={material.id}
          className="flex items-center p-2"
          onClick={() => selectMaterial(material)}
        >
          <input
            style={{ display: 'none' }}
            type="radio"
            name="product_filament"
            checked={activeMaterial?.id === material.id}
            readOnly
          />
          <div style={{ backgroundColor: material.color }} className="w-6 h-6 mr-2 border border-blue-50 rounded"></div>
          <span className="text-sky-200 text-base font-['Open Sans']">{material.name}</span>
        </button>
      ));
  };

  return (
    <div className="relative w-[433px]">
      {/* Main Dropdown Button */}
      <div
        className={classNames(
          "w-full h-[46px] rounded-t-lg border-2 border-neutral-400 flex items-center px-4",
          {
            'rounded-b-lg': !isOpen,
            'bg-transparent': !isOpen, // transparente cuando está cerrado
            'bg-cyan-950': isOpen, // Fondo cyan oscuro cuando está abierto
          }
        )}
      >
        <div className="text-sky-200 text-[15px] font-light font-['Open Sans']">Material:</div>
        <div style={{ backgroundColor: activeMaterial?.color }} className="w-6 h-6 mx-2 border border-blue-50 rounded"></div>
        <div className="text-sky-200 text-sm font-normal font-['Open Sans']">{activeMaterial?.name}</div>
        <button className="ml-auto w-6 h-6" onClick={toggleDropdown}>
          {/* Main Arrow icon with rotation */}
          <svg
            className={classNames('w-6 h-6 transform transition-transform', { 'rotate-90': isOpen })}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute left-0 top-[46px] w-[433px] max-h-[337.68px] bg-sky-900 z-50 rounded-b-lg border-x-2 border-b-2 border-neutral-400 overflow-y-auto shadow-lg">
          {["PLA", "PETG", "ABS/ASA", "Flexible", "Resina Pro", "Nylon PA12"].map((type, index) => (
            <div key={type} className="py-2 px-6">
              <button
                className="flex justify-between items-center w-full py-2 text-left text-sky-200 text-base font-medium font-['Open Sans']"
                onClick={() => onClickCollapse(type)}
              >
                {`${index + 1}. ${type}`}
                {/* Group Arrow icon with rotation */}
                <svg
                  className={classNames('w-4 h-4 ml-2 transform transition-transform', { 'rotate-90': expandedGroups[type] })}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              {expandedGroups[type] && (
                <div className="pl-6">
                  {renderMaterials(type)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownAccordion;
