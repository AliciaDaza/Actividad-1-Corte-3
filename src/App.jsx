import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import UserEdit from './components/UserEdit';
import UserDelete from './components/UserDelete';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const editUser = (userId) => {
    setSelectedUser(users.find((user) => user.id === userId));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setSelectedUser(null);
  };

  return (
    <Router>
        <Navbar bg="danger" expand="lg" className="mb-5">
          <Navbar.Brand>CRUD de Usuarios</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link  as={Link} to="/">Lista de Usuarios</Nav.Link>
              <Nav.Link as={Link} to="/add">Registrar Usuario</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes>
          <Route path="/" element={<UserList users={users} deleteUser={deleteUser} editUser={editUser} />} />
          <Route path="/add" element={<UserForm addUser={addUser} />} />
          <Route path="/edit" element={selectedUser && <UserEdit user={selectedUser} updateUser={updateUser} />} />
          <Route path="/delete" element={selectedUser && <UserDelete user={selectedUser} deleteUser={deleteUser} />} />
        </Routes>
    </Router>
  );
}

export default App;