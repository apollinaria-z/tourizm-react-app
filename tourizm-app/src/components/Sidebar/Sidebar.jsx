import React from 'react';
import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return(
    <nav className={s.sidebar}>
          <div className={s.item}>
            <NavLink to="/mainpage" activeClassName={s.activeLink}>Main Page</NavLink>
          </div>
          <div className={s.item}>
            <NavLink to="/login" activeClassName={s.activeLink}>Log in</NavLink>
          </div>
           <div className={s.item}>
              <NavLink to="/registration" activeClassName={s.activeLink}>Registration</NavLink>
           </div>

    </nav>
    );
}

export default Sidebar;