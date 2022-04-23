import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/reducers/actions";
import editIcon from "./SidebarIcons/edit.svg";
import folderIcon from "./SidebarIcons/folder.svg";
import toolsIcon from "./SidebarIcons/settings.svg";
import menuIcon from "./SidebarIcons/menu.svg";
import styles from "./Sidebar.module.css";
import SideNotes from "./SideNotes/SideNotes";

// Component: Sidebar
// Description:
//    This component is responsible for displaying the sidebar responsivaly.
//    It is composed of a menu button, a set of sidebar buttons, a search bar and a list of notes.
//    The menu button is used to display the sidebar menu on mobile devices, otherwise it is hidden.
//    On regular devices, the menu button is hidden and the sidebar menu is displayed.

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

  const dispatch = useDispatch();

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
                <button onClick={() => dispatch({ type: actions.RESET_NOTE })}>
                  <img src={editIcon} alt="edit icon" />
                </button>
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
