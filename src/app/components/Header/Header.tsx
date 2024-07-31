"use client";

import { props } from "@/app/types/types";
import styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { useState } from "react";
import { FormIn } from "../SignIn/FormIn";
import { SignIn } from "../SignIn/SignIn";

export const Header = (props: props) => {
  const [popUpIsOpened, setPopUpIsOpened] = useState(false);

  const openPopUp = () => {
    setPopUpIsOpened(true);
  };

  const closePopUp = () => {
    setPopUpIsOpened(false);
  };

  return (
    <>
      <header>
        <h1>Здравсвуйте, {props.name}</h1>
        <h3>Сегодня у вас {props.id} новых оценок</h3>
        <button className={styles["enter"]} onClick={openPopUp}>
          ВОЙТИ
        </button>
        <Overlay isOpened={popUpIsOpened} close={closePopUp} />
        <FormIn isOpened={popUpIsOpened} close={closePopUp} />
      </header>
    </>
  );
};
