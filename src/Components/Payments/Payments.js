import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PaymentModal from './PaymentModal';

import styles from './Payments.module.css';

const Payments = props => {
    const [ showModal, setShowModal] = useState(false);
    const submitHandler = (event) => {
        event.preventDefault();
        setShowModal(true);
    }
    return (
        <section className={styles.payments}>
            <h1>Checkout</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control placeholder="Enter full name" className={styles.input}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className={styles.input}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="111 Street St" className={styles.input}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio or floor" className={styles.input}/>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control className={styles.input}/>
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control className={styles.input}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPostalCode">
                        <Form.Label>Postal Code</Form.Label>
                        <Form.Control placeholder="A1A 1A1" className={styles.input}/>
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" className={styles.button}>
                    Download
                </Button>
            </Form>
            {showModal && <PaymentModal show={showModal} onHide={() => setShowModal(false)} />}
        </section>
    );
}

export default Payments;