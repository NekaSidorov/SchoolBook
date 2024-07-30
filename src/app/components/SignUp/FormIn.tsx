import { SignUp } from "./Sign";
import styles from "./Sign.module.css";

export const FormIn = () => {
  return (
    <>
      <SignUp>
        <div className={styles["form"]}></div>
      </SignUp>
    </>
  );
};
