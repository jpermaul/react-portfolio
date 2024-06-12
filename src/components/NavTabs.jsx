import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    
    <nav className="navbar navbar-expand-lg bg-white">
   
      <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-tabs">
              <li className="nav-item">
                <Link to="/About"className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Portfolio"className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact"className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/Resume"className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
              </li>
          </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
