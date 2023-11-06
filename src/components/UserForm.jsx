import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/userform.css'

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && apellido) {
      addUser({ name, apellido });
      setName('');
      setApellido('');
      navigate('/');
    }
  };

  return (
    <Container className='cont'>
      <h2>Registrar Usuario</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">Registrar</Button>
      </Form>
    </Container>
  );
}

export default UserForm;