import React from "react";
import styles from "./Modal.module.css";

function Modal({ errors, onErrorReset }) {
  function errorResetHandler() {
    onErrorReset("");
  }
  return (
    <div>
      <div
        className={styles["modal-background"]}
        onClick={errorResetHandler}
      ></div>
      <div className={styles.modal}>
        <h2>Invalid input</h2>
        <p>{errors}</p>
        <div>
          <button onClick={errorResetHandler}>Okay</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
