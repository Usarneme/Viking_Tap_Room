import React from 'react'
import { Link } from 'react-router-dom'
import { GiVikingHead, GiVikingHelmet } from 'react-icons/gi'

function Navbar() {
  const navbarStyles = {
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(2, 188px)',
    gridColumnGap: '11px',
    alignItems: 'center',
    background: 'rgba(255,255,255,0.6)',
    borderBottom: '2px groove #111',
    width: '100%'
  }

  const linkStyles = {
    padding: '24px',
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    background: 'rgba(255,255,255,0.3)',
    borderRadius: '15px',
    textAlign: 'center',
  }

  const iconStyles = {
    fontSize: '32px'
  }

  const spanStyles = {
    padding: '11px',
  }

  return (
    <nav style={ navbarStyles }>
      <Link style={linkStyles} to="/">
        <GiVikingHead style={iconStyles} />
        <span style={spanStyles} >Home</span>
      </Link>
      <Link style={linkStyles} to="/kegs">
        <GiVikingHelmet style={iconStyles} />
        <span style={spanStyles} >Kegs</span>
      </Link>
    </nav>
  )
}

export default Navbar
