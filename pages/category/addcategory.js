import React from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function addcategory() {
  return (
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Category ID</Form.Label>
      <Form.Control type="text" placeholder="Enter Id" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Category Name</Form.Label>
      <Form.Control type="text" placeholder="Enter name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>Category Image</Form.Label>
      <Form.Control type="file" placeholder="Enter Image" />
    </Form.Group>
  </Form>
  )
}

export default addcategory
