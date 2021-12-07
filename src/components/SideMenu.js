import React, { useEffect, useState } from 'react';
import logo from '../assets/logo/dp.jpg';
import user from '../assets/logo/dp.jpg';
import MenuItem from './MenuItem';

const menuItems = [
    { name: "Dashboard", exact: true, to: "/", iconClassName: "bi bi-speedometer2" },
    { name: "Content", exact: true, to: "/content",
    iconClassName: "bi bi-newspaper",
    subMenus: [{ name: "Courses", to: "/content/courses" }, { name: "Videos", to: "/content/videos" }],
    },
    { name: "Design", to: "/design", iconClassName: "bi bi-vector-pen" },
];

const SideMenu = (props) => {
    const [inactive, setInactive] = useState(false);

    useEffect(() => {
        if(inactive){
            document.querySelectorAll(".sub-menu").forEach((el) => {
                el.classList.remove("active");
            });
        }

        props.onCollapse(inactive);
    },  [inactive]);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
        <div className="top-section">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
                {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
            </div>
        </div>

        <div className="search-controller">
            <button className="search-btn">
                <i class="bi bi-search"></i>
            </button>
            <input type="text" placeholder="search"/>
        </div>

        <div className="divider"></div>

        <div className="main-menu">
            <ul>
                {menuItems.map((menuItem, index) => (
                    <MenuItem
                        key={index}
                        name={menuItem.name}
                        exact={menuItem.exact}
                        to={menuItem.to}
                        subMenus={menuItem.subMenus || []}
                        iconClassName={menuItem.iconClassName}
                        onClick={() => {
                            if(inactive){
                                setInactive(false);
                            }
                        }}
                    />
                ))}

                {/* <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-speedometer2"></i>
                        </div>
                        <span>Dashboard</span>
                    </a>
                </li>
                <MenuItem 
                name = {"Content"}
                subMenu={[{ name: "Courses" }, { name: "Videos" }]}/>
                <li>
                    <a className="menu-item">
                        <div className="menu-icon">
                            <i class="bi bi-vector-pen"></i>
                        </div>
                        <span>Design</span>
                    </a>
                </li> */}
            </ul>
        </div>

        <div className="side-menu-footer">
            <div className="avatar">
                <img src={user} alt="user"/>
            </div>
            <div className="user-info">
                <h5>Aman Raza</h5>
                <p>amanraza1234@gmail.com</p>
            </div>
        </div>
    </div>
  );
}

export default SideMenu;