// app/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarLeft}>
                <a href="/" className={styles.navbarBrand}>Медрегистр.рф</a>
            </div>
            <div className={styles.navbarRight}>
                <button onClick={toggleDropdown} className={styles.profileButton}>
                    <img src="/icons/profile.svg" alt="Профиль" className={styles.icon} />
                    Профиль
                </button>
                {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <ul>
                            <li>
                                <a href="/user" className={styles.dropdownItem}>
                                    <img src="/icons/settings.svg" alt="Настройки" className={`${styles.icon} ${styles.settings}`} />
                                    Настройки
                                </a>
                            </li>
                            <li>
                                <a href="/logout" className={styles.dropdownItem}>
                                    <img src="/icons/logout.svg" alt="Выход" className={styles.icon} />
                                    Выйти
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
