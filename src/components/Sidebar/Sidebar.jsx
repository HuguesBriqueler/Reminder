import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import editIcon from "./SidebarIcons/edit.svg";
import folderIcon from "./SidebarIcons/folder.svg";
import toolsIcon from "./SidebarIcons/settings.svg";
import menuIcon from "./SidebarIcons/menu.svg";
import styles from "./Sidebar.module.css";
import SideNotes from "./SideNotes/SideNotes";

export default function Sidebar() {
  // This state is used to toggle the sidebar relative to the window size
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setViewWidth(window.innerWidth);
  };
  // Each time the window is resized, the viewWidth state is updated
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {viewWidth < 768 && (
        <button onClick={toggleSidebar} className={styles.toggle_nav_btn}>
          <img src={menuIcon} alt="menu icon" />
        </button>
      )}
      <nav
        className={`${styles.container_sidebar} ${
          sidebarOpen ? styles.visible_nav : ""
        }`}
      >
        <div className={styles.sidebar}>
          <div className={styles.three_dots}>
            <div className={`${styles.dot_nav} ${styles.d_red}`}></div>
            <div className={`${styles.dot_nav} ${styles.d_yellow}`}></div>
            <div className={`${styles.dot_nav} ${styles.d_green}`}></div>
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
        </div>
        <SideNotes />
      </nav>
    </>
  );
}
