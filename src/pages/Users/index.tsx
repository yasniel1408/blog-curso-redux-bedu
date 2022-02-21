import { FC } from "react";
import useGetUsers from "./hooks/useGetUsers";
import Error from "../../components/Error";
import Tabla from "./components/Tabla";
import Loading from "../../components/Loading";
const Users: FC = () => {
  const { users, loading, error } = useGetUsers();
  return (
    <div className="margen">
      <Error error={error} />
      <Tabla users={users} />
      <Loading loading={loading} />
    </div>
  );
};

export default Users;
