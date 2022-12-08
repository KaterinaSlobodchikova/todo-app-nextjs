import { FC } from "react";
import styles from "../FilterButton/FilterButton.module.css";

type ButtonProps = {
  name: string;
  className?: string;
  isPressed: boolean;
  onClick: () => void;
  setFilter: any;
};

const FilterButton: FC<ButtonProps> = ({
  name,
  className,
  isPressed,
  onClick,
  setFilter,
}) => {
  return (
    <div>
      <button
        type="button"
        name={name}
        className={(styles.button, className)}
        area-pressed={isPressed}
        onClick={() => setFilter(name)}
      >
        <span className={styles.visuallyHidden}>Show </span>
        <span className={isPressed ? styles.spanSelected : ""}>{name}</span>
        <span className={styles.visuallyHidden}> tasks</span>
      </button>
    </div>
  );
};

export default FilterButton;
