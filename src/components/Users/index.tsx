import { FC, useEffect, useState } from "react";
import axios from "axios";
import { IUser } from "./types/IUser";

const Users: FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const load = async () => {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    };
    load();
  }, [setUsers]);

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {!!users.length &&
            users.map((user: IUser) => (
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
