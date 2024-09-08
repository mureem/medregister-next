'use client';

import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <section className={styles.section}>
                <ul>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink}>Пациенты</a>
                        <div className={styles.buttonGroup}>
                            <a href="/upload" className={styles.button}><img src="/icons/upload.svg" alt="Upload" /></a>
                            <a href="/download" className={styles.button}><img src="/icons/download.svg" alt="Download" /></a>
                            <a href="/patient" className={styles.button}><img src="/icons/patient.svg" alt="Patient" /></a>
                            <a href="/create" className={styles.button}><img src="/icons/create.svg" alt="Create" /></a>
                        </div>
                    </li>
                </ul>
            </section>

            <section className={styles.section}>
                <ul>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink}>Отчеты</a>
                        <a href="/report" className={styles.reportButton}><img src="/icons/report.svg" alt="Report" /></a>
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default Sidebar;
