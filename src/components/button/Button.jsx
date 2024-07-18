import styles from "./Button.module.scss";

const Button = ({ children, onClick }) => {
  return (
    <button style={{backgroundColor:"#0BA42D", display:"flex", alignItems:"center",gap:"10px", padding:"10px 30px", marginTop:"15px", borderRadius:"10px"}} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
