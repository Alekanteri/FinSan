import React from "react";
import styles from "../sass/components/Sidebar.module.scss";
import { MdOutlineSettings, MdOutlineAccountCircle, MdOutlineHome, MdOutlinePieChart, MdOutlineStackedLineChart, MdOutlineMultilineChart, MdOutlineShoppingBag } from "react-icons/md";
const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleClickActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.sidebar}>
      <div>
        <ul>
          <li
            onClick={() => handleClickActiveIndex(0)}
            className={activeIndex === 0 ? styles.active : styles.sidebarBtn}
          >
              <MdOutlineHome />
          </li>
          <li
            className={activeIndex === 1 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(1)}
          >
              <MdOutlinePieChart />
          </li>
          <li
            className={activeIndex === 2 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(2)}
          >
              <MdOutlineStackedLineChart />
          </li>
          <li
            className={activeIndex === 3 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(3)}
          >
            <MdOutlineMultilineChart />
          </li>
          <li
            className={activeIndex === 4 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(4)}
          >
            <MdOutlineShoppingBag />
          </li>
        </ul>
      </div>
      <div className={styles.sideBarMenu}>
        <div className={`${styles.sidebarBtn}`}>
          <MdOutlineAccountCircle size={18} />
        </div>
        <div className={`${styles.sidebarBtn}`}>
          <MdOutlineSettings size={18}/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
