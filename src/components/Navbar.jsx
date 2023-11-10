// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import NavTabs from './NavTabs';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <NavTabs
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          About Me
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Us
        </Link>,
      ]}
    />
  );
}
