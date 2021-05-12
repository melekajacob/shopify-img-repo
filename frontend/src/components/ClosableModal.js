import { Modal } from "react-bootstrap";

import styles from "./ClosableModal.module.css";

export default function ClosableModal(props) {
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      className={styles.modal}
      animation={props.includeAnimation ?? true}
      size="lg"
      centered
    >
      {props.children}
    </Modal>
  );
}
