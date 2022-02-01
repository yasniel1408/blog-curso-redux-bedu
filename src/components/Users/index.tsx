import { FC } from "react";
import { IUser } from "./types/IUser";
import useGetUsers from "./hooks/useGetUsers";
import Spinner from "../Spinner";

const Users: FC = () => {
  const { users, loading, error } = useGetUsers();
  return (
    <div className="margen">
      <p className="error-message">{error}</p>

      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          <>{loading && <Spinner />}</>
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
