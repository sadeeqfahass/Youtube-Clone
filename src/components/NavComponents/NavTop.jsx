import NavIcons from './NavIcons';
import NavLogo from './NavLogo';
import NavSearch from './NavSearch';

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
