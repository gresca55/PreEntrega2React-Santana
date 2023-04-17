import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import gollostore from "../img/gollostore.png";

export const HeaderNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSubMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='header'>
      <div className='logo'>
        <NavLink to='/inicio'>
          <span>
            <img src={gollostore} alt="G" />
          </span>
        </NavLink>
      </div>
    
      <nav>
        <ul>
          <li> 
            <NavLink to="/inicio" className={({isActive}) => isActive ? "activado": ""}>
              Inicio
            </NavLink>
          </li>
          <li> 
            <NavLink to="/nosotros" className={({isActive}) => isActive ? "activado": ""}>
              Nosotros
            </NavLink>
          </li>
          <li> 
            <NavLink to="/salud" className={({isActive}) => isActive ? "activado": ""}>
              Salud
            </NavLink>
          </li>
          <li className='dropdown'>
            <NavLink
              to="/tienda"
              className={isOpen ? "activado" : ""}
              onClick={toggleSubMenu}
            >
              Tienda
            </NavLink>
                                 
            <ul className={`submenu ${isOpen ? "activado" : ""}`}>
              <li>
                <NavLink
                  to="/tienda/diadema"
                  className={({isActive}) => isActive ? "activado": ""}
                >
                  Diadema
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tienda/eaglebrand"
                  className={({isActive}) => isActive ? "activado": ""}
                >
                  EagleBrand
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tienda/electroacupuntura"
                  className={({isActive}) => isActive ? "activado": ""}
                >
                  Electroacupuntura
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tienda/lampara"
                  className={({isActive}) => isActive ? "activado": ""}
                >
                  Lampara
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tienda/mascarilla"
                  className={({isActive}) => isActive ? "activado": ""}
                >
                  Mascarilla
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tienda/warmpalace"
                  className={({isActive}) => isActive ? "activado": ""}
                >
                  WarmPalace
                </NavLink>
              </li>
            </ul>
          </li>
                                 
          <li> 
            <NavLink to="/contactenos" className={({isActive}) => isActive ? "activado": ""}>
              Contactenos
            </NavLink>
          </li>
                                
          <form className='buscar'> 
            <input placeholder='Buscar'></input>
            <button>buscar</button>
          </form>
        </ul>
      </nav>
    </header>
  )
}