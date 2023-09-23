import React from 'react'
import { NavLink } from 'react-router-dom'

const UserSideNav = () => {
  return (
    <aside>
       <nav>
        <h2>Configurar minha conta</h2>
        <ul>
          <li><NavLink to="profile">Meu Perfil</NavLink></li>
          <li><NavLink to="adress">Meu Endereço</NavLink></li>
        </ul>
        <h2>Pedidos</h2>
        <ul>
          <li><NavLink to="orders">Meus Pedidos</NavLink></li>
          <li><NavLink to="canceled">Cancelamentos</NavLink></li>
        </ul>
        <h2>Whishlist</h2>
        <ul>
          <li><NavLink to="favorite">Favoritos</NavLink></li>
        </ul>
       </nav>
    </aside>
  )
}

export default UserSideNav
