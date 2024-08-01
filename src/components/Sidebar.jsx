import React from 'react';
import { routes } from '../constants/menuList';

// console.log(routes);

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>
        <a href="#">LOGO</a>
      </h2>

      <ul className="menus">
        {routes.map((route, idx) => (
          <li key={idx}>
            <a href={route.href}>{route.href.slice(1)}</a>
          </li>
        ))}
      </ul>

      <p className="sidebar-info">Copyright &copy; All right reserved.</p>
    </div>
  );
};

export default Sidebar;
