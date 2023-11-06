import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/userform.css'

const UserEdit = ({ user, updateUser }) => {
  const [name, setName] = useState(user.name);
  const [apellido, setApellido] = useState(user.apellido);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && apellido) {
      updateUser({ id: user.id, name, apellido });
      navigate('/');
    }
  };

  return (
    <Container className='cont'>
      <h2>Editar Usuario</h2>
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
        <Button variant="primary" type="submit">Guardar cambios</Button>
      </Form>
    </Container>
  );
}

export default UserEdit;