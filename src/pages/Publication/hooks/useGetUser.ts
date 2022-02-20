import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../redux/actions/userActions";
import { IUser } from "../../../types/IUser";

type AppProps = {
  index?: string;
};

const useGetUser = ({ index }: AppProps) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<IUser | null>(null);
  const { users, loading, error } = useSelector(
    ({ userReducer }: { userReducer: any }) => userReducer
  );

  useEffect(() => {
    !users.length && dispatch(getAll());
    setUser(users.find((user: IUser) => Number(user.id) === Number(index)));
  }, [dispatch, index, users]);

  return { user, loading, error };
};

export default useGetUser;
