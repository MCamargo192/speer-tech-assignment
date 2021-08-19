import { Modal, Button } from "react-bootstrap";

import styles from './PaymentModal.module.css';

const PaymentModal = props => (
    <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            Your subscription is done! 
            </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
            <Button onClick={props.onHide} className={styles.button}>Enjoy it!</Button>
        </Modal.Footer>
    </Modal>
);

export default PaymentModal;