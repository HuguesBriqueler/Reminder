import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import editIcon from "./SidebarIcons/edit.svg";
import folderIcon from "./SidebarIcons/folder.svg";
import toolsIcon from "./SidebarIcons/settings.svg";
import menuIcon from "./SidebarIcons/menu.svg";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <>
      <button className={styles.toggle_nav_btn}>
        <img src={menuIcon} alt="menu icon" />
      </button>
      <nav className={styles.container_sidebar}>
        <div className={styles.sidebar}>
          <div className={styles.three_dots}>
            <div className={`${styles.dot_nav} ${styles.d_red}`}></div>
            <div className={`${styles.dot_nav} ${styles.d_yellow}`}></div>
            <div className={`${styles.dot_nav} ${styles.d_green}`}></div>
          </div>
        </div>
        <ul>
          <Link to="/">
            <li>
              <img src={folderIcon} alt="folder icon" />
            </li>
          </Link>
          <Link to="/edit">
            <li>
              <img src={editIcon} alt="edit icon" />
            </li>
          </Link>
          <Link to="/tools">
            <li>
              <img src={toolsIcon} alt="tools icon" />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}
