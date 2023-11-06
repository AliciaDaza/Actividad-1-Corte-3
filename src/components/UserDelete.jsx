import React from 'react';

function UserDelete({ user, deleteUser }) {
  return (
    <div>
      <h2>Eliminar Usuario</h2>
      <p>¿Estás seguro de que deseas eliminar a {user.name}?</p>
      <button onClick={() => deleteUser(user.id)}>Eliminar</button>
    </div>
  );
}

export default UserDelete;