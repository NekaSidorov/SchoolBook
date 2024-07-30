import React from "react";
import styles from "./Sign.module.css";
import { children } from "@/app/types/types";

export const SignUp = ({ children }: children) => {
  return (
    <>
      <div className={styles["div"]}>{children}</div>
    </>
  );
};
