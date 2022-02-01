import { FC } from "react";
import { IUser } from "./types/IUser";
import useGetUsers from "./hooks/useGetUsers";

const Users: FC = () => {
  const { users, loading, error } = useGetUsers();
  return (
    <div className="margen">
      <p className="error-message">{error}</p>
      <h1>{loading && "Loading..."}</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: IUser) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
