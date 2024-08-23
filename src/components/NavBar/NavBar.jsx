import Home from '../Icons/Home';
import Surveys from '../Icons/Surveys';
import Feedback from '../Icons/Feedback';
import { Link, useLocation } from 'react-router-dom';
import './navbar.scss';
import OneToOne from '../Icons/OneToOne';
import Goals from '../Icons/Goals';
import Vibes from '../Icons/Vibes';
import Reports from '../Icons/Reports';
const NavBar = () => {
  const location = useLocation();
  const navBarData = [
    {
      path: '/',
      label: 'Home',
      icon: (color) => <Home color={color} />,
    },
    {
      path: '/surveys',
      label: 'Surveys',
      icon: (color) => <Surveys color={color} />,
    },
    {
      path: '/feedback',
      label: 'Feedback',
      icon: (color) => <Feedback color={color} />,
    },
    {
      path: '/goals',
      label: 'Goals',
      icon: (color) => <Goals color={color} />,
    },
    {
      path: '/one-to-ones',
      label: '1-on-1s',
      icon: (color) => <OneToOne color={color} />,
    },
    {
      path: '/good-vibes',
      label: 'Good Vibes',
      icon: (color) => <Vibes color={color} />,
    },
    {
      path: '/reports',
      label: 'Reports',
      icon: (color) => <Reports color={color} />,
    },
  ];

  return (
    <div className="navBar">
      {navBarData.map((data) => {
        const isActive = location.pathname === data.path;
        const color = isActive ? '#1053FF' : '#606B79';
        return (
          <Link
            className={`navBarItem ${isActive ? 'active' : ''}`}
            to={data.path}
            key={data.label}
          >
            {data.icon(color)}
            <span className={`${isActive ? 'active' : ''}`}>{data.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
