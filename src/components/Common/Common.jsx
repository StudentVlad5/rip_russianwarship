import { NavLink } from "react-router-dom"

export const  NavMenu = (to, children) => <NavLink style={({ isActive }) => isActive ? {
    color: '#fff',
    background: '#006600',
    textDecoration: 'none',
    listStyle: 'none',
    fontSize: 18,
    padding: 5,
    width: 150,
    borderRadius: 10,
    boxShadow: '1px 4px 11px 3px #f4f0f0b1 inset',
    WebkitBoxShadow: '1px 4px 11px 3px #ecebebb1 inset',
    MozBoxShadow: '1px 4px 11px 3px #f1f1f1b1 inset'
  }
: { color: '#161617',
    background: '#CCCC66', 
    textDecoration: 'none', 
    listStyle: 'none',
    fontSize: 18,
    padding: 5,
    width: 150,
    borderRadius: 10, }}
    to={to}>{children}</NavLink>