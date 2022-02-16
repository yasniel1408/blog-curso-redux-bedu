import { FC } from 'react';
import { IUser } from './types/IUser';
import useGetUsers from './hooks/useGetUsers';
import Spinner from '../../components/Spinner';
import Error from '../../components/Error';
const Users: FC = () => {
    const { users, loading, error } = useGetUsers();
    return (
        <div className="margen">
            <Error error={error} />
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
            <>{loading && <Spinner />}</>
        </div>
    );
};

export default Users;
