import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
      <nav>
        <a href="/" id="logo">
          Logo
        </a>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="actors">Actors</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}