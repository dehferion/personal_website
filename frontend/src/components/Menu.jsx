import { NavLink } from 'react-router-dom';
import Button from './misc-componets/Button';
import styles from './Menu.module.css';
import { useState } from 'react';

const Menu = () => {
    const [collapsed, setCollapsed] = useState(false);
    const className = collapsed ? styles.triangleUp : styles.triangleUp;
    const navClasses = collapsed && document.body.clientWidth < 779 ? styles.hideNav : styles.navDefault;
    const onTriangleClick = (e) => {
        setCollapsed(!collapsed);
        var div = document.querySelector(`.${styles.triangleUp}`),
            deg = collapsed ? 0 : 180;
        div.style.webkitTransform = 'rotate(' + deg + 'deg)';
        div.style.mozTransform = 'rotate(' + deg + 'deg)';
        div.style.msTransform = 'rotate(' + deg + 'deg)';
        div.style.oTransform = 'rotate(' + deg + 'deg)';
        div.style.transform = 'rotate(' + deg + 'deg)';
    };

    return (
        <nav className={navClasses}>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to="." end>
                Про мене
            </NavLink>

            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to="contacts">
                Контакти
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'activeLink' : 'link')} to="blog">
                <Button text="Блог" />
            </NavLink>
            <div className={className} onClick={onTriangleClick}></div>
        </nav>
    );
};

export default Menu;
