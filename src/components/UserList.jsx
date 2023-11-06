import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button } from 'react-bootstrap';

const UserList = ({ users, deleteUser, editUser }) => {
  return (
    <Container>
      <h2>Lista de Usuarios</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.apellido}</td>
              <td>
                <Link to="/edit">
                  <Button
                    variant="primary"
                    onClick={() => editUser(user.id)}
                  >
                    Editar
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserList;