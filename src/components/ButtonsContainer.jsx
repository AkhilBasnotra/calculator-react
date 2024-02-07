import styles from "./ButtonsContainer.module.css";

let ButtonsContainer = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((button) => (
        <button key={Math.random()} className={styles.button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;