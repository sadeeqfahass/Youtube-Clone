import NavIcons from './NavComponents/NavIcons';
import NavLogo from './NavComponents/NavLogo';
import NavSearch from './NavComponents/NavSearch';

function NavTop() {
  return (
    <div className="top">
          <NavLogo />
          <NavSearch />
          <NavIcons />
        </div>
  )
}

export default NavTop
