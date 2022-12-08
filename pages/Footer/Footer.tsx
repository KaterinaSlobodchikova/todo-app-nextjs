import { FC } from "react";
import styles from "../Footer/Footer.module.css";

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <p>Double-click to edit a todo</p>
      <div>
        <p>
          Created by{" "}
          <a href="https://github.com/KaterinaSlobodchikova">katerinasl</a>
        </p>
      </div>

      <div>
        <p>
          Part of <a href="https://todomvc.com/">TodoMVC</a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
