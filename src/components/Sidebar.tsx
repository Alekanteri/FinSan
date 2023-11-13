import React from "react";
import styles from "../sass/components/Sidebar.module.scss";
import { GoHome} from "react-icons/go";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiLineChart } from "react-icons/bi";
import { AiOutlineLineChart } from 'react-icons/ai'
import { SiMarketo } from 'react-icons/si'

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  const handleClickActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarContainer}>
        <ul>
          <li
            onClick={() => handleClickActiveIndex(0)}
            className={activeIndex === 0 ? styles.active : styles.sidebarBtn}
          >
            <span className={styles.icon}><GoHome size={18} /></span>
              Dashboard
          </li>
          <li
            className={activeIndex === 1 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(1)}
          >
            <span className={styles.icon}>
              <AiOutlinePieChart size={18} />
            </span>
            Market update
          </li>
          <li
            className={activeIndex === 2 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(2)}
          >
            <span className={styles.icon}>
              <BiLineChart size={18} />
            </span>
            Income estimator
          </li>
          <li
            className={activeIndex === 3 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(3)}
          >
            <span className={styles.icon}><AiOutlineLineChart size={18} /></span>
            Intractive chart
          </li>
          <li
            className={activeIndex === 4 ? styles.active : styles.sidebarBtn}
            onClick={() => handleClickActiveIndex(4)}
          >
            <span className={styles.icon}><SiMarketo size={18}/></span>
            Mutual funds
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
