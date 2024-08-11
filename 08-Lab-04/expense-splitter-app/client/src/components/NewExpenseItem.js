
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const NewExpenseItem = () => {

  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  function newExpenseItemForm() {

    return (
      <Form>
        <Form.Group className="mb-3" controlId="expenseDescription">
          <Form.Label>Expense Description</Form.Label>
          <Form.Control type="text" placeholder="Expense Description" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

      {/* //
        Payeename [Text]
        Date [Date]
        Price [Number] 
       */}
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
  
  function newExpenseModal() {
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className='float-end'>
          New Expense Item
        </Button>
  
        <Modal show={show} onHide={handleClose}>
      
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
      
          <Modal.Body>
            {
              newExpenseItemForm()
            }
          </Modal.Body>
      
      
          <Modal.Footer>
      
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
        
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          
      </Modal.Footer>
      
        </Modal>
      </>
    );
  }

  
  return (
    <div>
      {
        newExpenseModal()
      }
    </div>
  )
}

export {NewExpenseItem}