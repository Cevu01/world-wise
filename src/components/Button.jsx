import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  //dot notacija npr. styles.type, bukvalno gleda type klasu, zato moramo dinamicki sa bracket notacijom
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
