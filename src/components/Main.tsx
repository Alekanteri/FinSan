import React from "react";
import styles from "../sass/components/Main.module.scss";
import VisualBlock from "./MainComponents/VisualBlock";

const Main: React.FC = () => {
  return (
    <div className={styles.container}>
        <div className={styles.visualBody}>
          <VisualBlock className={styles.visualBlock}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae, enim in ipsa hic eos magni repellat unde cupiditate
            necessitatibus recusandae assumenda omnis voluptatibus nulla tempore
            nam consequatur, fugit quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae, enim in ipsa hic eos magni repellat unde cupiditate
            necessitatibus recusandae assumenda omnis voluptatibus nulla tempore
            nam consequatur, fugit quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae, enim in ipsa hic eos magni repellat unde cupiditate
            necessitatibus recusandae assumenda omnis voluptatibus nulla tempore
            nam consequatur, fugit quis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            molestiae, enim in ipsa hic eos magni repellat unde cupiditate
            necessitatibus recusandae assumenda omnis voluptatibus nulla tempore
            nam consequatur, fugit quis?
          </VisualBlock>
          <VisualBlock className={styles.visualBlock}>
            fjla;sdfj;lakds
          </VisualBlock>
          <VisualBlock className={styles.visualBlock}>
            123
          </VisualBlock>
        </div>
        <div className={styles.cont}>
          <div className={styles.right}>
          Note that any other scrolls, such as those performed by the user, are not affected by this property. When this property is specified on the root element, it applies to the viewport instead. This property specified on the body element will not propagate to the viewport.
          </div>
          <div className={styles.left}>
          Note that any other scrolls, such as those performed by the user, are not affected by this property. When this property is specified on the root element, it applies to the viewport instead. This property specified on the body element will not propagate to the viewport.
          </div>
        </div>
    </div>
  );
};

export default Main;
